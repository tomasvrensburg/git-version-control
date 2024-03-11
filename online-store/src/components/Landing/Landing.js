import Header from "../Header/Header";
// Importing bootstrap components
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Importing stylesheet
import './landing.css';
// Importing images
import galleryOne from '../../images/galleryOne.webp';
import galleryTwo from '../../images/galleryTwo.webp';
import galleryThree from '../../images/galleryThree.webp';
import galleryFour from '../../images/galleryFour.webp';
import galleryFive from '../../images/galleryFive.webp';
import gallerySix from '../../images/gallerySix.webp';
import gallerySeven from '../../images/gallerySeven.webp';
import galleryEight from '../../images/galleryEight.webp';
import galleryNine from '../../images/galleryNine.webp';
import galleryTen from '../../images/galleryTen.webp';
import galleryEleven from '../../images/galleryEleven.jpeg';
import galleryTwelve from '../../images/galleryTwelve.webp';


export default function Landing() {
  // Array for images
  const imageSRC = [
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive,
    gallerySix,
    gallerySeven,
    galleryEight,
    galleryNine,
    galleryTen,
    galleryEleven,
    galleryTwelve
  ];
  return (
    <div className="Landing">
      <Header />
      <div className="banner-image">
      </div>
      <h6>WELL HELLŌ</h6>
      <h2>Coffee sculpted. Community included.</h2>
      <p className="introduction">
        Come experience the ultimate coffee experience at Plato Coffee. Our premium coffee are expertly crafted to deliver exceptional flavours and quality. From bold and rich to smooth and creamy, we have something to satisfy every palate. Our cosy atmosphere and friendly staff create the perfect environment to relax and enjoy your favourite brew. Visit us today and taste the difference.
      </p>

      <div className="productsContainer">
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-5">
          {/* Array for rendering cards */}
          {Array.from({ length: 12 }).map((_, index) => (
            <Col key={index}>
              <img src={imageSRC[index]}></img>
            </Col>
          ))}
        </Row>
      </div >
    </div>
  );
}