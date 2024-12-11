import './Header.css';
import SearchBar from './SearchBar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

function Header() {
    return (
    <header style={{width: '1024px'}}>
      <div style={{display: 'flex', }}>
          <div>로그아웃</div>
          <div style={{width: '1rem'}}></div>
          <div>내정보 </div>
      </div>
      <div className='Header-First'>
        <div className = 'Header-First-Logo'>
          <Navbar.Brand href="#">
            <Image src="./img/Logo_horizontal.svg"/>
          </Navbar.Brand>
        </div>
        <div className= 'Header-First-SearchBar'>
          <SearchBar/>
        </div>
        <div className='Header-First-Menu'>
          <Nav.Link href="#action1">채팅내역</Nav.Link>
          <Nav.Link href="#action2">판매내역</Nav.Link>
          <Nav.Link href="#action3">내 상점</Nav.Link>
        </div>
      </div>
      <div style={{margin: '10px', display: 'flex'}}>
          <div>BEST</div>
          <div>GIRLS</div>
          <div>BOYS</div>
      </div>
    </header>
    );
}
  
export default Header;