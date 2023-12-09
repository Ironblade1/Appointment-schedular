import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
	<div>
		<Navbar bg= "00" data-bs-theme="dark" style={{ backgroundColor: "rgba(255, 0, 0, var(--bs-bg-opacity))" }} >
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="/"><b>Home</b></Nav.Link>
            <Nav.Link  href="View"  ><b>Bookings</b></Nav.Link>
            <Nav.Link  href="AppointmentList"><b>Appointment List</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
	</div>
  )
}