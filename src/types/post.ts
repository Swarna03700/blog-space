interface BlogPost{
    id: string | number;
    title: string;
    excerpt: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    publishedAt?: Date | string;
}

export interface BlogCardProps {
    post: BlogPost;
}