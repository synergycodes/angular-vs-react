import React from 'react';
import './App.css';
import Header from './components/header/header'
import {Footer} from './components/footer/footer'
import { Content } from './components/body/list/content/content';
import { Employee } from './interfaces/employee.interface';

function App() {
  const [data, setData] = React.useState([] as Employee[])
  return (
   <>
    <Header/>
    <Content data ={data} />
    <Footer setData={setData} data={data}/>
   </>
  );
}

export default App;
