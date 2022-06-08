import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';



export const HeroScreen = () => {

    const { heroeId } = useParams();

    const hero = useMemo( () => getHeroById(heroeId), [heroeId] );

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
    
    const navigate = useNavigate();

    const  handleReturn  = () => {
        return navigate(-1);
    };

    if (!hero) {
        return <Navigate to='/' />;
    };

    // const imgPath = `/assets/${ id }.jpg`; public/assets

  return (
    <div className="row mt-5">
        <div className="col-4">
            <img 
                src={ heroImages(`./${id}.jpg`) }
                alt={ superhero }
                className="img-thumbnail animate__animated animate__fadeInLeft"
            />
        </div>

        <div className="col-8">
            <h3>{ superhero }</h3>
            <ul className="list-group list-group-flash">
                <li className="list-group-item list-group-item-primary"> <b>Alter ego:</b> { alter_ego }</li>
                <li className="list-group-item list-group-item-primary"> <b>publisher:</b> { publisher }</li>
                <li className="list-group-item list-group-item-primary"> <b>first Appearance:</b> { first_appearance }</li>
            </ul>

            <h5 className="mt-5">Characters</h5>
            <p>{ characters }</p>

            <button
                className="btn btn-outline-info"
                onClick={ handleReturn }
            >
                Regresar
            </button>

        </div>
    </div>
  )
}
