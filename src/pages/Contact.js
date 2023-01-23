import './contact.css';
import { Row, Col } from 'react-bootstrap';

function Contact(){
    return(
        <>
        <div className="container m-3">
        <Row>
            <Col className="m-5">
                <h4 className="text-uppercase">Contact</h4>
                <hr/>
                <br/>
                <br/>
                <br/>
                <h1><strong>Got a problem to solve?</strong></h1>
                <p>Tell me your ideas to develop your dream website application.</p>
                <i className="bi bi-envelope"> vernadetteloquinario@gmail.com</i> 
            </Col>
            <Col>
                <br/>
                <br/>
                <br/>
                <br/>
                <form>
                    <div class="Icon-inside">
                        <label>Name:</label><br/>
                        <i class="bi bi-person-fill"></i>
                        <input type="text" ></input>
                    </div><br/>
                    <div class="Icon-inside">
                        <label>Email:</label><br/>
                        <i class="bi bi-envelope"></i>
                        <input type="email" ></input>
                    </div><br/>
                    <div class="Icon-inside">
                        <label>Message:</label><br/>
                        <textarea rows="3" cols="75"></textarea>
                    </div><br/>
                    
                    <button type="submit" className="btn">Send me a message <i className="bi bi-send-fill"></i></button>
                </form>
            </Col>
        </Row>
        
        </div>
        </>
    )
}

export default Contact;