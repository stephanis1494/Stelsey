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
              <h1>  Chelsey Fairris </h1>
              <h2> Technical Administrator </h2>
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
                    c.fairris@gmail.com
                  </a>
                </div>
              </div>
              <div class="col-sm-6">
                <strong>Phone</strong>
                <div class="phone">(206)-853-7538</div>
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

        <section id="objective" class="row">
          <aside class="col-sm-3">
            <h3>Objective</h3>
          </aside>
          <div class="col-sm-9">
            <p>To provide an efficient, high personal standard of workmanship through team cooperation,
            adaptability, and personal contribution to my fellow employees and everyone around me to
            foster continued customer satisfaction and overall company profitability. </p>
          </div>
        </section>

        <section id="about" class="row">
          <aside class="col-sm-3">
            <h3>About</h3>
          </aside>
          <div class="col-sm-9">
            <p>Technical administrator, highly proficient in project planning, data management and payroll processing.</p>
            <p>Experienced in health care and administration as a residental care aid.</p>
            <p>Gained both technical and hands on experience in industrial contruction as a two year apprentice plumber. </p>
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
                    <a href="https://twitter.com/stelseygreater">stelseygreater</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <strong class="network">
                  Facebook
                </strong>
                <div class="username">
                  <div class="url">
                    <a href="https://www.facebook.com/chelsey.fairris">Chelsey Fairris</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <strong class="network">
                  LinkedIn
                </strong>
                <div class="username">
                  <div class="url">
                    <a href="https://www.linkedin.com/in/chelsey-fairris-959b1761/">Chelsey Fairris</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <strong class="network">
                  Instagram
                </strong>
                <div class="username">
                  <div class="url">
                    <a href="https://www.instagram.com/chelseyrae__/">chelseyrae_</a>
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
                  <span>Service Alternatives</span>
                  <span class="date">
                    06/2017 — Present
                  </span>
                </h4>
                <div class="position">
                  Corporate & Training Administrative Assistant
                </div>
                <div class="summary">
                  <p> Service Alternatives is a diverse team of people, united and driven by one vision:  Advancing the potential of our communities, customers, and ourselves through exceptional service.</p>
                </div>
                <h4>Highlights</h4>
                <ul class="highlights">
                  <li class="bullet"> Manage payroll, financial accounts and personnel files.</li>
                  <li class="bullet"> Personal assistant to the CEO, handling all of her scheduling/administrative needs.</li>
                  <li class="bullet"> Plan, manage and host various program events and training sessions.</li>
                </ul>
              </div>
              <div class="col-sm-12">
                <h4 class="strike-through">
                  <span>Allstate Insurance</span>
                  <span class="date">
                    08/2016 — 06/2017
                  </span>
                </h4>
                <div class="position">
                  Customer Service Representative
                </div>
                <div class="summary">
                  <p>The Allstate Corporation is one of the largest insurance providers in the United States and one of the largest that is publicly held.</p>
                </div>
                <h4>Highlights</h4>
                <ul class="highlights">
                  <li class="bullet">Principal customer services representative, handling the majority of customer interactions.</li>
                  <li class="bullet">Developed and ran multiple marketing campaigns to cultivate new business relationships.</li>
                  <li class="bullet">Performed various internal audits and handled all incoming and outgoing deliveries.</li>
                </ul>
              </div>
              <div class="col-sm-12">
                <h4 class="strike-through">
                  <span>Inventory Coordinator</span>
                  <span class="date">
                    01/2015 — 08/2016
                  </span>
                </h4>
                <div class="position">
                  Inventory coordinator
                </div>
                <div class="summary">
                  <p>In the industry for over 40 years, Sabre provides highly-engineered support structures for a wide variety of industries including electric transmission and distribution, wireless communications, renewable energy, oil and gas, and government and defense</p>
                </div>
                <h4>Highlights</h4>
                <ul class="highlights">
                  <li class="bullet">Managed deliveries, receiving, inventory control and order processing.</li>
                  <li class="bullet">Performed various customer services related projects and processes.</li>
                </ul>
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
