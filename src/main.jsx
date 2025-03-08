import { createRoot } from 'react-dom/client';
import { StrictMode, useState, useRef } from 'react';
import Header from './components/Header';
import Item from './components/Item';
import AddItemForm from './components/AddItemForm';

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

  const handleEditItem = (id, newName) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
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
          editItem={handleEditItem}
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
