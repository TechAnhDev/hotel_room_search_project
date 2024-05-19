import './SearchBar.scss'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const types = ['buy', 'recent']
const name = ['Trung cư mini', 'trọ thường']

function SearchBar() {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0
  })
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }))
  }
  const changeMinPrice = (e) => {
    setQuery((prev) => ({ ...prev, minPrice: e.target.value }))
  }
  const changeMaxPrice = (e) => {
    setQuery((prev) => ({ ...prev, maxPrice: e.target.value }))
  }
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type, index) => (
          <button key={type} onClick={() => switchType(type)} className={query.type === type ? 'active' : ''}>
            {name[index]}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="Địa chỉ" />
        <input
          onChange={changeMinPrice}
          type="tel"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Giá thấp nhất"
        />
        <input onChange={changeMaxPrice} type="tel" name="maxPrice" min={0} max={10000000} placeholder="Giá cao nhất" />

        <button>
          <Link to="/list">
            <SearchIcon className="searchicon" />
          </Link>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
