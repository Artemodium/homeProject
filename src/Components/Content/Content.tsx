import React from 'react';
import './Content.css';
import ContentCardContainer from './ContenteCard/ContentCardContainer';

function Content() {
    return (
        <div className="App-content">
            <div>
                <ContentCardContainer/>
            </div>
        </div>
    );
}

export default Content;
