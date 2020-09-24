import React from 'react';
import '../../app/layout/App.scss';

const Pokemon = ({id, name, description}) => {
    return (
        <div className="container">
            <p className="date">{name}</p>
            <p className="story">
                {description}
            </p>
        </div>
    );
};

export default Pokemon;