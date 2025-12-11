import React from 'react'

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

export default Cards
