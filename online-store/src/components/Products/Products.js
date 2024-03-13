// Import Stylesheet
import './products.css';
// Importing bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Importing images
import productOne from '../../images/IMG_0949.jpg.webp';
import productTwo from '../../images/IMG_0895.jpg.webp';
import productThree from '../../images/IMG_0874.jpg.webp';
import productFour from '../../images/IMG_0716.jpg.webp';
import productFive from '../../images/productFive.jpg';
import productSix from '../../images/productSix.jpg';
import productSeven from '../../images/productSeven.jpg';
import productEight from '../../images/productEight.jpg';
import productNine from '../../images/productNine.jpg';
import productTen from '../../images/productTen.jpg';
// Importing icon
import { FaShoppingCart } from 'react-icons/fa';

export default function Products() {
  // Array for image src
  const imageSRC = [
    productOne,
    productTwo,
    productThree,
    productFour,
    productFive,
    productSix,
    productSeven,
    productEight,
    productNine,
    productTen
  ];

  // Array for product title
  const productTitle = [
    "Men's Sweater - Sage",
    "Unisex Tee - Grey Melange - Plato",
    "Unisex Tee - Grey Melange - Ō",
    "Ladies Sweater - Sage",
    "Unisex Sweater - Grey Melange",
    "Plato House Blend - 1kg",
    "Plato house blend - 250g",
    "Plato Socks",
    "Plato Travel Mug",
    "Plato Water Bottle"
  ];

  // Array for product prices
  const productPrice = [
    750.00,
    250.00,
    250.00,
    750.00,
    500.00,
    350.00,
    100.00,
    189.00,
    649.00,
    799
  ];

  return (
    <div className="Products">
      <div className="products-banner-image">
        <h1>Products</h1>
      </div>
      <div className="products-container">
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-5">
          {/* Array for rendering product */}
          {Array.from({ length: 10 }).map((_, index) => (
            <Col key={index}>
              <div className="productImage">
                <img src={imageSRC[index]} alt="product" className="img-fluid" />
                <button className='addToCart-Button'>
                  Add to cart
                  <FaShoppingCart className='icon' />
                </button>
              </div>
              <p>{productTitle[index]}</p>
              <p className="featuredProduct-price">
                <strong>R {productPrice[index]}</strong>
              </p>
            </Col>
          ))}
        </Row>
      </div >
    </div>
  );
}