
import React    from 'react';
import {  Row , Col }   from 'react-bootstrap';

function Footer() {
  
    return (

    <>
    <div className='Footer'> 

        <Row className='Footer_Rows' >

            <Col className='Footer_Cols' >
                <div className='Footer_SocialMedia'> 
                    Para comunicarte con nosotros, escribimos a: autoinmunesenlamujer@gmail.com
                </div>
            </Col>
            
            <Col className='Footer_Cols' >
                <div className='Footer_SocialMedia'> 
                    Seguinos en nuestras redes sociales: 
                </div>
            </Col>

            <Col className='Footer_Cols' >
                <div className='Footer_SocialMedia'> 
                    Mirá todos nuestros videos en:
                </div>
            </Col>
        
        </Row>

        
        <Row className='Footer_Rows' >
            <Col className='Footer_Cols' >
                <div className='Footer_Text_ColibriesIt'> 
                    Diseñado por ColibriesIT - Colibriesit@gmail.com..ar
                </div>
            </Col>
        </Row>

    </div>

    </>
    )
}
export default Footer;
