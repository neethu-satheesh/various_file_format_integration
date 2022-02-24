import React from 'react';
import ReactPlayer from 'react-player';
import file from './SymphonyNo.6.ogg';

const Ogg = () => {
    return(
        <>
            <p> Ogg Audio is below</p>
            <ReactPlayer playing controls url={[file]} />
        </>
    );
}


export default Ogg;