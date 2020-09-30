import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import services from '../services';

const FotoItem = ({ id, title, thumbnailUrl, url }) => {  

  const deleteFoto = async () => {
    try {
      await services.deleteFoto(id);
      alert('Foto eliminada')
      window.location.reload()
    }catch(error) {
      console.log(error)
      alert('Error al eliminar foto')
    }
  }

  return (
    <Col md="auto" style={{ marginTop: 16 }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={thumbnailUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Link to={`/edit/${id}`}>
            <Button variant="primary">Editar</Button>
          </Link>
          <Button onClick={deleteFoto} variant="danger" style={{ marginLeft: 16 }}>Eliminar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FotoItem;