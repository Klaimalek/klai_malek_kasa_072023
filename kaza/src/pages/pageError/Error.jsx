import React from 'react';
import'./error.css';
import { Link } from "react-router-dom";
import Navbar from '../../components/navBar/NavBar';
function Error() {
  return (
    <div >
    <Navbar/>
        <div className="page-erreur">
         
          <div className="number-404-message">
            <h1 className="number-404">404</h1>
            <p className="message-erreur">
              Oups! La page que vous demandez n'existe pas.
            </p>
          </div>
          <Link to ="/home" className="lien">
              <div className="text"> Retourner sur la page d’accueil</div>
          </Link>
        </div>
    </div>
  );
}

export default Error;
