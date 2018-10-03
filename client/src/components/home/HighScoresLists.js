import React from 'react';

const HighScoresLists = (props) => {
    console.log(props)
    return (
        <React.Fragment >
            <p>{props.username}: ${props.bank}</p>
        </React.Fragment >
    );
};

export default HighScoresLists;