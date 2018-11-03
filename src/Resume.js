import React from 'react'
import { Navbar, Grid, Row, Col } from 'react-bootstrap'
import './Resume.css'

export const Resume = () => {
  return(
    <Grid>
      <Navbar id='header'>
        <Row>
          <Col xs={6} md={4} lg={4}></Col>
          <Col xs={6} md={4} lg={4}>
            <h1> Stephen Fairris </h1>
            <h2> Junior Web Developer </h2>
          </Col>
          <Col xs={6} md={4} lg={4}></Col>
        </Row>
      </Navbar>
      <br />
      <br />
      <br />
      <Row id='row'>
        <Col xs={4} md={4} lg={4} id='col-left'> <h1 id='top'> Contact </h1></Col>
        <Col xs={4} md={4} lg={4} id='col-center'>
          <Row>
            <Col xs={4} md={4} lg={4}>
              <h4 id='bold'>Email</h4>
              <p> Stephen@stelsey.com</p>
            </Col>
            <Col xs={4} md={4} lg={4}></Col>
            <Col xs={4} md={4} lg={4}>
              <h4 id='bold'>Phone</h4>
              <p>(425)-876-7838</p>
            </Col>
          </Row>
          <Row id='row'>
            <Col xs={12} md={12} lg={12}>
              <h4 id='bold'>Website</h4>
              <p><a href='https://www.stelsey.com'>https://www.stelsey.com</a></p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row id='row'>
        <Col xs={4} md={4} lg={4} id='col-left'> <h1 id='top'> About </h1></Col>
        <Col xs={6} md={6} lg={6} id='col-center'>
          <p> Front-end web app developer experienced in API-driven, single-page applications using React. </p>

          <p> Additionally experienced in AWS services including Lambda functions, S3, DynamoDb and Amplify. </p>

          <p> Participated in mentorship with a senior full-stack developer with over 8 years of web app developement experience. .</p>

          <p> Currently a front-end developement intern at Cointaxes, developing a web application to assist in the calculation
              of tax liability for crypto assets.
          </p>
        </Col>
        <Col xs={2} md={2} lg={2}></Col>
      </Row>
      <br />
      <Row id='row'>
        <Col xs={4} md={4} lg={4} id='col-left'> <h1 id='top'> Profiles </h1> </Col>
        <Col xs={4} md={4} lg={4}>
          <Row>
            <Col xs={4} md={4} lg={4}>
              <h4 id='bold'>Twitter</h4>
              <a href='https://twitter.com/StelseyLesser' target='_blank'>@StelseyLesser</a>
              <h4 id='bold'>Github</h4>
              <a href='https://github.com/stephanis1494' target='_blank'>Stephen Fairris</a>
            </Col>
            <Col xs={4} md={4} lg={4}></Col>
            <Col xs={4} md={4} lg={4}>
              <h4 id='bold'>LinkedIn</h4>
              <a href='https://www.linkedin.com/in/smillard08/' target='_blank'>Stephen Fairris</a>
              <h4 id='bold'>Instagram</h4>
              <a href='https://www.instagram.com/stelseythelesser/' target='_blank'>@stelseythelesser</a>
            </Col>
          </Row>
        </Col>
        <Col xs={4} md={4} lg={4}></Col>
      </Row>
      <br />
      <Row id='row'>
        <Col xs={4} md={4} lg={4} id='col-left'> <h1 id='top'> Work </h1></Col>
        <Col xs={6} md={6} lg={6} id='col-center'>
          <Row>
            <Col xs={4} md={4} lg={4}><h3 id='bold'>CoinTaxes</h3></Col>
            <Col xs={5} md={5} lg={5}></Col>
            <Col xs={3} md={3} lg={3}><p>12/2016 - Present</p></Col>
          </Row>
        </Col>
        <Col xs={2} md={2} lg={2}></Col>
      </Row>
    </Grid>
  )
}
