import React, { useEffect , useState } from 'react';
import { getGitUser } from '../services/api';
import DataContext from './DataContext';

const Store = ({ children }) => {
  const initialStateFilters = {

    filterByName: {
      name: '',
    },
    filterBylanguage: {
      language: ''
    },
  };

  const initialState = {
    state: [],
    original: [],
  };

  const [data, setData] = useState(initialState);
  const [filters, setFilters] = useState(initialStateFilters);


  useEffect(() => {
    async function funcGetUser() {
      const user = await getGitUser();
      setData({
        ...data,
        state: user,
        original: user,
      });
    }
    funcGetUser();
  }, []);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      state: prev.original.filter((repo) => repo.name
        .includes(filters.filterByName.name)),
    }));
  }, [filters]);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      state: prev.original.filter((repo) => repo.language
      .includes(filters.filterBylanguage.language)),
    }));
  }, [filters]);

  const globalState = { data, filters, setFilters }

return (
  <DataContext.Provider value={ globalState }>
    { children }
  </DataContext.Provider>
)
}

export default Store;