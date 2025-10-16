import {useState} from "react";
import {Row, Col} from "react-bootstrap";
import EmojiCounter from "../EmojiCounter";
import {emojiNameMap, EMOJI_KEYS} from "./emojiConfig";
import VoteSystemResult from "./VoteSystemResult";

const countersInitialValues = {
    [EMOJI_KEYS.SMILE]: 0,
    [EMOJI_KEYS.CRY]: 0,
    [EMOJI_KEYS.CLAP]: 0,
    [EMOJI_KEYS.HEART]: 0,
    customSmile: 0
}

const VoteSystem = () => {
    const [counters, setCounters] = useState({...countersInitialValues});
    const [shouldShowResult, setShouldShowResult] = useState(false);

    const increment = (name) => {
        const localCounters = {...counters};
        localCounters[name] += 1;
        setCounters(localCounters);
        setShouldShowResult(true)
    }


    const generateEmojiCounters = () => {
        return Object.entries(counters).map(([name]) => {
            return <Col key={name}>
                <EmojiCounter
                    emoji={emojiNameMap[name]}
                    counterValue={counters[name]}
                    onClick={() => increment(name)}
                />
            </Col>
        })
    }

    return (
        <>
            <Row className="mb-5">
                {generateEmojiCounters()}
            </Row>
            {shouldShowResult && <VoteSystemResult counters={counters} />}
        </>
    );
};

export default VoteSystem;