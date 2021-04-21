import React from 'react'

function Footer(props) {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span>Place sticky footer content here. Author : {props.author}</span>
      </div>
    </footer>
  )
}

export default Footer