import React, {useContext} from 'react';
import DataContext from '../data/DataContext';

const Home = () => {
  const { data } = useContext(DataContext);
  console.log(data)

  return(
  <main className="container">
  { data.sort().map((e) => (
    <section className="card">
      <section className="card-body">
         <h2 className="card-title">{e.name}</h2>
         <span className="card-subtitle mb-2 text-muted">{ e.language }</span>
         <a href="#" class="card-link">Card link</a>
      </section>
    </section>
    ))}

  </main>
  )
}

export default Home;