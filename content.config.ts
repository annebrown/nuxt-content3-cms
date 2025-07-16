import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        apps: defineCollection({
            source: 'apps/**/*.yml',
            type: 'page',
            prefix: '/apps'
        }),
                blog: defineCollection({
            source: 'blog/*.md',
            type: 'page',
            prefix: '/blog'
        }),
        // Default @/content/ Collection
        docs: defineCollection({
            source: 'docs/**/*.md', 
            type: 'page',
            prefix: '/docs'
        }),
    } // Collections
})