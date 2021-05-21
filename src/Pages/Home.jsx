import React, {useContext} from 'react';
import DataContext from '../data/DataContext';

const Home = () => {
  const { data } = useContext(DataContext);
  console.log(data)

  return(
  <>
  <h1>Sou Home</h1>
  
  </>
  )
}

export default Home;