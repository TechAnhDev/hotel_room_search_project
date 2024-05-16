import './SearchBar.scss'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

const types = ['buy', 'recent']

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
        {types.map((type) => (
          <button key={type} onClick={() => switchType(type)} className={query.type === type ? 'active' : ''}>
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="city location" />
        <input onChange={changeMinPrice} type="tel" name="minPrice" min={0} max={10000000} placeholder="min price" />
        <input onChange={changeMaxPrice} type="tel" name="maxPrice" min={0} max={10000000} placeholder="max price" />

        <button>
          <SearchIcon className="searchicon" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
