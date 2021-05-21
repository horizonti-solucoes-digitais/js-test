import React, { useContext } from 'react';
import DataContext from '../data/DataContext';
import CardDetails from '../Components/CardDetails';

const Details = (props) => {

  const { match: { params: { id } } } = props;
  const { match: { path } } = props;
  const rota = '/home/:id';
  const { location: { pathname } } = props;
  const { data } = useContext(DataContext);
  const cardSelect = data.find((e) => e.id = id);


  if (path === rota) return <CardDetails path={ pathname } card={ cardSelect } />;

}

export default Details;
