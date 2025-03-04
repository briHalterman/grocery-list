import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';

const Header = ({ title, itemTotal }) => {
  // console.log(props);
  return (
    <header>
      <h1>{title}</h1>
      <span className="total-items">Items: {itemTotal}</span>
    </header>
  );
};

const Item = (props) => {
  return (
    <div className="item">
      <button className="remove-item" />
      <span className="item-name">{props.name}</span>
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="quantity">
      <span className="gty-label">QTY</span>
      <button className="increment" onClick={incrementQuantity}>
        +
      </button>
      <button className="decrement" onClick={decrementQuantity}>
        -
      </button>
      <span className="quantity-amount">{quantity}</span>
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState([
    {
      name: 'Apples',
      id: 1,
    },
    {
      name: 'Bananas',
      id: 2,
    },
    {
      name: 'Box of Pasta',
      id: 3,
    },
    {
      name: 'Cookies',
      id: 4,
    },
  ]);

  return (
    <div className="grocery-list">
      <Header title="My Grocery List" itemTotal={items.length} />

      {/* Grocery List */}
      {items.map((item) => (
        <Item name={item.name} key={item.id} />
      ))}
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
