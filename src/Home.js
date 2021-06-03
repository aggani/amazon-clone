import React from "react";
import "./Home.css";
import Product from "./Product";



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg"
        />

        <div className="home__row">
          <Product
            title="Inalsa 60 cm Pyramid Chimney Classica 60BKBF with SS Baffle Filter/Push Button Control (Black)"
            price={5495}
            image="https://m.media-amazon.com/images/I/51vZMghrh7L._AC_UY327_FMwebp_QL65_.jpg"
            rating={2}
          />

          <Product
            title="Chimney "
            price={99}
            image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            title="The Lean Startup"
            price={99}
            image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
            rating={2}
          />

          <Product
            title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)"
            price={(1, 16, 799)}
            image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />

          <Product
            title="Redmi 9A (Nature Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery"
            price={6999}
            image="https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
