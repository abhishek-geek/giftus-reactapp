import React from "react";

const Gift = ({gift}) => {
  return (
    <div>
      <div className="styling">
        <div className="image">
          <img src={gift.image} alt="gift" />
          {/* <img src="https://m.media-amazon.com/images/I/81GGR4ZPZ0L._AC_UY327_FMwebp_QL65_.jpg" /> */}
        </div>
        <div className="text">
          <h4>{gift.name}</h4>
          <p>Price : {gift.price}</p>
          <div className="buy">
            <p>
              <a href={gift.link} target="_blank" rel="noreferrer">
                BUY NOW
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* <div>.</div> */}
    </div>
  );
}

export default Gift;
