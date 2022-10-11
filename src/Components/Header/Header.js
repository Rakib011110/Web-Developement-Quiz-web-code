import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='text-info' as={Link} to={"/"} href="#home"> Web-Developement-Quiz </Navbar.Brand >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'} href="#features">Home</Nav.Link>
                        <Nav.Link as={Link} to={"/chart"} href="#deets">Chart</Nav.Link>

                        <Nav.Link eventKey={2} href="#memes">
                            Question
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={'/blog'} href="#pricing">Blog</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;