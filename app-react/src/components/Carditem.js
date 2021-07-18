/* eslint-disable jsx-a11y/alt-text */
import {Link} from 'react-router-dom';
import React from 'react';

function CardItem(props) {
  return (
    <div>
      <li className="cards-item">
        <Link className="cards-item-link" to={props.path}>
          <figure className="cards-item-pics" data-category={props.label}>
            <img src="./images/banner.png" />
            <h5>{props.item}</h5>
          </figure>
        </Link>
        </li>
    </div>
  )
}

export default CardItem
