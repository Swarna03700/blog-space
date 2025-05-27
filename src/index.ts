import 'dotenv/config';
import { convertUtcToIst, generateSlug } from './lib/utils';
import { posts } from './db/schema/posts';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);

async function seed(){
    const title = "My First Post";
    const content = "This is the content of my first post.";
    const slug = generateSlug(title);

    const post: typeof posts.$inferInsert = {
        title,
        content,
        slug
    }

    // await db.execute(`SET TIME ZONE 'UTC'`);
    // console.log("Time zone set to UTC successfully!");
    // try {
    //     await db.execute(`SET TIME ZONE 'Asia/Kolkata'`);
    //     console.log("Time zone altered successfully!");
    // } catch (error) {
    //     console.error("Failed to alter time zone:", error);
    // }

    // const result = await db.execute(`SELECT CURRENT_TIMESTAMP`);
    // const res: Date = new Date(result.rows[0].current_timestamp as string);
    // console.log(res);
    // console.log(convertUtcToIst(res));

    // await db.insert(posts).values(post);
    // console.log("new post created!");

    // try {
    //     const result = await db.select().from(posts);
    //     if (!result || result.length === 0) {
    //         console.log("No posts found.");
    //     } else {
    //         console.log(result);
    //     }
    // } catch (error) {
    //     console.error("Error fetching posts:", error);
    // }

    // await db.delete(posts).where(eq(posts.title, title));
    // // console.log("post deleted!");

    // await db.update(posts)
    //     .set({ content: "Updated content of my first post." })
    //     .where(eq(posts.slug, slug));
    // console.log("post updated successfully!");

    // await db.delete(posts);
    // console.log("All posts deleted successfully!");
    
}

seed();