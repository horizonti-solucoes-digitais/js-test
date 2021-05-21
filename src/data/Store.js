import React, { useEffect , useState } from 'react';
import getGitUser from '../services/api';
import DataContext from './DataContext';

const Store = ({ children }) => {

  const [data, setData] = useState([]);


  useEffect(() => {
    async function funcGetUser() {
      const user = await getGitUser();
      setData(user);
    }
    funcGetUser();
  }, []);

  const globalState = { data }

return (
  <DataContext.Provider value={ globalState }>
    { children }
  </DataContext.Provider>
)
}

export default Store;