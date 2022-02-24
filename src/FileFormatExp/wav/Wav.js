import React from 'react';
import ReactPlayer from 'react-player';
import file from './file_example_WAV_1MG.wav';

const Wav = () => {
    return(
        <>
            <p> Wav Audio is below</p>
            <ReactPlayer playing controls url={[file]} />
        </>
    );
}


export default Wav;