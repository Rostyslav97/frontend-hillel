import {useState} from "react";
import {Row, Col} from "react-bootstrap";
import EmojiCounter from "../EmojiCounter";

const countersInitialValues = {
    smile: 0,
    cry: 0,
    clap: 0,
    heart: 0
}

const VoteSystem = () => {
    const [counters, setCounters] = useState({...countersInitialValues});

    const increment = (name) => {
        const localCounters = {...counters};
        localCounters[name] += 1;
        setCounters(localCounters);
    }

    return (
        <Row>
            <Col>
                <EmojiCounter
                    emoji='🤣'
                    counterValue={counters.cry}
                    onClick={() => increment('cry')}
                />
            </Col>
            <Col>
                <EmojiCounter
                    emoji='😀'
                    counterValue={counters.smile}
                    onClick={() => increment('smile')}
                />
            </Col>
            <Col>
                <EmojiCounter
                    emoji='👏'
                    counterValue={counters.clap}
                    onClick={() => increment('clap')}
                />
            </Col>

            <Col>
                <EmojiCounter
                    emoji='❤️'
                    counterValue={counters.heart}
                    onClick={() => increment('heart')}
                />
            </Col>
        </Row>
    );
};

export default VoteSystem;