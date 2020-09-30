import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import services from '../services';
import FotoItem from '../components/FotoItem';

const HomeView = () => {
  const [fotos, setFotos] = useState(null);

  const fetchFotos = async () => {
    try {
      const resp = await services.getAllFotos();
      setFotos(resp.data)
    }catch (error) {
      alert('Error al buscar fotos');      
    }
  }

  useEffect(() => {
    fetchFotos();
  }, []);

  if(!fotos) {
    return (
      <Container>
        <Col>
          <p>Cargando Fotos...</p>
        </Col>
      </Container>
    )
  }

  return (
    <Container style={{ padding : 16 }}>
      <Row>
        {fotos.reverse().slice(0, 50).map(fotoItem => (
          <FotoItem
            key={fotoItem.id}
            id={fotoItem.id}            
            title={fotoItem.title}
            thumbnailUrl={fotoItem.thumbnailUrl}
          />
        ))}
      </Row>
    </Container>
  );
};

export default HomeView;