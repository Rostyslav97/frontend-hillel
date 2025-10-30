import PageHeader from "../components/PageHeader/index.js";
import {Alert, Button, Form, Spinner} from "react-bootstrap";
import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {fetchData} from "../utils/api.js";
import routerPaths from "../router/routerPaths.js";

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formState, setFormState] = useState({ title: '', body: '' });
    const [loading, setLoading] = useState(false);
    const [loadingPost, setLoadingPost] = useState(false);
    const [isRequestSuccess, setIsRequestSuccess] = useState(false);

    useEffect(() => {
        const loadPost = async () => {
            setLoadingPost(true);
            try {
                const data = await fetchData(`/posts/${id}`);
                setFormState({ title: data.title, body: data.body });
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingPost(false);
            }
        };

        loadPost();
    }, [id]);

    const handleChange = ({ target }) => {
        setFormState(prev => ({ ...prev, [target.name]: target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    ...formState,
                    id: Number(id),
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const json = await response.json();
            console.log(json);
            setIsRequestSuccess(true);

            setTimeout(() => {
                navigate(routerPaths.posts);
            }, 2000);
        } catch (error) {
            console.error(error);
            setIsRequestSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <PageHeader title={`Edit Post #${id}`} />

            {isRequestSuccess && <Alert variant="success" className="text-center">Post updated successfully!</Alert>}

            {loadingPost ? (
                <Alert variant="warning" className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading post...</span>
                    </Spinner>
                </Alert>
            ) : (
                <Form className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={formState.title}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBody">
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="body"
                            value={formState.body}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </Form.Group>

                    <Button variant={loading ? 'secondary' : 'primary'} type="submit" disabled={loading}>
                        {loading && <Spinner animation="border" size="sm" className="me-2" />}
                        Save Changes
                    </Button>
                </Form>
            )}
        </div>
    );
};

export default EditPost;
