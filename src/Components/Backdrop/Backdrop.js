import React from 'react';

import '../../Css/backdrop.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;