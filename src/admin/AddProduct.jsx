import React from 'react';
import {Container, Row,Col,Form, FormGroup} from 'reactstrap'
const AddProduct = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h4 className='mb-5'>Add Product</h4>
            <Form>
              <FormGroup className='form__group'>
                <span>Product title</span>
                <input type="text" placeholder='Double sofa'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Short Description</span>
                <input type="text" placeholder='Description'/>
              </FormGroup>
              <div className='d-flex align-items-center justify-content-between'>
                <FormGroup className='form__group'>
                  <span>Price</span>
                  <input type="number" placeholder="$100" />
                </FormGroup>
                <FormGroup className='form__group '>
                  <span>Category</span>
                  <select className='w-100 p-2' >
                    <option value="chair">Chair</option>
                    <option value="sofa">sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </FormGroup>
              </div>
              
              <div>
                <FormGroup className='form__group'>
                  <span>Product Image</span>
                  <input type="file" />

                </FormGroup>
              </div>
              <button className="primary__btn btn ">Add Product</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AddProduct;
