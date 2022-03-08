import Link from "next/link"

const CategoryList = ({ categories }) => {
  return (
    <div className="w-full p-5 bg-white rounded-lg shadow-md mt-6">
      <h3 className="text-2xl bg-gray-800 text-white p-3 rounded">
        Blog Categories
      </h3>
      <ul className="divide-y divide-gray-500">
        {categories && categories.map(category => (
          <Link key={category} href={`/blog/category/${category.toLowerCase()}`}>
            <li className="p-4 cursor-pointer hover:bg-gray-500 hover:text-white">{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default CategoryList