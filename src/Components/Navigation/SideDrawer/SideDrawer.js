import React from 'react'

import Backdrop from '../../../UI/Backdrop';
import Logo from '../../../UI/Logo';

const SideDrawer = ({open, closed}) => {
    let attachedClasses = [ "SideDrawer", "Close" ];
	if (open) attachedClasses = [ "SideDrawer", "Open" ];
    return (
        <>
        <Backdrop show={open} clicked={closed} />
			<div className={attachedClasses.join(' ')}>
			    <Logo />
			</div>
        </>
    )
}

export default SideDrawer