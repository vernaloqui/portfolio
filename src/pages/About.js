import {Row, Col} from 'react-bootstrap';
import logo from '../img/logo2.png';

function About(){
    return(
        <>
        <div className="container m-1">
        <Row>
            <Col className="ms-5">
                <img src={logo} alt="logo" />
            </Col>
            <Col className="about m-5">
                <h4 className="text-uppercase">About</h4>
                <hr/>
                <br/>
                <br/>
                <br/>
                <h1><strong>Got a problem to solve?</strong></h1>
                <p>A position in full-stack web development, ReactJS, or Laravel is what I'm seeking for as a recent graduate of the Fullstack Web Development bootcamp. My ability to clearly articulate my ideas both orally and in writing allows me to explain complex web app issues to others</p>
                <i class="bi bi-github"></i>
                <i class="bi bi-discord"></i>
            </Col>
            
        </Row>
        
        </div>
        </>
    )
}
export default About;