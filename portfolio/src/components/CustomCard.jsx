import React from 'react';
import windowSize from 'react-window-size';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './css/CustomCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomCard(props) {
    const sty = (props.windowWidth < 468) ? { width: '30rem' } : { width: '27rem' };
    return(
        <div className="deck">
            <Card style={sty} bg='dark' text='white'>
                <Card.Img variant="top" src={props.image} style={{ background: '#000'}}/>
                <Card.Body>
                    <font className="title">{props.name}</font>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <a href={props.link} target="_blank"><Button size="lg" variant="outline-light">View Project</Button></a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default windowSize(CustomCard);