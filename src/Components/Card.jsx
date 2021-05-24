import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({infoCard :{name, language, id}}) => {
  return(
    <div style={{width: '80%'}}>
      <section className="card card-repo">
        <section className="card-body d-flex flex-column bd-highlight mb-3 flex-box ">
          <h2 className="card-title p-2 bd-highlight title-card">{ name }</h2>
          <span className="card-subtitle mb-2 text-muted p-2 bd-highlight">{ language }</span>
          <Link to={ `/home/${ id }` } className="button-details btn btn-primary">Details</ Link>
        </section>
      </section>
    </div>
   

  )
}

export  default Card;