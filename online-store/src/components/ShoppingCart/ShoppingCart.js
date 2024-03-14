// Import Stylesheet
import './shoppingCart.css';
// Import Icons
import { FaPlus, FaMinus } from "react-icons/fa";
// Importing bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Redux methods
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, removeFromCart } from '../../redux/counter';

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
                  <button id='decrease' onClick={() => dispatch(decrease(index))}>
                    <FaMinus />
                  </button>
                  <div id='quantity'>{cart[index].quantity}</div>
                  <button id='increase' onClick={() => dispatch(increase(index))}>
                    <FaPlus />
                  </button>
                </div>
                <button id='removeButton' onClick={() => dispatch(removeFromCart(index))}>Remove</button>
              </Col>
            </Row>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}