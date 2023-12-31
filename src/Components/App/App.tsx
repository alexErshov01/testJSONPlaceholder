import React from 'react';
import './App.css';

import ItemList from "../ItemList/ItemList";
import CurrentItem from "../CurrentItem/CurrentItem";
import Item from "../Item/Item";

import { Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<ItemList />} />
          <Route path='/:id' element={<CurrentItem /> }/>
          <Route path='*' element={<ItemList />}/>
      </Routes>
    </div>
  );
}

export default App;
