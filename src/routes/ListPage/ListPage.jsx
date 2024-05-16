import Filter from '~/components/Filter/Filter'
import './ListPage.scss'
import listData from '../../lib/dummydata'
import Map from '~/components/Map/Map'
import Card from '~/components/Card/Card'

function ListPage() {
  const data = listData

  return (
    <div className="listpage">
      <div className="listPageContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  )
}

export default ListPage
