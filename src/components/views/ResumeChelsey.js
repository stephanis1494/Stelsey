import React from 'react'
import './Resume.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export const ResumeChelsey = () => {
  return(
    <div>

      <header id="header">
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-sm-push-3">
              <h1>  Stephen Fairris </h1>
              <h2> Web Application Developer </h2>
            </div>
          </div>
        </div>
      </header>

      <div id="content" class="container">

        <section id="contact" class="row">
          <aside class="col-sm-3">
            <h3>Contact</h3>
          </aside>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-sm-6">
                <strong>Email</strong>
                <div class="email">
                  <a href="mailto:stephen@stelsey.com" class="__cf_email__" data-cfemail="deb5bbb09eb5bbb0adaab7aebbb5f0bdb1b3">
                    stephen@stelsey.com
                  </a>
                </div>
              </div>
              <div class="col-sm-6">
                <strong>Phone</strong>
                <div class="phone">(425)-876-7838</div>
              </div>
              <div class="col-sm-6">
                <strong>Website</strong>
                <div class="website">
                  <a href="https://www.stelsey.com">https://www.stelsey.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" class="row">
          <aside class="col-sm-3">
            <h3>About</h3>
          </aside>
          <div class="col-sm-9">
            <p>Front-end web app developer experienced in API-driven, single-page applications using React.</p>
            <p>Participating in a mentorship with a Senior Full-Stack developer with over eight years of experience.</p>
            <p>Internred at Cointaxes, building a web application to calculate tax liability for crypto assets.</p>
            <p> Currently working freelance at Upwork, specializing in React Single-Page Applications with AWS Serverless architecture. </p>
            <p>Over ten years experience in Aerospace Quality, certified through ASQ as a Six Sigma Green Belt focusing on lean principles and continuous improvement.</p>
          </div>
        </section>

        <section id="profiles" class="row">
          <aside class="col-sm-3">
            <h3>Profiles</h3>
          </aside>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-sm-6">
                <strong class="network">
                  Twitter
                </strong>
                <div class="username">
                  <div class="url">
                    <a href="https://twitter.com/StelseyLesser">StelseyLesser</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <strong class="network">
                  GitHub
                </strong>
                <div class="username">
                  <div class="url">
                    <a href="https://github.com/stephanis1494">stephenfairris</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <strong class="network">
                  LinkedIn
                </strong>
                <div class="username">
                  <div class="url">
                    <a href="https://www.linkedin.com/in/smillard08/">Stephen Fairris</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <strong class="network">
                  Instagram
                </strong>
                <div class="username">
                  <div class="url">
                    <a href="https://www.instagram.com/stelseythelesser/">stelseythelesser</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" class="row">
          <aside class="col-sm-3">
            <h3>Work</h3>
          </aside>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-sm-12">
                <h4 class="strike-through">
                  <span>Upwork</span>
                  <span class="date">
                    12/2018 — Present
                  </span>
                </h4>
                <div class="position">
                  Freelance Web Developer
                </div>
                <div class="summary">
                  <p>Upwork, formerly Elance-oDesk, is a global freelancing platform where businesses and independent professionals connect and collaborate remotely</p>
                </div>
                <h4>Highlights</h4>
                <ul class="highlights">
                  <li class="bullet"> Currently developing serverless Single-Page Application for cleint utilizing React, Graphql and AWS serverless lambda architecture.</li>
                </ul>
              </div>
              <div class="col-sm-12">
                <h4 class="strike-through">
                  <span>Panasonic Avionics</span>
                  <span class="date">
                    10/2014 — Present
                  </span>
                </h4>
                <div class="position">
                  Quality Inspector II
                </div>
                <div class="summary">
                  <p>Panasonic Avionics Corporation designs, engineers, manufactures, sells and installs customized in-flight entertainment and communications solutions to airlines worldwide</p>
                </div>
                <h4>Highlights</h4>
                <ul class="highlights">
                  <li class="bullet">Perform inspection and type design validation for various complex electrical assemblies as well as generation and verification of FAA air worthiness certifications.</li>
                  <li class="bullet">Lead teams on Six Sigma projects, utilizing lean principles to improve process flow and establish a culture of continuous improvement. </li>
                </ul>
              </div>
              <div class="col-sm-12">
                <h4 class="strike-through">
                  <span>Cointaxes</span>
                  <span class="date">
                    04/2018 — 01/2019
                  </span>
                </h4>
                <div class="position">
                  Front-end Developer Intern
                </div>
                <div class="summary">
                  <p>Cointaxes is a New York based startup that provides solutions for calculating clients tax liabilities for crypto assets.</p>
                </div>
                <h4>Highlights</h4>
                <ul class="highlights">
                  <li class="bullet">Developing a white label web application using React, Redux and AWS Lambda to calculate clients crypto currency tax liabilities.</li>
                </ul>
              </div>
              <div class="col-sm-12">
                <h4 class="strike-through">
                  <span>The Boeing Company</span>
                  <span class="date"> 08/2011 — 03/2014</span>
                </h4>
                <div class="position">
                  Quality Specialist
                </div>
                <div class="summary">
                  <p>The Boeing Company is an American multinational corporation that designs, manufactures, and sells airplanes, rotorcraft, rockets, satellites, and missiles worldwide. The company also provides leasing and product support services.</p>
                </div>
                <h4>Highlights</h4>
                <ul class="highlights">
                  <li class="bullet">My role as a member of the Advance Developemental Research Department involved the non-destructive analysis of carbon composite structures for future aircraft.</li>
                  <li class="bullet">Micro failure mode analysis methods included Ultrasonic and Radiographic inspection modes, including the programmatic development of KUKA robotic applications.</li>
                  <li class="bullet">Lead my department continuous improvement team to help develop and streamline lean production processes and procedures.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="mentorship" class="row">
          <aside class="col-sm-3">
            <h3>Mentorship</h3>
          </aside>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-sm-12">
                <h4 class="strike-through">
                  <span>Private Mentorship</span>
                  <span class="date"> 9/2017 — Present </span>
                </h4>
                <div class="position"> Mentee </div>
                <div class="summary">
                  <p>Participating in a private mentorship by a senior full-stack developer, focusing on full stack web developement technologies including Node, React, Redux and AWS Lambda, S3 and DynamoDb. </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" class="row">
          <aside class="col-sm-3">
            <h3>Education</h3>
          </aside>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-sm-12">
                <h4 class="strike-through">
                  <span>Edmonds Community College</span>
                  <span class="date">
                    9/2017 — Present
                  </span>
                </h4>
                <div class="area">
                  Computer Science
                </div>
                <div class="studyType">
                  (Currently enrolled) Associate of Science
                </div>
              </div>
              <div class="col-sm-12">
                <h4 class="strike-through">
                  <span>Villanova University</span>
                  <span class="date">
                    01/2013 — 09/2013
                  </span>
                </h4>
                <div class="area">
                  Six Sigma Certification
                </div>
                <div class="studyType">
                  Certificate program for Lean Six Sigma Green & Black Belts
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" class="row">
          <aside class="col-sm-3">
            <h3>Skills</h3>
          </aside>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-sm-6">
                <div class="name">
                  <h4>Front-End Development</h4>
                </div>
                <ul class="keywords">
                  <li>Javascript</li>
                  <li>ES6</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>SASS</li>
                  <li>Webpack</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div class="col-sm-6">
                <div class="name">
                  <h4>Back-End Development</h4>
                </div>
                <ul class="keywords">
                  <li>PostgreSQL</li>
                  <li>AWS DynamoDb</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                </ul>
              </div>
              <div class="col-sm-6">
                <div class="name">
                  <h4>Operations</h4>
                </div>
                <ul class="keywords">
                  <li>AWS API Gateway</li>
                  <li>AWS Lambda</li>
                  <li>AWS S3</li>
                  <li>GIT</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Link to='/'><Button> Back </Button></Link>
      </div>
    </div>
  )
}
