import React from 'react'

const NavBar = () => {
  return <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Productos</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">
      Preguntas Frecuentes
    </Nav.Link>
    <Nav.Link eventKey="link-1">
      Contactanos
    </Nav.Link>
  </Nav.Item>
</Nav>
}

export default NavBar
