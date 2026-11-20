"use client"

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/api/post/post.api";
import Loading from "@/components/common/Loading";
import ErrorComponent from "@/components/common/ErrorComponent";

export default function PostList() {
    const { data: posts, isPending, isError } = useQuery({
        queryKey: ["post", "list"],
        queryFn: getPosts,
    })

    if (isPending) return <Loading />;
    if (isError) return <ErrorComponent />;

    return (
        <ul className="divide-y divide-gray-200">
            {posts.map((post) => (
                <li key={post.id} className="py-3 text-sm text-gray-800">
                    {post.title}
                </li>
            ))}
        </ul>
    );
}
