import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container,Row,Col,Form,FormGroup } from 'reactstrap';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../styles/login.css"
import {toast} from 'react-toastify';
import {auth} from "../firebase.config"
import { signInWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const signIn= async(e)=>{
      e.preventDefault();
      setLoading(true)
      try{
        const userCredentials = await signInWithEmailAndPassword(auth, email,password)
        const user= userCredentials.user
        console.log(user)
        setLoading(false)
        toast.success('Successfully logged in')
        navigate('/checkout')
      }catch(error){
        setLoading(false)
        toast.error(error.message)
      }
  }
  return (
    <Helmet title='login'>
      <section>
        <Container>
          <Row>
          { loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'> Loading....</h5></Col>
            :
            (
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold fs-4'>Login</h3>
              <Form className='auth__form' onSubmit={signIn}>
                <FormGroup className='form__group'>
                  <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>
                <button type='Submit' className="buy__btn auth__btn">Login</button>
                <p>
                  Don't have an account ? {""}
                  <Link to="/signup"> Creat an account</Link>
                </p>
              </Form>
            </Col>
            )
          }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login;
