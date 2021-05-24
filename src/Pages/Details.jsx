import React, { useContext } from 'react';
import DataContext from '../data/DataContext';
import CardDetails from '../Components/CardDetails';

const Details = (props) => {

  const { match: { params: { id } } } = props;
  const { match: { path } } = props;
  const rota = '/home/:id';
  const { location: { pathname } } = props;
  const { data:{ state }} = useContext(DataContext);
  const cardSelect = state.find((e) => e.id = id);


  if (path === rota) return <CardDetails card={ cardSelect } />;

}

export default Details;
