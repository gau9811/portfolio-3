import React, { useState } from 'react'
import Footer from "./back/web.svg"
import './App.css';
import Grid from '@material-ui/core/Grid';
import { Card } from "react-bootstrap"
import AOS from 'aos';
import { Link } from 'react-router-dom'
import moment from 'moment'
const MainPage = () => {

  AOS.init({


    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,


    offset: 120,
    delay: 0,
    duration: 500,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',

  });

  const [Dark, setDark] = useState(false)

  const handleChange = () => {
    setDark(dark => !dark)
  }


  const Styling = {
    backgroundColor: Dark ? "rgba( 225,225,225,0.4 )" : null,
    color: Dark ? "black" : "white"
  }
  const Styling2 = {
    color: Dark ? "black" : "white"
  }



  const Heading = () => {
    return (
      <div className="Heading">
        <Grid container>
          <Grid item xs={12} sm={12}>
            <h1 style={Styling2} className="main-head animate__animated animate__fadeInDown animate__delay-1s">
              HEY I'M GAURAV
       </h1>
          </Grid>
          <Grid item xs={12} sm={12}>
            <h2 style={Styling2} className="main-head-2 animate__animated animate__fadeInDown animate__delay-2s">BAJAJ</h2>
          </Grid>
          <Grid style={Styling2} item xs={12} sm={12}>
            <h3 className="main-title animate__animated animate__fadeInDown animate__delay-3s">I'm seasoned software developer</h3>
          </Grid>
          <Grid style={Styling2} item xs={12} sm={12}>
            <h4 className="main-title-2 animate__animated animate__fadeInDown animate__delay-4s">Who loves to develop product for personal client and enterprise company</h4>
          </Grid>
        </Grid>
      </div>
    )
  }

  const MainContent = () => {
    return (
      <div className="Content" data-aos="fade-up" data-aos-delay="20">
        <h1 style={{ textAlign: "center", color: "aliceblue" }}>PROJECTS</h1>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"

        >
          <Grid item xs={12} sm={12}>
            <a className="card-p" href="https://github.com/gau9811/eCommerce-website-with-payment-gateway">
              <Card className="Content-Card" data-aos="fade-up" data-aos-delay="150">
                <Card.Body>
                  <Card.Title>React-Node e-commerce</Card.Title>
                  <Card.Text>
                    An app that allows you to create a product and sell products
        </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Grid>

          <Grid item xs={12} sm={12}>
            <a className="card-p" href="https://github.com/gau9811/olx-replica-backend">
              <Card className="Content-Card-2" data-aos="fade-up" data-aos-delay="200">
                <Card.Body>
                  <Card.Title>Node-olx-replica-backend</Card.Title>
                  <Card.Text>
                    It allows you to buy or sell a product but you can sell via chat discussion and it uses passport js AWS s3 nodemailer <technologies></technologies>
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Grid>
          <Grid item xs={12} sm={12}>
            <a className="card-p" href="https://github.com/gau9811/trucky-app">
              <Card className="Content-Card-3" data-aos="fade-up" data-aos-delay="250">
                <Card.Body>
                  <Card.Title>React Trucky-app</Card.Title>
                  <Card.Text>
                    It allows you to store truck driver information and manage their details about the driver vital information
        </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Grid>
          <Grid item xs={12} sm={12}>
            <a className="card-p" href="https://github.com/gau9811/Dev-Connector">
              <Card className="Content-Card-4" data-aos="fade-up" data-aos-delay="300">
                <Card.Body>
                  <Card.Title>Mongo-express-react-node Dev-connector</Card.Title>
                  <Card.Text>
                    It allows you to create a user profile like Github and interact with other developers like a social media platform
        </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Grid>
        </Grid>

      </div>
    )
  }



  const About = () => {
    return (
      <Grid container>
        <Grid item sm={12} xs={12}>
          <div className="About" data-aos="fade-up" data-aos-delay="20">
            <h1 className="About-Head" data-aos="fade-up" data-aos-delay="50">ABOUT</h1>
            <p className="About-Head-2" data-aos="fade-up" data-aos-delay="70">I'm a technology geek who loves to learn new technology and I love to play badminton in my spare time.</p>
          </div>
        </Grid>
      </Grid>
    )
  }


  const WaveTo = () => {
    return (
      <Grid container>
        <Grid item sm={12} xs={12}>
          <div className="Content-3" data-aos="fade-up" data-aos-delay="20">
            <h1 className="Wave-Head" data-aos="fade-up" data-aos-delay="40">Catch me on 😃</h1>
            <p className="Wave-Head" data-aos="fade-up" data-aos-delay="60"><a style={{ textDecoration: "none", color: "orange" }} href="https://www.linkedin.com/in/gaurav-bajaj-a680201b3">Linkedin</a> and <a href="https://github.com/gau9811" style={{ textDecoration: "none", color: "orange" }}>Github</a>  or <Link style={{ textDecoration: "none", color: "orange" }} to="/contact">DM</Link></p>
          </div>
        </Grid>
      </Grid>
    )
  }


  return (
    <div style={Styling}>
      <Heading />
      <MainContent />
      <About />
      <WaveTo />
      <div className="Content-6" data-aos="fade-up" data-aos-delay="20">
        <div className="container">
          <img src={Footer} width="100%" className="Footer-img" />
          <button type="button" style={Styling} className="Footer-btn" onClick={handleChange}>
            {Dark ? '🌙' : '🌞'}
          </button>
          <h6 style={{ color: "aliceblue" }} className="footer-line">Copyright © {moment().format('YYYY')} - {moment().format('YYYY').slice(0, -1) + 1}. All rights reserved.</h6>
        </div>
      </div>
    </div>
  )
}

export default MainPage
