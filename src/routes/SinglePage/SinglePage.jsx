import Slide from '~/components/Slide/Slide'
import './SinglePage.scss'
import singlePostData from '~/lib/singlepostdata'
import userData from '~/lib/userdata'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Map from '~/components/Map/Map'
import CropFreeIcon from '@mui/icons-material/CropFree'
import BedIcon from '@mui/icons-material/Bed'
import BathtubIcon from '@mui/icons-material/Bathtub'
import SchoolIcon from '@mui/icons-material/School'
import BusAlertIcon from '@mui/icons-material/BusAlert'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import SendIcon from '@mui/icons-material/Send'
import SaveIcon from '@mui/icons-material/Save'

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slide images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <LocationOnIcon />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price}vnd</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          {/* <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div> */}
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <CropFreeIcon />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <BedIcon />
              <span>2 beds</span>
            </div>
            <div className="size">
              <BathtubIcon />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <SchoolIcon />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <BusAlertIcon />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <RestaurantIcon />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <SendIcon />
              Send a Message
            </button>
            <button>
              <SaveIcon />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
