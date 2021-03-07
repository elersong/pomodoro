import React from 'react';
import bwah from "../audio/bwah.mp3";
import foghorn from "../audio/inception-fog-horn.mp3";

function SoundEffects() {
    return (
        <div>
            <audio id="foghorn">
                <source type="audio/mp3" src={foghorn}></source>
            </audio>
            <audio id="bwah">
                <source type="audio/mp3" src={bwah}></source>
            </audio>
        </div>
    ); 
}

export default SoundEffects;