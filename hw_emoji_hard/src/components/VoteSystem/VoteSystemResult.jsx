import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {emojiNameMap} from "./emojiConfig.js";

const VoteSystemResult = ({counters}) => {
    const [hasWinner, setHasWinner] = useState(false);
    const [winnerName, setWinnerName] = useState('');

    const findWinner = () => {
        const [name] = Object.entries(counters).reduce((acc, emojiData) => {
            const [name, value] = emojiData;
            const [accName, accValue] = acc;

            if (value > accValue) {
                return emojiData;
            }

            return acc;
        }, ['', 0])

        setWinnerName(name)
        setHasWinner(true);
    }

    return (
        <Row>
            <Col>
                <Button onClick={findWinner}>Find a winner!</Button>
                <hr/>
                {hasWinner && <h1>Winner: {winnerName} - {emojiNameMap[winnerName]} | {counters[winnerName]}</h1>}
            </Col>
        </Row>
    );
};

export default VoteSystemResult;