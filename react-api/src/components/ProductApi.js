import {React,useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
        {
            data.map((res)=>{
                return(<Card style={{ width: '18rem', margin: '2rem',padding: '2rem' }}>
                    <Card.Img variant="top" src= {res.image} />
                    <Card.Body>
                        <Card.Title>{res.title}</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>)
            })
        }
        
    </>
  )
}

export default ProductApi