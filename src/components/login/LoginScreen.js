import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext );

    const handleLogin = ()  => {
        const action = {
            type: types.login,
            payload: {
                name: 'Marcos'
            }
        }
        
        dispatch( action );

        const lastPath = localStorage.getItem('lastPath') || '/marvel';

        navigate(lastPath, {
            replace: true
        });
    };

  return (
    <div className="container mt-5 border border-secondary p-5 rounded-pill text-center w-50">
        <h1>Login</h1>
        <hr />

        <button
            className="btn btn-outline-primary col-6"
            onClick={ handleLogin }
        >
            Login
        </button>
    </div>
  )
}
