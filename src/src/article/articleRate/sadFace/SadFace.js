import React from 'react';
import './SadFace.css';

const SadFace = () => {
        return (
            <div className="sadFace">
            <svg>
                <g >
                    <circle className="sad-eye" r='7' id='c' cx='36' cy='39' />
                    <circle className="sad-eye" r='7' id='c' cx='70' cy='39' />
                    <circle className="sad-eyelid" r='17' id='c' cx='36' cy='4' />
                    <circle className="sad-eyelid" r='17' id='c' cx='70' cy='4' />
                    <g className='sad-mouth' transform='translate(16,68)'>
                        <path d="M15 10 Q 37 -20 60 10" />	
                    </g>
                    <circle className="sad-face-outline" r='45' cx='53' cy='53' />
                </g>
            </svg>
            </div>
        );
};

export default SadFace;