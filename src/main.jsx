import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const items = [
  {
    name: 'Apples',
    quantity: 5,
  },
  {
    name: 'Bananas',
    quantity: 7,
  },
  {
    name: 'Box of Pasta',
    quantity: 1,
  },
  {
    name: 'Cookies',
    quantity: 12,
  },
];

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
      <Counter quantity={props.quantity} />
    </div>
  );
};

const Counter = (props) => {
  return (
    <div className="quantity">
      <span className="gty-label">QTY</span>
      <button className="increment">+</button>
      <button className="decrement">-</button>
      <span className="quantity-amount">{props.quantity}</span>
    </div>
  );
};

const App = (props) => {
  return (
    <div className="grocery-list">
      <Header
        title="My Grocery List"
        itemTotal={props.initialList.length}
      />

      {/* Grocery List */}
      {props.initialList.map((item) => (
        <Item name={item.name} quantity={item.quantity} />
      ))}
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App initialList={items} />
  </StrictMode>
);
