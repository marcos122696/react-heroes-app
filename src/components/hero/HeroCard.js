import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { heroImages } from '../../helpers/heroImages';


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    // const imgPath = `/assets/${id}.jpg`; public/assets

    return (
        <div className="col">
            <Link to={`/Hero/${id}`} style={{ textDecoration: 'none' }}>
                <div className="card bg-secondary text-white h-100">
                    <div className="row no-gutters">
                        <div className="container-img" >
                            <img src={ heroImages(`./${id}.jpg`)} className="h-100 w-100 animate__animated animate__zoomIn" alt={superhero} />
                        </div>

                        <div className="col-8 w-100">
                            <div className="card-body" >

                                <h5 className="card-title">{superhero}</h5>
                                <p className="card-text">{alter_ego}</p>

                                <p className="card-text">
                                    <small className="text-white-50">{first_appearance}</small>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
};

HeroCard.propTypes = {
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
};