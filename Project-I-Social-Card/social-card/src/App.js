import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <CardContainer />
      
    </div>
  );
};

export default App;
