import { Navbar,Container,Nav,NavLink } from 'react-bootstrap';

function Header(){

    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">
            <img
                alt=""
                src="https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Tachyon Travel
            </Navbar.Brand>
                <Nav className="me-auto" >
                <NavLink href="/">Home</NavLink>
                <NavLink href="/destinations">Destinations</NavLink>
                <NavLink href="/trips">Trips</NavLink>
                {/* <NavLink href="/stops">Stops</NavLink> */}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;