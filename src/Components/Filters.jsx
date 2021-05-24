import React, {useContext} from 'react';
import DataContext from '../data/DataContext';

const Filters = () => {
  const { filters, setFilters } = useContext(DataContext);

  function handleChangeInputName({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  function handleChangeInputLanguage({ target: { value } }) {
    setFilters({
      ...filters,
      filterBylanguage: {
        language: value,
      },
    });
  }


  return(
    <div style={{display: 'flex', flexDirection:'row'}}>
      <form>
    
      <input 
      type="text" 
      placeholder="Digite um nome" 
      onChange={ handleChangeInputName }
      className="input-login form-control form-control-lg" />

       <input 
      type="text" 
      placeholder="Digite uma linguagem" 
      onChange={ handleChangeInputLanguage }
      className="input-login form-control form-control-lg"/>
 
      </form>
    </div>
  )
}

export default Filters;