import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import './carusel.css';


export const Carusel = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    // const imgPath = `/assets/${id}.jpg`; public/assets

  return (         

    <Link to={`/Hero/${id}`}> 
        <div className="carusel--item">
            <img className="carusel--item__img" src={ heroImages(`./${id}.jpg`) } alt="superheroe"/>
            <div className="carusel--item__detalles">
                <div>
                    <img src="https://raw.githubusercontent.com/teffcode/Platzi-Frontend-Dev/master/assets/play-icon.png" alt="icon"/>
                    <img src="https://raw.githubusercontent.com/teffcode/Platzi-Frontend-Dev/master/assets/plus-icon.png" alt="icon"/>
                </div>
                <p className="carusel--item__detalles--title">{ superhero }</p>
                <p className="carusel--item__detalles--subtitle">{ alter_ego }</p>
                <p className="text-muted carusel--item__detalles--subtitle">{ publisher }</p>
            </div>
        </div>
    </Link>
    )
}
