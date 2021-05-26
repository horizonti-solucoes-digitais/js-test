import React, {useContext} from 'react';
import DataContext from '../data/DataContext';
import Card from '../Components/Card';
import Filters from '../Components/Filters';

const Home = () => {
  const { data:{ state } } = useContext(DataContext);
  
  return(
  <main className="container ">
    <Filters />
    { state.sort().map((e) => <Card key={ e.id } infoCard={ e }/>) }
  </main>
  )
}

export default Home;