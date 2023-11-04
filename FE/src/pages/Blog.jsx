// import React, { useEffect, useState } from 'react'
// import CardBlog, { BlogCard } from '../components/BlogCard'

// export default function Blog() {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     fetch('/api/auth/admin/blog')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         console.log(response.data)
//         return response.json();
//       })
//       .then((data) => {
//         setBlogs(data.blogs);
//       })
//       .catch((error) => {
//         console.error('Error fetching blog posts:', error);
//       });
//   }, []);
//   return (
//     <div className="flex gap-4 w-full mb-40 lg:mb-4 lg:px-20 xl:60 underline-none ">
//       <section className="w-full flex underline-none flex-col  relative bg-primary-500 mt-0">
//       <h1 className='pt-10 pb-20 text-center font-bold text-primary lg:text-5xl'>From Our Blog</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {blogs.map((blog) => (
//             <BlogCard key={blog.id} title={<Link href={`/blog/${blog.id}`}>{blog.title} </Link>} description={blog.description} createdAt={(new Date(blog.createdAt).toLocaleString())} imageUrl={blog.imageUrl} />
//           ))}

//         </div>
//       </section>
//     </div>
//   )
// }

import React from 'react'

export default function Blog() {
    return (
        <div>
        blog
        </div>
    )
    }