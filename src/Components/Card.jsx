import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({infoCard :{name, language, id}}) => {
  return(
    <Link
    to={ `/home/${ id }` }
  >
    <section className="card">
      <section className="card-body d-flex flex-column bd-highlight mb-3">
         <h2 className="card-title p-2 bd-highlight">{ name }</h2>
         <span className="card-subtitle mb-2 text-muted p-2 bd-highlight">{ language }</span>
      </section>
    </section>
    </ Link>

  )
}

export  default Card;