import PropTypes from 'prop-types';

const Header = ({ title, itemTotal }) => {
  return (
    <header>
      <h1>{title}</h1>
      <span className="total-items">Items: {itemTotal}</span>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  itemTotal: PropTypes.number.isRequired,
};

export default Header;
