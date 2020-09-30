import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../services';

const EditView = ({match: { params }}) => {
  const history = useHistory();

  const id = params.id;
  const [title, setNombreFoto] = useState('');
  const [thumbnailUrl, setURLFoto] = useState('');
  const [url, setURL2Foto] = useState('');

  const loadFoto = async () => {
    try {
      const resp = await services.editFoto(id);
      const foto = resp.data;      
      setNombreFoto(foto.title);
      setURLFoto(foto.thumbnailUrl);
      setURL2Foto(foto.url);
    }catch(error) {
      alert('Error al recibir la foto')
    }
  }

  useEffect(() => {
    loadFoto();
  }, []);

  const handleSumbit = async () => {
    try {
        if(!title || !thumbnailUrl || !url) {
          alert('Todos los datos son necesarios');
          return;
        }

        const photo = {
            id,
            title,
            thumbnailUrl,
            url,
        };

        await services.updateFoto(photo);
        alert('Foto actualizada exitosamente');
        history.replace('/');
    }catch(error) {
      console.log(error);
      console.log(error.response);
      alert('Error al actualizar foto');
    }
  }

  if(!title || !thumbnailUrl || !url) {
    return (
      <Container>
        <Row>
          <Col>
            <p>Cargando Foto...</p>
          </Col>
        </Row>
      </Container>
    )
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
                placeholder="https://example.com/photo.jpg ..."
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
                Actualizar Foto
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditView;