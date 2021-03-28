import React from 'react';

import DrawerToggleButton from '../DrawerToggleButton';
import '../../Css/toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
       
    </nav>
  </header>
);

export default toolbar;
