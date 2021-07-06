import {  Row , Col }   from 'react-bootstrap';
import Map         from '../components/Map';
import credentials from '../credentials';
import '../App.css';
import { width } from 'dom-helpers';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`  ;

export default function Home() {
  return  (

    <>
      <div className='Container_Fed'>
     
        <Row >
          <Col >1 of 2</Col>
          <Col >2 of 2</Col>
        </Row>

        <Row >
          <Col>
              <Map
                googleMapURL= {mapURL}
                containerElement= {<div style={{height:'400px' , 
                                                paddingLeft:'10%' ,
                                                paddingRight:'10%'                                              
                                              }} /> }
                mapElement= { <div style={{height:'100%'}} /> }
                loadingElement= { <p> loading ... </p>}
              />
          </Col>
        </Row>
  
        <Row >
          <Col >1 of 3</Col>
          <Col >2 of 3</Col>
          <Col >3 of 3</Col>
        </Row>

      </div>

    </>
    );
}
