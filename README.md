*posts Table Schema Documentation*

### Table Definition
The `posts` table stores blog post data with the following fields:
| Field Name | Data Type | Description | Constraints | Default Value |
| ---------- | --------- | ----------- | ----------- | ------------- | 
| `uuid` | `uuid` | Unique identifier for the post | `PRIMARY KEY`, `NOT NULL`, `UNIQUE` | `uuid_generate_v4()` |
| `title` | `varchar(255)` | Title of the post | `NOT NULL` | - |
| `slug` | `varchar(255)` | URL-friendly slug for the post | `NOT NULL`, `UNIQUE` | - |
| `excerpt` | `text` | Brief summary of the post | - | - |
| `content` | `text` | Full content of the post | `NOT NULL` | - |
| `is_published` | `boolean` | Whether the post is published | `NOT NULL` | `FALSE` |
| `created_at` | `timestamp with time zone` | Timestamp when the post was created | `NOT NULL` | `CURRENT_TIMESTAMP` |
| `published_at` | `timestamp with time zone` | Timestamp when the post was published | - | - |
| `modified_at` | `timestamp with time zone` | Timestamp when the post was last modified | `NOT NULL` | `CURRENT_TIMESTAMP` |

### Field Definitions
- `uuid`: A unique identifier for each post, generated using the `uuid_generate_v4()` function.
- `title`: The title of the post, with a maximum length of 255 characters.
- `slug`: A URL-friendly slug for the post, with a maximum length of 255 characters.
- `excerpt`: A brief summary of the post.
- `content`: The full content of the post.
- `is_published`: A boolean indicating whether the post is published or not.
- `created_at`: The timestamp when the post was created.
- `published_at`: The timestamp when the post was published.
- `modified_at`: The timestamp when the post was last modified.

### Constraints
- `PRIMARY KEY` constraint on the `uuid` field to ensure uniqueness.
- `UNIQUE` constraint on the `slug` field to prevent duplicate slugs.
- `NOT NULL` constraints on the `title`, `slug`, `content`, `is_published`, `created_at`, and `modified_at` fields to ensure required data is present.

### Example Queries
```
-- Create a new post
INSERT INTO posts (title, slug, excerpt, content)
VALUES ('Example Post', 'example-post', 'This is an example post.', 'This is the full content of the example post.');

-- Get all published posts
SELECT * FROM posts WHERE is_published = TRUE;

-- Get a specific post by slug
SELECT * FROM posts WHERE slug = 'example-post';

-- Update a post
UPDATE posts SET title = 'Updated Title', content = 'Updated content.' WHERE uuid = 'your-uuid-value';

-- Delete a post
DELETE FROM posts WHERE uuid = 'your-uuid-value';
```
### SQL Schema Definition
```
CREATE TABLE posts (
    uuid uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    title varchar(255) NOT NULL,
    slug varchar(255) NOT NULL UNIQUE,
    excerpt text,
    content text NOT NULL,
    is_published boolean NOT NULL DEFAULT FALSE,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    published_at timestamp with time zone,
    modified_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
