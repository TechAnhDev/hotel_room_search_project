import './NavBar.scss'
import Logo from '~/assets/logo.png'
import { Link } from 'react-dom'
import { useState } from 'react'
import Menu from '~/assets/menu.png'

function NavBar() {
  const user = false
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={Logo} alt="logo" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <a to="/" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </a>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
      </div>
      <div className="menuIcon">
        <img src={Menu} alt="" onClick={() => setOpen((prev) => !prev)} />
      </div>
      <div className={open ? 'menu active' : 'menu'}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">Sign in</a>
        <a href="/">Sign up</a>
      </div>
    </nav>
  )
}

export default NavBar
