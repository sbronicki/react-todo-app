import React from 'react';

import { useToggle } from './Hooks/toggle-hook';

import NavBar from './Components/Navigation/NavBar/NavBar';
import SideDrawer from './Components/Navigation/SideDrawer/SideDrawer';
import ToDo from './Components/ToDo/ToDo';

import './css/App.css';

function App() {
  const [displaySideDrawer, setDisplaySideDrawer] = useToggle(false)
  
  const sideDrawerToggledHandler = () => {
    setDisplaySideDrawer(!displaySideDrawer)
  }

  return (
    <div className="App"  style={{backgroundColor: "lightsteelblue"}} >
      <NavBar sideDrawerToggled={sideDrawerToggledHandler} />
      <SideDrawer 
        open={displaySideDrawer} 
        closed={sideDrawerToggledHandler} />
        <main className="is-Flex column">
          <ToDo />
        </main>
    </div>
  );
}

export default App;
