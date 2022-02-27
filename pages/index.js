import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from "../components/Layout";

export default function HomePage({ posts }) {
  return (
    <Layout>
      <div className="">
        <h1>DevSpace</h1>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return { slug, frontmatter }
  })

  console.log(posts)

  return {
    props: {
      posts
    }
  }
}