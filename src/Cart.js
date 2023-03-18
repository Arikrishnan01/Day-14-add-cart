// import { useState } from 'react';

export function Cart({ Name,increase,setIncrease }) {
  
  return (
    <div className="cart-continer">
      <img src={Name.poster} alt={Name.name} />
      <h2>{Name.name}</h2>
      <h5>{Name.rating}</h5>
      <p>{Name.price}</p>
      <button
        onClick={() => setIncrease(increase + 1)}
      >Add to Cart</button>
    </div>
  );
}
