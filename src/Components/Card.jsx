import React from 'react';

const Card = ({infoCard :{name, language}}) => {
  return(

    <section className="card">
      <section className="card-body d-flex flex-column bd-highlight mb-3">
         <h2 className="card-title p-2 bd-highlight">{ name }</h2>
         <span className="card-subtitle mb-2 text-muted p-2 bd-highlight">{ language }</span>
      </section>
    </section>

  )
}

export  default Card;