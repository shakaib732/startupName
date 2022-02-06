import React from 'react'
import  './Header.css'
function Header(props) {
  return (
    <div className="header-container">
        <img className={`head-image ${props.transition ? 'head-image-expanded':'head-image-contracted'}`} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt='Logo' />
        <h1 className={`head-text ${props.transition ? 'head-text-expanded':'head-text-contracted'}`}>
            {props.headerTitle}
        </h1>
    </div>
  )
}

export default Header
