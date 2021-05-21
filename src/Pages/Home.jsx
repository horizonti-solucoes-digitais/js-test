import React, {useContext} from 'react';
import DataContext from '../data/DataContext';
import Card from '../Components/Card';

const Home = () => {
  const { data } = useContext(DataContext);
  console.log(data)

  return(
  <main className="container ">
    { data.sort().map((e) => <Card key={ e.id } infoCard={ e }/>) }
  </main>
  )
}

export default Home;