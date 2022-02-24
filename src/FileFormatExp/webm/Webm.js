import React from 'react';
import ReactPlayer from 'react-player';
import file from './big_buck_bunny_480p.webm'; 

const Webm = () => {
    return(
        <>
            <p> Webm Video is below. The videos can be auto-played only if its kept on mute</p>
            <ReactPlayer playing muted controls url={[file]} />
        </>
    );
}


export default Webm;