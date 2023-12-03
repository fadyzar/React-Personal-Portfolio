import React from 'react'

export const NavigationBar = () => {
  const navbarStyle = {
    top : '0px',
    color: 'gray', 
    padding: '20px', 
  };

  // const li = {
  
  // };
  
  return (
    <div class="navbar"  style={navbarStyle}>
    <ul class="nav" >
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="./contact.html">Contact</a></li>
    </ul>
    </div>
  )
}
