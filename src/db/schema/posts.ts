import { boolean, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const posts = pgTable('posts', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).unique().notNull(),
    excerpt: text('excerpt'),
    content: text('content').notNull(),
    isPublished: boolean('is_published').default(false),
    publishedAt: timestamp('published_at'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

