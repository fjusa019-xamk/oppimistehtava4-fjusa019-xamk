import React from "react";

interface TuotenostotProps {
  lisaaKoriin: (price: number) => void;
  isLoggedIn: boolean;
}

const Tuotenostot: React.FC<TuotenostotProps> = ({ lisaaKoriin, isLoggedIn }) => {
  const style = {
    backgroundColor: 'orange',
    height: '530px',
    width: '75%',
  };

  const kuvaTyyli: React.CSSProperties = {
    display: 'block',
    height: 'auto',
    width: '40%',
  };

  const kuvaContainer: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  };

  const tuote: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    margin: '10px',
  };

  const nimi: React.CSSProperties = {};

  const hinta: React.CSSProperties = {
    marginBottom: '5px',
    fontSize: '18px',
  };

  const lisaaOstoskoriin: React.CSSProperties = {
    marginBottom: '10px',
  };

  const otsikko = {
    margin: '5px',
  };

  const products = [
    { name: 'Ruskea', price: 25, image: '/tShirt1.jpg' },
    { name: 'Valkoinen', price: 20, image: '/tShirt2.jpg' },
    { name: 'Musta', price: 15, image: '/tShirt3.jpg' },
    { name: 'Sininen', price: 30, image: '/tShirt4.jpg' },
    { name: 'Kummeli', price: 45, image: '/tShirt5.png' },
    { name: 'Camo', price: 35, image: '/tShirt6.jpg' },
  ];

  return (
    <div style={style}>
      <div style={otsikko}>Kuumimmat tuotteet juuri nyt</div>
      <div style={kuvaContainer}>
        {products.map((product, index) => {
          const discountedPrice = isLoggedIn ? product.price * 0.8 : product.price;
          return (
            <div style={tuote} key={index}>
              <img src={product.image} style={kuvaTyyli} />
              <div style={nimi}>{product.name}</div>
              <div style={hinta}>
                {isLoggedIn ? (
                  <>
                    <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>
                      {product.price} €
                    </span>
                    <span style={{ color: 'red' }}>
                      {discountedPrice} €
                    </span>
                  </>
                ) : (
                  `${product.price} €`
                )}
              </div>
              <div style={lisaaOstoskoriin}>
                <button
                  style={{ width: '140px', height: '30px' }}
                  onClick={() => lisaaKoriin(discountedPrice)}
                >
                  Lisää Ostoskoriin
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tuotenostot;
