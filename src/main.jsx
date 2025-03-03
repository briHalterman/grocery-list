import { createRoot } from 'react-dom/client';

const Header = () => (
  <header>
    <h1>Grocery List</h1>
    <span className="total-items">Items: 1</span>
  </header>
);

const root = createRoot(document.getElementById('root'));
root.render(element);
