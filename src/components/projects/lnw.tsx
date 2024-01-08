import React from "react";
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import gdmWrapperGames from './img/gdmWrapperGames.png';
import iosAws from './img/iosAws.png';
import gps from './img/gps.png';


class ProjectGdmWrapper extends React.Component<any, any> {
    expand = false

    handleSelect(e) {
        e.preventDefault();
        console.log(e);
    }

    techStack() {
        return (
          <Row>
              <Col>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="danger ms-1">Python</Badge>
                          <Badge bg="danger ms-1">Django</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="warning ms-1" text="dark">HTML</Badge>
                          <Badge bg="warning ms-1" text="dark">CSS</Badge>
                          <Badge bg="warning ms-1" text="dark">Javascript</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="success ms-1" text="dark">PostgreSQL</Badge>
                          <Badge bg="success ms-1" text="dark">DRF(Django Rest Framwork)</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="secondary ms-1" text="dark">Maven</Badge>
                          <Badge bg="secondary ms-1" text="dark">GIT</Badge>
                          <Badge bg="secondary ms-1" text="dark">Selenium</Badge>
                          <Badge bg="secondary ms-1" text="dark">UnitTest</Badge>
                          <Badge bg="secondary ms-1" text="dark">Jenkins</Badge>
                          <Badge bg="secondary ms-1" text="dark">SonarQube</Badge>
                      </Col>
                  </Row>
              </Col>
          </Row>
        );
      }

    render() {
        return (
            
            <Row className="pb-5 project-item">
                <Col>
                <div className="mb-4">
                    <h2 className="project-title box-title text-capitalize mb-3">GDM Wrapper - Gaming Platfrom</h2>
                    <p> Developed a casino digital platform that hosts and facilitates various casino games for online gambling. 
                        The platforms is an online web application that allow users to access and play a wide range of casino games for game providers.
                        It supports, Slot Machines which are Digital versions of traditional slot machines with various themes and features and Table Games which are Online versions of classic table games such as blackjack, roulette, poker, baccarat, and craps.</p>
                </div>
                <h4 className="mb-2 fw-semibold">Overview</h4>
                <ul>
                    <li><em>Front-end:</em> Created the user interface and user experience for the platform, ensuring it is visually appealing, easy to navigate, and responsive across various devices.</li>
                    <li><em>Back-end:</em> Built server-side infrastructure, including databases, payment(play money) processing, and ensuring data security.</li>
                    <li><em>Game Integration:</em> Integrating various casino games into the platform, which may involve working with game developers or creating proprietary games.</li>
                    <li><em>Reality Check:</em> It helps players track their gaming sessions and prevents them from losing track of time or spending more money than they can afford. The reality check feature often involves a pop-up notification or message that appears at regular intervals during gameplay, reminding players to review their session details and make informed decisions about whether to continue playing.</li>
                    <li><em>Security:</em> Implemented robust security measures to protect user data, and the integrity of the games.</li>
                    <li><em>Mobile Compatibility:</em> Ensuring that the platform is accessible and functional on various mobile devices through responsive design or dedicated mobile applications.</li>
                </ul>
                    
                </Col>
                <Col>
                    <div className="py-5">
                        <Image src={gdmWrapperGames} alt="First slide" rounded fluid/>
                    </div>
                    <div className="mt-2">
                        <h4 className="mb-2 fw-semibold">Tech Stack</h4>
                        {this.techStack()}
                    </div>
                </Col>
            </Row>
          );
    }
}


class ProjectAwsIosAppSupport extends React.Component<any, any> {
    expand = false

    handleSelect(e) {
        e.preventDefault();
        console.log(e);
    }

    techStack() {
        return (
            <Row>
                <Col>
                    <Row> 
                        <Col className="pb-2">
                        <Badge bg="danger ms-1">Swift</Badge>
                        <Badge bg="danger ms-1">Python</Badge>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pb-2">
                            <Badge bg="info ms-1" text="dark">AWS S3</Badge>
                            <Badge bg="info ms-1" text="dark">Lambda</Badge>
                            <Badge bg="info ms-1" text="dark">Transfer Family</Badge>
                            <Badge bg="info ms-1" text="dark">IAM</Badge>
                            <Badge bg="info ms-1" text="dark">Rest Gateway</Badge>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pb-2">
                            <Badge bg="secondary ms-1" text="dark">GIT</Badge>
                            <Badge bg="secondary ms-1" text="dark">Jenkins</Badge>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
      }

    render() {
        return (
            
            <Row className="pb-5 project-item">
                <Col>
                <div className="mb-4">
                    <h2 className="project-title box-title text-capitalize mb-3">iOS Storage - AWS</h2>
                    <p>Maintained an iOS APP to update manifest which contains list of enlabled games for the game providers. 
                       The games are stored in AWS S3 as zip format and list of games are stored as CSV for each game providers. Developed AWS infrastructure to distribute the game contents using REST Gateway and Lambda.</p>
                </div>
                <h4 className="mb-2 fw-semibold">Overview</h4>
                <ul>
                    <li><em>Swift:</em> Updating manifesting in an iOS app and deployed them in the server with proper release management.</li>
                    <li><em>AWS S3:</em> Working with game developers to bundle the game contents and import them into AWS S3 using Jenkins job.</li>
                    <li><em>AWS Lambda:</em> Used to trigger various script such as notify the game providers upon uploading new games and send an email(AWS SES)report data scientist about games. </li>
                    <li><em>Security:</em> Implementing robust security measures to protect user data, and the integrity of the games.</li>
                </ul>
                    
                </Col>
                <Col>
                    <div className="py-5">
                        <Image src={iosAws} alt="First slide" rounded fluid/>
                    </div>
                    <div className="mt-2">
                        <h4 className="mb-2 fw-semibold">Tech Stack</h4>
                        {this.techStack()}
                    </div>
                </Col>
            </Row>
          );
    }
}

class ProjectGPS extends React.Component<any, any> {
    expand = false

    handleSelect(e) {
        e.preventDefault();
        console.log(e);
    }

    techStack() {
        return (
          <Row>
              <Col>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="warning ms-1" text="dark">HTML</Badge>
                          <Badge bg="warning ms-1" text="dark">CSS</Badge>
                          <Badge bg="warning ms-1" text="dark">React JS</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="success ms-1" text="dark">REST</Badge>
                      </Col>
                  </Row>
                  <Row>
                        <Col className="pb-2">
                            <Badge bg="info ms-1" text="dark">AWS S3</Badge>
                            <Badge bg="info ms-1" text="dark">Lambda</Badge>
                            <Badge bg="info ms-1" text="dark">Transfer Family</Badge>
                            <Badge bg="info ms-1" text="dark">Cognito</Badge>
                            <Badge bg="info ms-1" text="dark">API Gateway</Badge>
                            <Badge bg="info ms-1" text="dark">Amplify</Badge>
                            <Badge bg="info ms-1" text="dark">CodeCommit</Badge>
                        </Col>
                    </Row>
              </Col>
          </Row>
        );
      }

    render() {
        return (
            
            <Row className="pb-5 project-item">
                <Col>
                <div className="mb-4">
                    <h2 className="project-title box-title text-capitalize mb-3">GPS - Game Package Services</h2>
                    <p>Digital platform facilitates the game selections of various casino games for the casino game providers. 
                        The platforms is an online web application that allow users(game providers) to access, choose and export a wide range of casino games.
                        It helps to identify the size and type of game. </p>
                </div>
                <h4 className="mb-2 fw-semibold">Overview</h4>
                <ul>
                    <li><em>Front-end:</em> Created React based user interface to listing out the game list and enable in place filtering and dynamic size calculation for the selected games.</li>
                    <li><em>Back-end:</em> Amazon S3: Object storage service for storing and retrieving data, such as images, videos, and other static assets. AWS Lambda: Serverless compute service for running code without the need to provision or manage servers.
                    Amazon API Gateway: Service for creating, publishing, and managing APIs.</li>
                    <li><em>Integration:</em> This application typically interact with the backend using RESTful APIs. AWS - API Gateway being used to create and manage these APIs. AWS Lambda serverless functions being used to run backend logic without the need for a dedicated server. </li>
                    <li><em>Deployment:</em> Used AWS amplify and codecommit platform that simplifies the continuous deployment and hosting of web applications. </li>
                    <li><em>Security:</em> Implementing robust security measures to protect user data, and the integrity of the games. Using Amazon Cognito Service for managing user identities and authentication in a secure and scalable way.</li>
                    <li><em>Mobile Compatibility:</em> Ensuring that the platform is accessible and functional on various mobile devices through responsive design.</li>
                </ul>
                    
                </Col>
                <Col>
                    <div className="py-5">
                        <Image src={gps} alt="First slide" rounded fluid/>
                    </div>
                    <div className="mt-2">
                        <h4 className="mb-2 fw-semibold">Tech Stack</h4>
                        {this.techStack()}
                    </div>
                </Col>
            </Row>
          );
    }
}

class ProjectIGP extends React.Component<any, any> {
    expand = false

    handleSelect(e) {
        e.preventDefault();
        console.log(e);
    }

    techStack() {
        return (
          <Row>
              <Col>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="danger ms-1">PHP</Badge>
                          <Badge bg="danger ms-1">Symfony</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="warning ms-1" text="dark">HTML</Badge>
                          <Badge bg="warning ms-1" text="dark">CSS</Badge>
                          <Badge bg="warning ms-1" text="dark">Javascript</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="success ms-1" text="dark">MySQL</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="secondary ms-1" text="dark">GIT</Badge>
                      </Col>
                  </Row>
              </Col>
          </Row>
        );
      }

    render() {
        return (
            
            <Row className="pb-5 project-item">
                <Col>
                    <div className="mb-4">
                        <h2 className="project-title box-title text-capitalize mb-3">IGP - Internal Gaming Platform</h2>
                        <p>Casino digital platform that manages and facilitates various casino games for online gambling. 
                            The platforms is an online web application that allow users to access and configure a wide range of casino games for game providers.
                        </p>
                    </div>
                    <h4 className="mb-2 fw-semibold">Overview</h4>
                    <ul>
                        <li><em>Front-end:</em> Managed the user interface and user experience for the platform, ensuring it is visually appealing, easy to navigate, and responsive across various devices.</li>
                        <li><em>Back-end:</em> Managed the Symfony based admin panel, including databases, payment processing, and ensuring data security.</li>
                        <li><em>Security:</em> Implementing robust security measures to protect user data, financial transactions, and the integrity of the games.</li>
                    </ul>
                    <div className="mt-2">
                        <h4 className="mb-2 fw-semibold">Tech Stack</h4>
                        {this.techStack()}
                    </div>
                </Col>
                <Col>
                    <div className="py-5">
                        <Image src={gdmWrapperGames} alt="First slide" rounded fluid/>
                    </div>
                </Col>
            </Row>
          );
    }
}

export {
    ProjectGdmWrapper,
    ProjectAwsIosAppSupport,
    ProjectGPS,
    ProjectIGP
};
