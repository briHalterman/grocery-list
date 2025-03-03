import { createRoot } from 'react-dom/client';

const Header = () => (
  <header>
    <h1>Grocery List</h1>
    <span className="total-items">Items: 1</span>
  </header>
);

const Item = () => {
  return (
    <div className="item">
      <button className="remove-item" />
      <span className="item-name">Apples</span>
      <div className="quantity">
        <span className="gty-label">QTY</span>
        <button className="increment">+</button>
        <button className="decrement">-</button>
        <span className="quantity-amount">15</span>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Item />);
