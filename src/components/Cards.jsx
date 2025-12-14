import PropTypes from 'prop-types';
import './Cards.css'
const Cards = ({ img, url, desc }) => {
  return (
     <figure className='flexContainer'>
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
