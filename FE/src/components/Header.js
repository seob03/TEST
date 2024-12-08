import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

function Header() {
    return (
      <>
        {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
              <Navbar.Brand href="#">
                <Image src="./img/Logo_horizontal.svg"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    MINIQUE
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">채팅내역</Nav.Link>
                    <Nav.Link href="#action2">판매내역</Nav.Link>
                    <Nav.Link href="#action3">내 상점</Nav.Link>
                    <NavDropdown
                      title="Categories"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                        <NavDropdown.Item href="#action3">
                            BEST
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action4">
                            GIRLS
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            BOYS
                        </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
}
  
export default Header;