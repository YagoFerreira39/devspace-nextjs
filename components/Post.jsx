import Image from 'next/image'
import Link from 'next/link'
import CategoryLabel from './CategoryLabel'

const Post = ({ post }) => {
  return (
    <div className="w-full px-10 py-6 bg-white rounded shadow-md mt-6 cursor-pointer transition-all ease-in-out delay-100 hover:scale-105 hover:shadow-lg hover:shadow-gray-900">
      <Image 
        src={post.frontmatter.cover_image} 
        alt="__" 
        height={480} 
        width={600} 
        className="mb-4 rounded" 
      />
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {post.frontmatter.date}
        </span>
        <CategoryLabel category={post.frontmatter.category} />
      </div>
      <div className="text-gray-900 my-2">
        <Link href={`/blog/${post.slug}`}>
          <a
            className='text-2xl text-gray-800 font-bold hover:underline'
          >{post.frontmatter.title}</a>
        </Link>
        <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${post.frontmatter.slug}`}>
          <a
            className='text-2xl text-gray-900 hover:text-blue-600'
          >{`Read More`}</a>
        </Link>
      </div>

      <div className="flex items-center">
        <img src={post.frontmatter.author_image} alt="_" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
        />
        <h3 className="text-gray-700 font-bold">
          {post.frontmatter.author}
        </h3>
      </div>
    </div>
  )
}

export default Post