const Header = ({ title, itemTotal }) => {
  return (
    <header>
      <h1>{title}</h1>
      <span className="total-items">Items: {itemTotal}</span>
    </header>
  );
};

export default Header;
