import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import {Footer} from './components/footer/footer'
import { Title } from './components/title/title';
import {tenItems} from './assets/data'
import { Content } from './components/body/list/content/content';
function App() {
  const [data, setData] = React.useState(tenItems)
  return (
   <>
    <Header/>
    <Content data ={data} />
    <Footer setData={setData} data={data}/>
   </>
  );
}

export default App;
