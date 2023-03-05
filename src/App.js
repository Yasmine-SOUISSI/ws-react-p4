import "./App.css";
import { FormGroup } from "./Components/FormGroup";
import CustomButton from "./Components/Button";
import { Card, Form } from "react-bootstrap";
import { products } from "./Data/products";

function App() {
  const handleClicked = (name) => {
    alert(`You clicked ${name}`);
  };
  return (
    <>
      <div className='d-flex flex-wrap'>
        {products.map((product) => {
          return (
            <Card style={{ width: "18rem", margin: 10 }}>
              <Card.Img variant='top' src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <button
                  className='btn btn-primary'
                  onClick={() => handleClicked(product.name)}
                >
                  Add to cart
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <Form>
        <FormGroup />

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <CustomButton />
      </Form>
    </>
  );
}

export default App;
