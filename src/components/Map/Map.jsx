import './Map.scss'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'
import Pin from '../Pin/Pin'

function Map({ items }) {
  return (
    <MapContainer center={[21.0537, 105.73512]} zoom={13} scrollWheelZoom={false} className="map">
      <TileLayer
        attribution='&copy; <a href="https://maps.app.goo.gl/o9shhzG1ExvnPVUYA">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  )
}

export default Map
