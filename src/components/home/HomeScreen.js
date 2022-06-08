import React from 'react';
import { heroes } from '../../data/heroes';
// import { DcScreen } from '../dc/DcScreen'
// import { MarvelScreen } from '../marvel/MarvelScreen'
import { Carusel } from './Carusel';
import './carusel.css';

export const HomeScreen = () => {
  return (
    <div className="w-100">
        <h1 className='h1 animate__animated animate__hinge'>Home</h1>
        <hr />
        <p className='text-muted'>Esta es la pagina principal</p>
        <h3>
            Esta es una pagina hecha por:  
            <small className="text-muted">  Marcos Gomez</small>
            <hr />
        </h3>

        {/* <div className="text-center mb-5">
            <h1 className='border'>Heroes Marvel</h1>
            <MarvelScreen/>
            <h1 className='border'>Heroes DC</h1>
            <DcScreen/>
        </div> */}

        <div className="carusel"> 
            <div className="carusel__container">
                {
                    heroes.map( (hero) => (
                        <Carusel 
                            key={ hero.id } 
                            { ...hero}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
