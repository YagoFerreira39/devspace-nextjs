import fs from 'fs'
import matter from 'gray-matter'
import path from 'path';

const search = ((req, res) => {
  let posts

  if(process.env.NODE_ENV === 'production') {
    // Fetch from cache
    posts = require('../../cache/data').posts
    console.log("PRODUCTION", posts)
  } else {
    const files = fs.readdirSync(path.join('posts'))

    posts = files.map(filename => {
      const slug = filename.replace('.md', '')
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

      const { data:frontmatter } = matter(markdownWithMeta)

      return {
        slug,
        frontmatter
      }
    })
  }

  console.log("CHECK POSTS", posts)

  const results = posts.filter(({ frontmatter: { title, excerpt, category }}) => title.toLowerCase().indexOf(req.query.q) !== -1 ||
    excerpt.toLowerCase().indexOf(req.query.q) !== -1 ||
    category.toLowerCase().indexOf(req.query.q) !== -1 
  )

  console.log(results)


  res.status(200).json(JSON.stringify({results}))
})

export default search;