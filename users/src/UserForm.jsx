import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [photo, setPhoto] = useState(null);
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedFirstName = firstName.trim();
        const trimmedLastName = lastName.trim();
        const numericAge = Number(age);

        if (!trimmedFirstName || !trimmedLastName || age === "" || !photo || numericAge < 0) {
            alert("Будь ласка, заповніть усі поля коректно!");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const newUser = {
                firstName: trimmedFirstName,
                lastName: trimmedLastName,
                age: numericAge,
                photo: reader.result
            };

            setUsers([...users, newUser]);
            setFirstName("");
            setLastName("");
            setAge("");
            setPhoto(null);
        };
        reader.readAsDataURL(photo);
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Ім'я</Form.Label>
                            <Form.Control
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Прізвище</Form.Label>
                            <Form.Control
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Вік</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                value={age}
                                onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Фото</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={(e) => setPhoto(e.target.files[0])}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Додати користувача
                        </Button>
                    </Form>
                </Col>

                <Col md={6}>
                    {users.map((user, index) => (
                        <Card key={index} className="mb-3">
                            <Card.Img variant="top" src={user.photo} />
                            <Card.Body>
                                <Card.Title>
                                    {user.firstName} {user.lastName}
                                </Card.Title>
                                <Card.Text>Вік: {user.age}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default UserForm;
