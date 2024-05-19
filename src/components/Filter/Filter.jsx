import './Filter.scss'
import SearchIcon from '@mui/icons-material/Search'
function Filter() {
  return (
    <div className="filter">
      <h1>
        Tìm kiếm tại hà nội <b>Hanoi</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Quận</label>
          <input type="text" id="city" name="city" placeholder="Tên quận" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="buy">Trung cư mini</option>
            <option value="rnet">Trọ thường</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Giá thấp nhất</label>
          <input type="number" id="minPrice" name="minPrice" placeholder="100xxx" />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Giá cao nhất</label>
          <input type="text" id="maxPrice" name="maxPrice" placeholder="100xxx" />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" />
        </div>
        <button>
          <SearchIcon className="searchicon" />
        </button>
      </div>
    </div>
  )
}

export default Filter
