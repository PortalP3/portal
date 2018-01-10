import React from 'react';
import './SmileFace.css';

const SmileFace = () => {
        return (
            <div className="smileyFace">
            <svg>
                <g >
                    <circle className="smile-eye" r='7' cx='36' cy='39' />
                    <circle className="smile-eye" r='7' cx='70' cy='39' />
                    <circle className="smile-right-eyelid" r='15' id='c' cx='70' cy='3' />
                    <circle className="smile-face-outline" r='45' cx='53' cy='53'/>
                    <g className='smile-mouth' transform='translate(23,67)'>
                        <path d="M0,0 A40,40 10 0,0 60,0" />	
                    </g>
                </g>
            </svg>
            </div>
        );
};

export default SmileFace;