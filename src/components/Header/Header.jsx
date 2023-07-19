import React, {useRef, useEffect} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import './header.css';
import {Container, Row} from "reactstrap";
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
const nav__links=[
    {
        path: 'home',
        display: 'Home'
    },
    {   path: 'shop',
        display: 'Shop',  
    },    
    {
        path: 'cart',
        display: 'Cart',
    }  
]

const Header = () => {
    const headerRef = useRef(null);
    const totalQuantity = useSelector( state => state.cart.totalQuantity)

    const profileActionsRef= useRef(null)

    const menuRef = useRef(null);
    const navigate= useNavigate();
    const {currentUser} = useAuth()
    const stickyHeaderfunc = ()=>{
        window.addEventListener('scroll' ,()=>{
            if(document.body.scrollTop > 80|| document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header');
            }
            else{
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };
    useEffect(()=>{
        stickyHeaderfunc();
        return()=> window.removeEventListener('scroll' , stickyHeaderfunc);
    });

    const navigateToCart=() =>{
            navigate("/cart");
    }
    const toggleProfileActions=() => profileActionsRef.current.classList.toggle('show__profileActions')

    const logout=()=>{
        signOut(auth).then(()=>{
            toast.success('Log out successfully')
            navigate("/home")
        }).catch(err =>{
            toast.error(err.message)
        })
    }


    return( 
    <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <div>
                            <h1>TCshop</h1>
                        </div>
                    </div>

                    <div className="navigation">
                        <ul className="menu">
                            {nav__links.map((item, index)=>(
                                <li className="nav__item" key={index}>
                                    <NavLink to={item.path} className={(navClass)=> navClass.isActive ? 'nav__active' : ''}>
                                        {item.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav__icons">
                        <span className="fav__icon"> 
                            <i class="far fa-heart"></i>
                            <span className="badge">1</span>
                        </span>
                        <span className="cart__icon" onClick={navigateToCart}> 
                            <i class="far fa-shopping-bag"></i>
                            <span className="badge">{totalQuantity}</span>
                        </span>
                    
                        <div className="profile">
                            <motion.img whileTap={{scale: 1.2}} src={currentUser ? currentUser.photoURL : userIcon} onClick={toggleProfileActions} />
                            <div className="profile__actions" ref={profileActionsRef} onClick={toggleProfileActions}>
                                {
                                    currentUser ? (<span onClick={logout}>Logout</span>) : (<div className="d-flex align-items-center justify-content-center flex-row g-1"
                                    ><Link to='/signup'>Signup</Link>
                                    <Link to='/login'>Login</Link>
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className="mobile__menu">
                            <span> <img src={userIcon} alt="" /></span>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header;
