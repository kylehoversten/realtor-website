import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl, type BlogPostInput } from "@shared/routes";

export function usePosts() {
  return useQuery({
    queryKey: [api.posts.list.path],
    queryFn: async () => {
      const res = await fetch(api.posts.list.path);
      if (!res.ok) throw new Error("Failed to fetch posts");
      return api.posts.list.responses[200].parse(await res.json());
    },
  });
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: [api.posts.get.path, slug],
    queryFn: async () => {
      // Try server API first (works for local/dev with backend). If running as a static site (GitHub Pages)
      // the API won't exist, so fall back to reading the static `posts.json` and finding the post by slug.
      const url = buildUrl(api.posts.get.path, { slug });
      const res = await fetch(url);
      if (res.status === 404) {
        // Post genuinely not found on server
        return null;
      }
      if (res.ok) {
        return api.posts.get.responses[200].parse(await res.json());
      }

      // If the fetch failed (e.g., 404 from the server root because no backend), fall back to static list
      const listRes = await fetch(api.posts.list.path);
      if (!listRes.ok) throw new Error("Failed to fetch posts");
      const posts = api.posts.list.responses[200].parse(await listRes.json());
      return posts.find((p) => p.slug === slug) || null;
    },
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: BlogPostInput) => {
      const res = await fetch(api.posts.create.path, {
        method: api.posts.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.posts.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to create post");
      }
      return api.posts.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.posts.list.path] });
    },
  });
}
