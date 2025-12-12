import PropTypes from 'prop-types';
const Cards = ({ img, url, desc }) => {
  return (
     <figure>
        <img src={ img } alt= { url }/>
        <figcaption>
            <p>{ desc }</p>
        </figcaption>
    </figure>
  )
}

Cards.propTypes = {
  img: PropTypes.string,
  url: PropTypes.string,
  desc: PropTypes.string
};

export default Cards
