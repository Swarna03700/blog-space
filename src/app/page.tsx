import BlogCard from "@/components/BlogCard";
import { Card, Container, Grid } from "@mui/material";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Understanding React Components",
      excerpt:
        "A deep dive into the world of React components, exploring their lifecycle, state management, and best practices for building reusable components.A deep dive into the world of React components, exploring their lifecycle, state management, and best practices for building reusable components. A deep dive into the world of React components, exploring their lifecycle, state management, and best practices for building reusable components.",
      content: "Full content for Understanding React Components.",
      createdAt: new Date("2024-01-01T10:00:00Z"),
      updatedAt: new Date("2024-01-02T10:00:00Z"),
      publishedAt: new Date("2024-01-03T10:00:00Z"),
    },
    {
      id: 2,
      title: "Next.js for Beginners",
      excerpt:
        "An introductory guide to Next.js, covering its features, benefits, and how to get started with building server-rendered React applications.",
      content: "Full content for Next.js for Beginners.",
      createdAt: new Date("2024-01-04T10:00:00Z"),
      updatedAt: new Date("2024-01-05T10:00:00Z"),
      publishedAt: new Date("2024-01-06T10:00:00Z"),
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox",
      excerpt:
        "A comparison of CSS Grid and Flexbox, discussing their use cases, advantages, and how to choose the right layout system for your project.",
      content: "Full content for CSS Grid vs Flexbox.",
      createdAt: new Date("2024-01-07T10:00:00Z"),
      updatedAt: new Date("2024-01-08T10:00:00Z"),
      publishedAt: new Date("2024-01-09T10:00:00Z"),
    },
    {
      id: 4,
      title: "JavaScript ES6 Features",
      excerpt:
        "An overview of the new features introduced in ES6, including arrow functions, promises, and destructuring assignments.",
      content: "Full content for JavaScript ES6 Features.",
      createdAt: new Date("2024-01-10T10:00:00Z"),
      updatedAt: new Date("2024-01-11T10:00:00Z"),
      publishedAt: new Date("2024-01-12T10:00:00Z"),
    },
    {
      id: 5,
      title: "Building RESTful APIs with Node.js",
      excerpt:
        "A step-by-step guide to building RESTful APIs using Node.js, Express, and MongoDB, including authentication and error handling.",
      content: "Full content for Building RESTful APIs with Node.js.",
      createdAt: new Date("2024-01-13T10:00:00Z"),
      updatedAt: new Date("2024-01-14T10:00:00Z"),
      publishedAt: new Date("2024-01-15T10:00:00Z"),
    },
    {
      id: 6,
      title: "Introduction to TypeScript",
      excerpt:
        "A beginner's guide to TypeScript, covering its features, benefits, and how to integrate it into your JavaScript projects.",
      content: "Full content for Introduction to TypeScript.",
      createdAt: new Date("2024-01-16T10:00:00Z"),
      updatedAt: new Date("2024-01-17T10:00:00Z"),
      publishedAt: new Date("2024-01-18T10:00:00Z"),
    },
    {
      id: 7,
      title: "GraphQL vs REST",
      excerpt:
        "A detailed comparison of GraphQL and REST APIs, discussing their differences, advantages, and when to use each approach.",
      content: "Full content for GraphQL vs REST.",
      createdAt: new Date("2024-01-19T10:00:00Z"),
      updatedAt: new Date("2024-01-20T10:00:00Z"),
      publishedAt: new Date("2024-01-21T10:00:00Z"),
    },
    {
      id: 8,
      title: "Testing React Applications",
      excerpt:
        "An introduction to testing React applications using Jest and React Testing Library, including unit tests and integration tests.",
      content: "Full content for Testing React Applications.",
      createdAt: new Date("2024-01-22T10:00:00Z"),
      updatedAt: new Date("2024-01-23T10:00:00Z"),
      publishedAt: new Date("2024-01-24T10:00:00Z"),
    },
  ];
  return (
    <div className="mt-4 mb-4">
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
