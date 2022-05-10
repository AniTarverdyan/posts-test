import React from 'react';
import './App.css';
import Aside from './aside/aside';
import Favorite from './header/favorite';
import Header from './header/header';
import New from './header/new';
import Popular from './header/popular';
import Main from './main/main';
import Note from './notes';

function App() {
  return (
    <div className='App'>
      <div>
        <Header />
        <Popular />
        <Favorite />
        <New />
        <Note />
      </div>
      <div>
        <Main />
        <Aside />
      </div>
    </div>
  );
}

export default App;
