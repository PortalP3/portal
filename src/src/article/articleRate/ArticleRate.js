import React from 'react';
import './ArticleRate.css';
import SmileFace from './smileFace/SmileFace';
import SeriousFace from './seriousFace/SeriousFace';
import SadFace from './sadFace/SadFace';

const ArticleRate = () => {
        return (
            <div className="Article-rate">
            <h2>¿Qué te pareció el contenido?</h2>
            <div className="face-container">
            <SmileFace/>
            <SeriousFace/>
            <SadFace/>
            </div>
            </div>
        );
};

export default ArticleRate;