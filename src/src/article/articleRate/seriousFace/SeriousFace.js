import React from 'react';
import './SeriousFace.css';

const SeriousFace = () => {
        return (
            <div className="seriousFace">
            <svg>
                <g >
                    <circle className="serious-eye" r='7' id='c' cx='36' cy='39' />
                    <circle className="serious-eye" r='7' id='c' cx='70' cy='39' />
                    <g className='serious-mouth' transform='translate(15,65)'>
                        <path d="M20 10 H 55 " />	
                    </g>
                    <circle className="serious-face-outline" r='45' cx='53' cy='53' />
                </g>
            </svg>
            </div>
        );
};

export default SeriousFace;