import React from 'react'
import './Card.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
  <div className="card" style={{ borderColor: props.color || '#000' }}>
    <div className="content">
      {props.children}
    </div>
    <div className="footer" style={{ backgroundColor: props.color || ' #000' }}>
      {props.titulo}
    </div>
  </div>
