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
    <header className='Header'>
      <div className='Header-Top'>
        <div style={{ flexGrow: 1 }}></div>
        <div className='Header-Top-Right'>
          <div className='Header-Top-Buttons'>로그아웃</div>
          <div className='Header-Top-Buttons'>내정보 </div>
        </div>
      </div>
      <div className='Header-First'>
        <div className='Header-First-Logo'>
          <a href="#">
            <Image src="./img/Logo_horizontal.svg" />
          </a>
        </div>
        <div className='Header-First-SearchBar'>
          <SearchBar />
        </div>
        <div className='Header-First-Menu'>
          <div href="#action1" className='Header-First-Menu-Buttons'>채팅내역</div>
          <div href="#action2" className='Header-First-Menu-Buttons'>판매내역</div>
          <div href="#action3" className='Header-First-Menu-Buttons'>내 상점</div>
        </div>
      </div>
      <div style={{ display: 'flex', margintop: '20px' }}>
        <div>BEST</div>
        <div>GIRLS</div>
        <div>BOYS</div>
      </div>
    </header>
  );
}

export default Header;