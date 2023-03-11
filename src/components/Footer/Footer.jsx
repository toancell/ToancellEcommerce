import React from 'react';
import './footer.css';
import logo from '../../assets/images/eco-logo.png';
import {Container, Row, Col,ListGroup,ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'>
          <div className="logo">
              <div>
                <h1 className="text-white">TCshop</h1>
              </div>
              
          </div> 
          <p className="footer__text mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore tempora corporis veritatis nesciunt velit adipisci dolorem delectus aspernatur eos repellendus, est numquam animi distinctio cupiditate nobis mollitia omnis, consectetur nihil?
          </p>
          </Col>
          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Category</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Category</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="fas fa-map-marker-alt"></i></span>
                  <p>94 Phuong Liet</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="fas fa-phone-alt"></i></span>
                  <p>0869981585</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="fas fa-envelope"></i></span>
                  <p>toancell6789@gmail.com</p>
                </ListGroupItem>
                
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>

    </footer>
  );
}

export default Footer;
