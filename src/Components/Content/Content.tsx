import React from 'react';
import './Content.css';
import ContentCard from './ContenteCard/ContentCard';
import ContentCardContainer from './ContenteCard/ContentCardContainer';

function Content() {
    return (
    <div className="App-content">
        <h1>Content</h1>
        <div>
            <ContentCardContainer />
        </div>
    </div>
  );
}

export default Content;
