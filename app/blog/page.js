/* eslint-disable @next/next/no-img-element */
import React from 'react';  
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';


const dirContent = fs.readdirSync("content", "utf-8")

const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
})


// const blogs = [
//   {
//     title: 'First Blog',
//     description: 'This is the first blog description.',
//     slug: 'first-blog',
//     date: '2023-10-01',
//     author: 'John Doe',
//     image: '/typescript.webp'
//   },
//   {
//     title: 'Second Blog',
//     description: 'This is the second blog description.',
//     slug: 'second-blog',
//     date: '2023-10-02',
//     author: 'Jane Doe',
//     image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
//   {
//     title: 'Second Blog',
//     description: 'This is the second blog description.',
//     slug: 'second-blog',
//     date: '2023-10-02',
//     author: 'Jane Doe',
//     image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg'
//   },
//   // Add more blog objects here
// ];

/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 * 
 * @returns {JSX.Element} The rendered blog component.
 */
const Blog = () => {
  return (
    <div className="container p-4 mx-auto">
      {/* Main heading for the blog section */}
      <h1 className="mb-8 text-4xl font-bold text-center">Blog</h1>
      
      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md dark:border-2">
            {/* Blog post image */}
            <img src={blog.image} alt={blog.title} className="object-cover w-full h-64" />
            
            {/* Blog post content */}
            <div className="p-4">
              {/* Blog post title */}
              <h2 className="mb-2 text-2xl font-bold">{blog.title}</h2>
              
              {/* Blog post description */}
              <p className="mb-4 ">{blog.description}</p>
              
              {/* Blog post author and date */}
              <div className="mb-4 text-sm">
                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </div>
              
              {/* Link to the full blog post */}
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Click here</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;