// Import Stylesheet
import './shoppingCart.css';
// Import Icons
import { FaPlus, FaMinus } from "react-icons/fa";
// Importing bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Redux methods
import { useSelector, useDispatch } from 'react-redux';

export default function ShoppingCart() {
  // Defining global variables
  const cart = useSelector((state) => state.counter.cart);
  const dispatch = useDispatch();

  return (
    <div className="ShoppingCart">
      <h2>
        Your Cart
      </h2>
      <hr />
      <div className='cart-container'>
        {cart.map((product, index) => (
          <>
            <Row className='cart-item' key={index}>
              <Col xs="auto" className='cartImage-container'>
                <img src={cart[index].image} alt='product' className='cartItem-image' />
              </Col >
              <Col xs="6" className='cart-column'>
                <h3>{cart[index].title}</h3>
                <p>R {cart[index].price}</p>
              </Col>
              <Col xs="auto" className='cart-column'>
                <div className='quantity-container'>
                  <button id='decrease'>
                    <FaMinus />
                  </button>
                  <div id='quantity'>{cart[index].quantity}</div>
                  <button id='increase'>
                    <FaPlus />
                  </button>
                </div>
                <button id='removeButton'>Remove</button>
              </Col>
            </Row>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}