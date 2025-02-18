import Form from "react-bootstrap/Form";

export default function Buscar() {
  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </>
  );
}
