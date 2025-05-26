import 'dotenv/config';
import { generateSlug } from './lib/utils';
import { posts } from './db/schema/posts';
import { drizzle } from 'drizzle-orm/neon-http';

const db = drizzle(process.env.DATABASE_URL!);

async function seed(){
    const title = "My Fourth Post";
    const content = "This is the content of my fourth post.";
    const slug = generateSlug(title);

    const post: typeof posts.$inferInsert = {
        title,
        content,
        slug
    }

    await db.execute(`SET TIME ZONE 'Asia/Kolkata'`);

    await db.insert(posts).values(post);
    console.log("new post created!");

    // const result = await db.select().from(posts);
    // console.log(result);

    
}

seed();