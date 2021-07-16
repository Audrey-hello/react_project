import {Link} from 'react-router-dom';
import React from 'react';

function CardItem(props) {
  return (
    <div>
      <li className="cards-item">
        <Link className="cards-item-link" to={props.path}>
          <figure className="cards-item-pics" data-category={props.label}>
            <img src="" />
            <h5>{props.item}</h5>
          </figure>
        </Link>
        </li>
    </div>
  )
}

export default CardItem
