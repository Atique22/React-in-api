import {React,useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function ProductApi() {
            const [data, setData] = useState([]);

            const Datafetch = async () => {
                const response = await fetch('https://fakestoreapi.com/products');
                setData(await response.json());
                console.log(response);
            }

            useEffect(()=>{
                Datafetch();
            },[])

  return (
    <>
        <Row>
        {
            data.map((res)=>{
                return(
                    <Col>
                        <Card style={{ width: '20rem', margin: '2rem',padding: '2rem' }}>
                            <Card.Img  src= {res.image} />
                            
                            <Card.Body>
                                <Card.Title>{res.title}</Card.Title>
                                <Card.Text>
                                {res.category}
                                </Card.Text>
                                <Button variant="primary">Price: {res.price}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    

                )
            })
        }
        </Row>
    </>
  )
}

export default ProductApi