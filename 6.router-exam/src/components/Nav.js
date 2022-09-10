import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
  render(){
    return (
      <nav className='navtop'>
        <h2>Namoosori</h2>
        <ul className='nav-links'>
          {/* <li><a href='/'>Main</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/lessons'>Lessons</a></li> */}
          {/* <li><Link to='/'>Main</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/lessons'>Lessons</Link></li> */}
          <li><NavLink exact to='/'>Main</NavLink></li>
          <li><NavLink exact to='/about'>About</NavLink></li>
          <li><NavLink exact to='/lessons'>Lessons</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;