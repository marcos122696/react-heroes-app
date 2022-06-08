import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;
    const heroesFilter = useMemo( () => getHeroesByName( q ), [q] );

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }`);
    };

  return (
    <>
        <h1 className="animate__animated animate__hinge">Busqueda</h1>
        <hr />

        <div className="row">
            <div className="col-5">
                <h4>Buscar Heroe</h4>
                <hr />

                <form onSubmit={ (e) => handleSearch(e) }>
                    <input 
                        type="text" 
                        placeholder="Nombre Heroe" 
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={ searchText }
                        onChange={ handleInputChange }
                    />
                </form>

                <button
                    className="btn btn-outline-light mt-3 w-100"
                    type="subbmit"
                >
                    Buscar
                </button>
            </div>

            <div className="col-7">
                <h4>Resultados</h4>
                <hr />

                {
                        (q === '') 
                        ? <div className="alert alert-info">Busque un heroe</div>
                        : ( heroesFilter.length === 0) 
                            && <div className="alert alert-danger">No hay resultados de: {q}</div>
                }
                <ul className="d-flex flex-row flex-wrap">
                    {
                        heroesFilter.map( hero => (
                            <li className="card-item" key={ hero.id }>
                                <HeroCard
                                    { ...hero }
                                />   
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </>
  )
}
