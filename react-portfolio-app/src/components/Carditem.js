import React from 'react';
import { Link } from 'react-router-dom';

function Carditem(props) {
    return (
        <>
          <li className="card__item">
              <Link className="card__item__link" to={ props.path }>
                <figure className="card__item__pic-wrap" data-category={ props.label }>
                    <img 
                    src={ props.src }
                    alt="aboutMe" 
                    className="cards__item__img"
                    />   
                </figure>
                <div className="cards__item__info">
                   <h5 className="cards__item__text">{ props.test }</h5>
                </div>
                </Link>
            </li>  
        </>
    )
}

export default Carditem
