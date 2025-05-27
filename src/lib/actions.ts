import { db } from "@/db/drizzle";
import { posts } from "@/db/schema/posts";
import { convertUtcToIst } from "./utils";

export async function getAllPosts(){
    const res = await db.select().from(posts);
    const createdAt = res.at(0)?.createdAt;

    console.log(createdAt);


    if (createdAt !== undefined && createdAt !== null) {
        console.log(convertUtcToIst(createdAt));
    } else {
        console.log("createdAt is undefined or null");
    }
    
}

getAllPosts();

