import Header from "../Header/Header";
// Importing stylesheet
import './landing.css';

export default function Landing() {
  return (
    <div className="Landing">
      <Header />
      <div className="banner-image">
      </div>
      <h6>WELL HELLŌ</h6>
      <h2>Coffee sculpted. Community included.</h2>
      <p>
        Come experience the ultimate coffee experience at Plato Coffee. Our premium coffee are expertly crafted to deliver exceptional flavours and quality. From bold and rich to smooth and creamy, we have something to satisfy every palate. Our cosy atmosphere and friendly staff create the perfect environment to relax and enjoy your favourite brew. Visit us today and taste the difference.
      </p>
    </div>
  );
}