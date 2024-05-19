import './NavBar.scss'
import Logo from '~/assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Menu from '~/assets/menu.png'

function NavBar() {
  const user = false
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
          <span>trotot</span>
        </Link>
        <Link href="/">Trang chủ</Link>
        <Link href="/">Về chúng tôi</Link>
        <Link href="/">Liên hệ</Link>
        <Link href="/">Hợp tác</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link href="/">Đăng ký</Link>
            <Link href="/" className="register">
              Đăng nhập<picture></picture>
            </Link>
          </>
        )}
      </div>
      <div className="menuIcon">
        <img src={Menu} alt="" onClick={() => setOpen((prev) => !prev)} />
      </div>
      <div className={open ? 'menu active' : 'menu'}>
        <Link href="/">Trang chủ</Link>
        <Link href="/">Về chúng tôi</Link>
        <Link href="/">Liên hệ</Link>
        <Link href="/">Hợp tác</Link>
        <Link href="/">Đăng nhập</Link>
        <Link href="/">Đăng ký</Link>
      </div>
    </nav>
  )
}

export default NavBar
