import React, { useEffect } from 'react'
import './mus.css'
import { Container, Card ,Button} from 'react-bootstrap';
const Pop = () => {



  return (
<Container fluid>
<Card style={{ width: 'auto', borderRadius:'5vh',border:'2px solid white',backgroundColor:' rgb(9, 55, 30)'}}>
      <Card.Img  className="mus" />

        <Button variant="outline"style={{color:'white'}} >Explore The Collection...</Button>
      
    </Card>
</Container>
  )
}

export default Pop;


