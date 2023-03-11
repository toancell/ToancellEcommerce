import React from 'react';
import {Container, Row, Col} from "reactstrap";
import adminImg from "../assets/images/user-icon.png"
import '../styles/admin-nav.css';

const admin__nav=[
  {
    display: 'Dashboard',
    path: '/dashboard',
  },
  {
    display: 'All-Products',
    path: '/dashboard/all-products',
  },
  {
    display: 'Orders',
    path: '/dashboard/orders',
  },
  {
    display: 'Users',
    path: '/dashboard/users',
  }
]

const AdminNav = () => {
  return (
    <>
    <header className="admin__header">
      <div className="admin__nav-top">
        <Container>
          <div className="admin__nav-wrapper-top">
            <div className="logo">
              <h2>ToancellShop</h2>
            </div>
            <div className="search__box">
              <input type="text" placeholder="Search" />
              <span><i class="fas fa-search"></i></span>
            </div>
            <div className="admin__nav-top-right">
              <span><i class="fas fa-bell"></i></span>
              <span><i class="far fa-cog"></i></span>
              <img src={adminImg} alt="" />
            </div>
          </div>
        </Container>
      </div>

    </header>

    <section className="admin__menu p-0">
      <Container>
        <Row>
          <div className="admin__navigation">
            <ul className="admin__menu-list">
              {
                admin__nav.map( item =>(
                  <li className="admin__menu-item">
                    {item.display}
                  </li>
                ))
              }
            </ul>
          </div>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default AdminNav;
