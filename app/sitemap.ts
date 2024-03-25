import { getAllBlogPosts } from '@/lib/actions/blog-actions'
 
export default async function sitemap(){
  const baseUrl = 'https://safertunisia.com'
  const posts = await getAllBlogPosts();
  
  const urls = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: 'https://safertunisia.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://safertunisia.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://safertunisia.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...urls,
  ]
}