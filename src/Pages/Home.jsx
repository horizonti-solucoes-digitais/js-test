import React, {useContext} from 'react';
import DataContext from '../data/DataContext';
import Card from '../Components/Card';
import Filters from '../Components/Filters';

const Home = () => {
  const { data } = useContext(DataContext);
  console.log(data)

  return(
  <main className="container ">
    <Filters />
    { data.sort().map((e) => <Card key={ e.id } infoCard={ e }/>) }
  </main>
  )
}

export default Home;