import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../services';

const AddView = () => {
  const history = useHistory();
  const [title, setNombreFoto] = useState('');
  const [thumbnailUrl, setURLFoto] = useState('');
  const [url, setURL2Foto] = useState('');

  const handleSumbit = async () => {
    try {
      if(!title || !thumbnailUrl || !url) {
        alert('Todos los datos son necesarios');
        return;
      }

      const photo = {
        title,
        thumbnailUrl,
        url,
      };

      const resp = await services.addFoto(photo);
      console.log(resp)
      alert('Foto ingresada exitosamente');
      history.replace('/');
    }catch(error) {
      console.log(error);
      alert('Error al ingresar foto');
    }
  }

  return (
    <Container style={{ padding: 16 }}>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Nombre Foto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar nombre de foto"
                onChange={e => setNombreFoto(e.target.value)}
                value={title}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>URL Foto</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://example.com/photo.jpg"
                onChange={e => setURLFoto(e.target.value)}
                value={thumbnailUrl}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>URL 2 Foto</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://example.com/photo.jpg ..."
                onChange={e => setURL2Foto(e.target.value)}
                value={url}
              />
            </Form.Group>

            <Form.Group>
              <Button
                variant="primary"
                onClick={handleSumbit}
              >
                Añadir Foto
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddView;