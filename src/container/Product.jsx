import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import nslPlatform from '../assets/nsl_platform.mp4';
import nslLev from '../assets/nsl_lev.mp4';
import { product } from '../constants/data';
import { Link } from 'react-router-dom';
import '../styles/Product.css';
import '../styles/scss/button.scss';

const Product = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const vidProps = [
    {
      id: 1,
      title: 'nsl_product_video',
      src: nslLev,
    },
    {
      id: 2,
      title: 'nsl_platform',
      src: nslPlatform,
    },
  ];

  return (
    <div className="product__main">
      <motion.div
        className="product__section-one"
        ref={carousel}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="product__carousel"
        >
          {vidProps.map((vid) => (
            <motion.div key={vid.id} className="product__carousel-item">
              <video src={vid.src} autoPlay muted loop controls={false} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="product__section-two">
        <div className="product__details-main">
          {product.map((e) => (
            <motion.div className="product__details-wrapper">
              <header className="product__details-header">
                <h1>{e.title}</h1>
                <h3>{e.model}</h3>
                <p>{e.description}</p>
              </header>
              <section className="product__details-detail">
                <p>
                  <strong>Base Details: </strong>
                  {e.details.base}
                </p>
                <p>
                  <strong>Platform Details: </strong>
                  {e.details.platform}
                </p>
                <p>
                  <strong>Weight Capacity: </strong>
                  {e.weightCapacity}
                </p>
                <h4>Platform</h4>
                <ul>
                  <li>
                    <strong>Height:</strong> {e.dimensions.platform.height}
                  </li>
                  <li>
                    <strong>Width:</strong> {e.dimensions.platform.width}
                  </li>
                  <li>
                    <strong>Length:</strong> {e.dimensions.platform.length}
                  </li>
                </ul>
                <h4>Base Dimensions</h4>
                <ul>
                  <li>
                    <strong>Height:</strong> {e.dimensions.base.height}
                  </li>
                  <li>
                    <strong>Width:</strong>
                    {e.dimensions.base.width}
                  </li>
                  <li>
                    <strong>Length:</strong> {e.dimensions.base.length}
                  </li>
                </ul>
              </section>
              <button className="product__button global__btn">
                <span className="global__btn-line" />
                <Link to="../contact">Get Started</Link>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
