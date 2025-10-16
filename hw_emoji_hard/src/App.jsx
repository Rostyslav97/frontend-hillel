import {Container, Row, Col} from "react-bootstrap";
import VoteSystem from "./components/VoteSystem";
const App = () => {
    return <Container>
        <Row>
            <Col>
                <VoteSystem />
            </Col>
        </Row>
    </Container>
}

export default App;