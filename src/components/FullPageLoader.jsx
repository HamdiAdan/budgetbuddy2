import { Spinner, Container, Row } from 'react-bootstrap';

function Loader({ bg }) {
  return (
    <Container fluid className="full-page-loader" style={{ backgroundColor: bg }}>
      <Row className="justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Row>
    </Container>
  );
}

export default Loader;

