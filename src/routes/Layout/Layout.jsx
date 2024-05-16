import './Layout.scss'
import NavBar from '~/components/NavBar/NavBar'
import HomePage from '~/routes/Homepage/HomePage'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
