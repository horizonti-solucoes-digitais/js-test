import React, { useState, useEffect } from 'react';
import { getlanguages, getCommits, getLastUpdate, getBranches } from '../services/api';


const CardDetails = ({ card }) => {
console.log(card);
const [ languages, setLanguages ] = useState();
const [commits, setCommits] = useState();
const [branches, setBranches] = useState();
const [lastUpDate, setLastUpDate] = useState();


useEffect(async () => {
  const commits = await getCommits(card.full_name);
  setCommits(commits.length);

  const branches = await getBranches(card.full_name);
  setBranches(branches.length);

}, []);


 
  return(
    <div className="container">
      <section className="card card-repo">
        <span className="title-card-details">{ `Detalhes do repositório ${ card.name }`}</span>
        <br></br>
        <span className="text-details">{`Quantidade de forks: ${ card.forks }`}</span>
        <br></br>
        <span className="text-details">{`Quantidade de commits: ${ commits }`}</span>
        <br></br>
        <span className="text-details">{`Quantidade de branches: ${ branches }`}</span>
        <br></br>
        <span className="text-details">{`Ultima atualização: ${ card.updated_at }`}</span>
        <br></br>
        {card.private? 
        <span className="text-details">Repositório Privado</span> :
        <span className="text-details">Repositório Público</span>}
      </section>
    </div>

  )
}

export  default CardDetails;