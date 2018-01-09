import React from 'react';
import './SeriousFace.css';

const SeriousFace = () => {
        return (
            <div className="seriousFace">
            <svg>
                <g >
                    <circle className="serious-eye" r='10' id='c' cx='25' cy='30' />
                    <circle className="serious-eye" r='10' id='c' cx='75' cy='30' />
                    <g className='serious-mouth' transform='translate(15,65)'>
                        <path d="M13 10 H 55 " />	
                    </g>
                </g>
            </svg>
            </div>
        );
};

export default SeriousFace;