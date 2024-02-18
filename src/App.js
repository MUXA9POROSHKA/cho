import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Form } from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <div className='container'>
         
      <Switch>
     
          <Route path={'/form'} element = {<Form/>}/>
        </Switch>
        <button className='btn'>Закрыть страницу</button>
      </div>
    </div>
  );
}

export default App;
{/*onClick={closeEvent}*/}
//<Header/>
 //<Route index element = {<ProductList/>}/>