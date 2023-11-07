import React from 'react';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import Start from "../Start/Start";
import CurrentItem from "../CurrentItem/CurrentItem";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Start />}/>
          <Route path='/posts' element={<ItemList />} />
          <Route path='/posts/:id' element={<CurrentItem />}/>
          <Route path='*' element={<Start />}/>
      </Routes>
    </div>
  );
}

export default App;
