import React from 'react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
    const { title } = props;
  return (
   
   <nav className="navbar navbar-expand-sm navbar-dark bg-success">
     <a className="navbar-brand" href="#">{ title }</a>
       <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
         <li className="nav-item active">
           <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
         </li>    
       </ul>
   </nav>
  )
}

Navbar.defaultProps = {
  title: "My title"
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar;
