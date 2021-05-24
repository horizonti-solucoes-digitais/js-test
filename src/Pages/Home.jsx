import React, {useContext, useState, useEffect, useCallback } from 'react';
import DataContext from '../data/DataContext';
import Card from '../Components/Card';
import Filters from '../Components/Filters';
/* import Pagination from '../Components/Pagination'; */

const LIMIT = 12;
const Home = () => {
  const { data:{ state } } = useContext(DataContext);
  const [offset, setOffSet] = useState(0);
 
  
  return(
  <main className="container ">
    <Filters />
    <div className="center">
    { state.sort().map((e) => <Card key={ e.id } infoCard={ e }/>) }
    </div>
    {/* <Pagination 
      limit={ LIMIT } 
      total={ state.length } 
      offset={ offset } 
      setOffset={ setOffSet }
      /> */}
  </main>
  )
}

export default Home;