import { Link } from 'react-router-dom'
import category1 from '../assets/category-1.jpg'
import category2 from '../assets/category-2.jpg'
import '../App.css'

const Categories = () => {

  const my_categories = [
    {
      name: "Pet",
      path: '/pet',
      image: category1,
    },
    {
      name: "Human",
      path: '/human',
      image: category2,
    }

  ]

  return (
    <div className="product__grid">
      {my_categories.map((category) => {
        return (<Link to={`categories/${category.path}`} className='categories__card' key={category.name}>
          <img src={category.image} alt={category.name} />
          <h4>{category.name}</h4>
        </Link>)
      })}
    </div>
  )
}

export default Categories
