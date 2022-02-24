import React from 'react';
import ReactPlayer from 'react-player';
import file from './video_example.mp4';

const Mp4 = () => {
    return(
        <>
            <p> Mp4 Video is below. The videos can be auto-played only if its kept on mute</p>
            <ReactPlayer playing controls url={[file]} />
        </> 
    );
}


export default Mp4;