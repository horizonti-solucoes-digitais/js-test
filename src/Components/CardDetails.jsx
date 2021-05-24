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

  const lastUpdate = await getLastUpdate(card.full_name);
  setLastUpDate(lastUpdate);

  const language = await getlanguages(card.full_name);
  setLanguages(language);
}, []);


 
  return(
    <section>
      <span>{ `Detalhes do repositório ${ card.name }`}</span>
      <br></br>
      <span>{`Quantidade de forks: ${ card.forks }`}</span>
      <br></br>
      <span>{`Quantidade de commits: ${ commits }`}</span>
      <br></br>
      <span>{`Quantidade de branches: ${ branches }`}</span>
      <br></br>
      <span>{`Ultima atualização: ${ lastUpDate }`}</span>
    </section>

  )
}

export  default CardDetails;