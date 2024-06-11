// import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import logo from '../logo.png';

// const Navigation = ({ account }) => {
//   return (
//     <Navbar className='my-3'>
//       <img
//         alt="logo"
//         src={logo}
//         width="40"
//         height="40"
//         className="d-inline-block align-top mx-3"
//       />
//       <Navbar.Brand href="#">PSI DAO</Navbar.Brand>
//       <Navbar.Collapse className="justify-content-end">
//         {/* <Navbar.Text>
//           {account.slice(0, 5) + '...' + account.slice(38, 42)}
//         </Navbar.Text> */}
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Navigation;

function Navigation() {
  return (
    <>
      {/* <Navbar className='my-3 w-100'>
     </Navbar> */}
      <Navbar className='my-3 w-100' bg="danger" data-bs-theme="dark" style={{ padding: '0', justifyContent: 'center', fontWeight:'bold'}}>
        <Container>
          <Navbar.Brand href="#home"  >PSI DAO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://long-kitchen-big.on-fleek.app/" >Home</Nav.Link>
            <Nav.Link href="#features" >Socials</Nav.Link>
            <Nav.Link href="https://sepolia.etherscan.io/token/0x9a264436Ccb91D3b56e378ab4f83098413659786" >DAO Info</Nav.Link>
          </Nav>
          <img
        alt="logo"
        src={logo}
        width="80"
        height="80"
        className="d-inline-block align-top mx-3"
        
      />
        </Container>
      </Navbar>
      </>
      );
    }
 export default Navigation;