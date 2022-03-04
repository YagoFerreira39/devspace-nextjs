import Link from 'next/link'

const CategoryLabel = ({category}) => {
  const colorKey = {
    JavaScript: '#f7bc13',
    CSS: '#014c6c',
    Python: '#018f8c',
    PHP: '#4D4773',
    Ruby: '#cf0a10',
  }

  return (
    <div
      className={`px-2 py-1 text-gray-100 font-bold rounded`}
      style={{ background: colorKey[category]}}
    >
      <Link href={`/blog/category/${category.toLowerCase()}`}>{category}</Link>
    </div>
  )
}

export default CategoryLabel