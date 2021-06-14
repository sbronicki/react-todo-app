import { useEffect, useState } from 'react';

import NavBar from './Components/Navigation/NavBar/NavBar';
import SideDrawer from './Components/Navigation/SideDrawer/SideDrawer';
import ToDo from './Components/ToDo/ToDo';

import './css/App.css';

function App() {
  const [displaySideDrawer, setDisplaySideDrawer] = useState(false)
  
  const sideDrawerToggledHandler = () => {
    setDisplaySideDrawer(!displaySideDrawer)
  }
  const sideDrawerClosedHandler = () => {
    setDisplaySideDrawer(false)
  }

  return (
    <div className="App"  style={{backgroundColor: "lightsteelblue"}} >
      <NavBar sideDrawerToggled={sideDrawerToggledHandler} />
      <SideDrawer 
        open={displaySideDrawer} 
        closed={sideDrawerClosedHandler} />
        <main className="is-Flex column">
          <ToDo />
        </main>
    </div>
  );
}

export default App;
