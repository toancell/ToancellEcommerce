import React from 'react';
import { useState } from 'react';
import  {Container, Row,Col} from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/product_details.css'
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import {cartActions} from "../redux/slices/cartSlice";
import {  toast } from 'react-toastify';


const ProductDetail = () => {
  const {id} = useParams()
  const product = products.find(item => item.id === id);
  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc,category} = product;
  const  [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch()
  const addToCart = () =>{
    dispatch ( cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    })
    );
    toast.success('Product added successfully');
  }

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg='6'>
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span onClick={()  => setRating(1)}><i class="fas fa-star"></i></span>
                    <span onClick={()  => setRating(2)} ><i class="fas fa-star"></i></span>
                    <span onClick={()  => setRating(3)} ><i class="fas fa-star"></i></span>
                    <span onClick={()  => setRating(4)} ><i class="fas fa-star"></i></span> 
                    <span onClick={()  => setRating(5)} ><i class="far fa-star"></i></span>
                    
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span> Category: {category.toUpperCase()}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button whileTap={{scale: 1.1}} className="buy__btn mt-3" onClick={addToCart}>
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === "desc" ? 'active__tab' : ''}`} onClick={() => setTab ("desc")} >Description</h6>
                <h6 className={`${tab === "rev" ? 'active__tab' : ''}`} onClick={() => setTab ("rev")} >Reviews ({reviews.length})</h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review  mt-5"> 
                  <div className="review__wrapper">
                    <ul>
                      {
                      reviews?.map((item,index) =>(
                        <li kew={index} className='mb-4'>
                          <h6>Toancell</h6>
                          <span>{item.rating} ( rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))
                      }
                    </ul>
                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action="">
                        <div className="form__group">
                          <input type="text" placeholder='Enter name' />
                        </div>
                        <div className="form__group d-flex align-items-center gap-5">
                          <span>1 <i class="far fa-star"></i></span>
                          <span>2 <i class="far fa-star"></i></span>
                          <span>3 <i class="far fa-star"></i></span>
                          <span>4 <i class="far fa-star"></i></span>
                          <span>5 <i class="far fa-star"></i></span>
                        </div>
                        <div className="form__group">
                          <textarea rows={4} type="text" placeholder='Review message' />
                        </div>
                        <button type="submit" className="buy__btn">Submit</button>
                      </form>
                    </div>


                  </div>
                </div>
              )
              
              }
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default ProductDetail;
