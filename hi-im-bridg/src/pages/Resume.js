import React from 'react';
import { Card, CardGroup, Button, ListGroup, ListItem, Row, Col, Container } from 'react-bootstrap';
import resumePdf from '../images/bridget-resume.pdf';
import "../App.css";

function Resume() {

  return (
      <>
            <Container className='resume'>
                <Button id="print" type="button">
                <a href={resumePdf}>Print PDF</a>
                </Button> 
                <Row xs={6} md={4}>
                    <Col>
                        <Card className="education" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title className="resume-head">
                                  <h2 className='res-title'> Education</h2>
                                    </Card.Title>
                                <ListGroup className="resume-box" variant="flush">
                                    <ListGroup.Item id="res-list">Certificate, Full Stack Web Development </ListGroup.Item>
                                    <ListGroup.Item id="res-list">University of Utah - Salt Lake City, UT</ListGroup.Item>
                                    <ListGroup.Item id="res-list">August 2021 - February 2022</ListGroup.Item>
                                </ListGroup>
                                <ListGroup className="resume-box" variant="flush">
                                    <ListGroup.Item id="res-list">Bachelor's of Science in geology</ListGroup.Item>
                                    <ListGroup.Item id="res-list">Western Colorado University, Gunnison Colorado</ListGroup.Item>
                                    <ListGroup.Item id="res-list">August 2014 to May 2019</ListGroup.Item>
                                </ListGroup>
                                <ListGroup className="resume-box" variant="flush">
                                    <ListGroup.Item id="res-list">Minor in business administration</ListGroup.Item>
                                    <ListGroup.Item id="res-list">Western Colorado University</ListGroup.Item>
                                    <ListGroup.Item id="res-list">August 2014 to May 2019</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row xs={6} md={4}>
                    <Col>
                    <Card className="work-section" style={{ width: '100%' }}>
                            <Card.Body>
                            <Card.Title className="resume-head">
                                  <h2 className='res-title'> Work Experience </h2>
                                    </Card.Title>
                                <Card.Header className="resume-head">CTl Thompson</Card.Header>
                                <Card.Body className="resume-box">
                                    <Card.Title id="res-list" className="resume-head">May 2019- August 2021</Card.Title>
    
                                    <Card.Title id="res-list" className="resume-head">Responsibilities: </Card.Title>
                                    <ListGroup className="resume-box" variant="flush">
                                        <ListGroup.Item id="res-list">Test, observe, and facilitate on-site operations to ensure building materials were at engineering and safety standards</ListGroup.Item>
                                        <ListGroup.Item id="res-list">Offered recommendations on material processing improvements</ListGroup.Item>
                                        <ListGroup.Item id="res-list">Communicate with project managers, superintendents and office staff and create daily field present reports stating operations, issues and any relevant information.</ListGroup.Item>
                                        <ListGroup.Item id="res-list"> Promoted to lead trainer after six months</ListGroup.Item>
                                        <ListGroup.Item id="res-list"> Was given the largest job site at the company on top of additional job sites I conducted testing for</ListGroup.Item>    
                                    </ListGroup>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                        <Card className="work-section" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Header className="resume-head">CTL Thompson </Card.Header>
                                <Card.Body className="resume-box">
                                    <Card.Title id="res-list" className="resume-head">May 2019- August 2021</Card.Title>
    
                                    <Card.Title id="res-list" className="resume-head">Responsibilities: </Card.Title>
                                    <ListGroup className="resume-box" variant="flush">
                                        <ListGroup.Item id="res-list">Provide excellent customer service while multi-tasking bartending serving and bussing in a high traffic environment </ListGroup.Item>
                                        <ListGroup.Item id="res-list">Communicating with coworkers, managers and customers to ensure that the best service is given</ListGroup.Item>  
                                    </ListGroup>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                        <Card className="work-section" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Header className="resume-head">Rover (Pet care mobile app) </Card.Header>
                                <Card.Title id="res-list" className="resume-head">Years worked (2020-present)</Card.Title>
    
                                <Card.Title  id="res-list" className="resume-head">Responsibilities: </Card.Title>
                                <ListGroup className="resume-box" variant="flush">
                                    <ListGroup.Item> Use owner instructions for walking, feeding and exercise.</ListGroup.Item>    
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row >
                <Row xs={6} md={4}>
                    <Col>
                        <Card className="resume-section" style={{ width: '100%' }}>
                            <Card.Body>
                            <Card.Title className="resume-head">
                                  <h2 className='res-title'> Technical Skills</h2>
                                    </Card.Title>
                                <ListGroup className="resume-box" variant="flush">
                                    <ListGroup.Item>JavaScript ES6+</ListGroup.Item>
                                    <ListGroup.Item>CSS</ListGroup.Item>
                                    <ListGroup.Item>HTML5</ListGroup.Item>
                                    <ListGroup.Item>SQL</ListGroup.Item>
                                    <ListGroup.Item>NoSQL</ListGroup.Item>
                                    <ListGroup.Item>GitHub</ListGroup.Item>
                                    <ListGroup.Item>MongoDB</ListGroup.Item>
                                    <ListGroup.Item>MySQL</ListGroup.Item>
                                    <ListGroup.Item>Express</ListGroup.Item>
                                    <ListGroup.Item>React</ListGroup.Item>
                                    <ListGroup.Item>Node</ListGroup.Item>
                                    <ListGroup.Item>Handlebars</ListGroup.Item>
                                    <ListGroup.Item>jQuery</ListGroup.Item>
                                    <ListGroup.Item>Bootstrap</ListGroup.Item>
                                    <ListGroup.Item>Bulma</ListGroup.Item>

                                </ListGroup>
                                <Card.Header className="resume-head">Skills</Card.Header>
                                <ListGroup className="resume-box" variant="flush">
                                    <ListGroup.Item>Communication</ListGroup.Item>
                                    <ListGroup.Item>Customer Service</ListGroup.Item>
                                    <ListGroup.Item>Geologic engineering</ListGroup.Item>
                                    <ListGroup.Item>Training/leadership</ListGroup.Item>
                                    <ListGroup.Item>Chemistry</ListGroup.Item>
                                    <ListGroup.Item>Physics</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row >
            </Container>
</>
    )
}

export default Resume;
