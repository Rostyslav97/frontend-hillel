import React from 'react';
import {Button} from 'react-bootstrap';

const EmojiCounter = ({emoji, counterValue, onClick}) => {
    return (
        <Button
            size='sm'
            variant="dark"
            onClick={onClick}
        >
            <span className='emoji'>Counter for {emoji} emoji: </span>
            <span>{counterValue}</span>
        </Button>
    );
};

export default EmojiCounter;