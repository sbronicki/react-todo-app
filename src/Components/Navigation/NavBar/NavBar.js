import React from 'react'

import Toggle from './Toggle'

const NavBar = ({sideDrawerToggled}) => {
    return (
        <div className="NavBar is-Flex">
        <Toggle toggled={sideDrawerToggled} />
        <div className="NavBar main is-Flex" >TO DO LIST</div>
        <div className="NavBar side is-Flex" >SIDE</div>
        
        </div>
    )
}

export default NavBar