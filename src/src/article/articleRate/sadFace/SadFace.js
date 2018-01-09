import React from 'react';
import './SadFace.css';

const SadFace = () => {
        return (
            <div className="sadFace">
            <svg>
                <g >
                    <circle className="sad-eye" r='10' id='c' cx='25' cy='30' />
                    <circle className="sad-eye" r='10' id='c' cx='75' cy='30' />
                    <circle className="sad-eyelid" r='15' id='c' cx='25' cy='4' />
                    <circle className="sad-eyelid" r='15' id='c' cx='75' cy='4' />
                    <g className='sad-mouth' transform='translate(15,65)'>
                        <path d="M10 10 Q 35 -20 60 10" />	
                    </g>
                </g>
            </svg>
            </div>
        );
};

export default SadFace;