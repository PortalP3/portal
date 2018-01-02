import React from 'react';
import './ArticleTitle.css';

const ArticleTitle = () => {
        return (
           <div>
                <header className="Article-header">
                    <div className="Title-image">
                        <div className="Transparent-layer-image"/>
                        <div className="Transparent-layer-title">
                            <h1 className="Article-title">Título artículo</h1>
                        </div>
                    </div>
                </header>
           </div>
        );
}

export default ArticleTitle;
