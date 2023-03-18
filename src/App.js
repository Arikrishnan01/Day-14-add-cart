// import logo from './logo.svg';
import './App.css';
import { AddCart } from './AddCart';
import { Cart } from './Cart';
import { useState } from 'react';

const carts=[
  {
    name:"Fish",
    poster:"/fish.jpeg",
    rating:"⭐⭐⭐⭐",
    price:"$25.00"
  },
  {
    name:"Mutton",
    poster:"/mutton.jpeg",
    rating:"⭐⭐⭐⭐⭐",
    price:"$40"
  },
  {
    name:"Chicken",
    poster:"/chicken.jpeg",
    rating:"⭐⭐⭐⭐",
    price:"$60"
  },
  {
    name:"Cake",
    poster:"/cake.jpeg",
    rating:"⭐⭐⭐⭐⭐",
    price:"$80"
  },
  {
    name:"Milk",
    poster:"/milk.jpeg",
    rating:"⭐⭐⭐⭐",
    price:"$50"
  },
  {
    name:"Ice",
    poster:"/ice.jpeg",
    rating:"⭐⭐⭐⭐⭐",
    price:"$30"
  },
  {
    name:"Coffee",
    poster:"/coffie.jpeg",
    rating:"⭐⭐⭐⭐",
    price:"$20"
  },
  {
    name:"Rice",
    poster:"/rice.jpeg",
    rating:"⭐⭐⭐",
    price:"$90"
  }
];

function App() {
  const cartData=carts;
  const [increase, setIncrease] = useState(0);
  return (
    <div className="App">
      <div className=''>
        <AddCart increase={increase}/>
      </div>
      <div className='app'>
        {cartData.map((crt)=>(
          <Cart Name={crt} setIncrease={setIncrease} increase={increase}/>
        ))}
      </div>
    </div>
  );
}
export default App;
