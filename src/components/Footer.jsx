import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0', textAlign: 'center' ,width: '100vw', borderTop: '1px solid #ccc',position:'bottom'}}>
      <div className="container">
        <p>&copy; 2023 Healthcare. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer