import { createRoot } from 'react-dom/client';
import { StrictMode, useState, useRef } from 'react';

const Header = ({ title, itemTotal }) => {
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
      <button
        className="remove-item"
        onClick={() => props.removeItem(props.id)}
      />
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

const AddItemForm = ({ addItem }) => {
  const itemInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!itemInput.current.value) return;
    addItem(itemInput.current.value);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        ref={itemInput}
        placeholder="Enter an item's name"
      />
      <input type="submit" value="Add item" />
    </form>
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

  const nextItemId = useRef(5);

  const handleAddItem = (name) => {
    setItems((prevItems) => [
      ...prevItems,
      {
        name,
        quantity: 0,
        id: nextItemId.current,
      },
    ]);
    nextItemId.current += 1;
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  return (
    <div className="grocery-list">
      <Header title="My Grocery List" itemTotal={items.length} />

      {/* Grocery List */}
      {items.map((item) => (
        <Item
          name={item.name}
          id={item.id}
          key={item.id}
          removeItem={handleRemoveItem}
        />
      ))}
      <AddItemForm addItem={handleAddItem} />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
