import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  date: PropTypes.string.isRequired,
  sellAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sellCurrency: PropTypes.string.isRequired,
  buyAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  buyCurrency: PropTypes.string.isRequired,
});
