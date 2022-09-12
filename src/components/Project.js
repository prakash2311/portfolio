import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ProjectCard from "./ProjectCard";
import pro01 from "../assets/img/pro01.png";
import pro02 from "../assets/img/iph.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () =>{
    
    const projects01 =[
        {
            title: "my personal portfolio",
            description: "my personal potfolio in react.",
            imgurl: pro01,
            url: "https://prakashdevta.herokuapp.com/",
        },
        {
            title: "IPH",
            description: "IPH is a real-Estate app created in react.",
            imgurl: pro02,
            url: "https://iph-real-estate.netlify.app/",
        },
    ];
    const projects02 =[
        {
            title: "IPH",
            description: "IPH is a real-Estate app created in react.",
            imgurl: pro02,
            url: "https://iph-real-estate.netlify.app/",
        }
    ];
    const projects03 =[
        {
            title: "my personal portfolio",
            description: "my personal potfolio in react.",
            imgurl: pro01,
            url: "https://prakashdevta.herokuapp.com/",

        },
        {
            title: "IPH",
            description: "IPH is a real-Estate app created in react.",
            imgurl: pro02,
            url: "https://iph-real-estate.netlify.app/",
        }
    ];

    return(
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Projects</h2>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link className="left" eventKey="first">Portfolio Creation</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="middle" eventKey="second">Website Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="right" eventKey="third">Frontend / Backend</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            
                            <Tab.Content id="projectslideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects01.map((project,index)=>{
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects02.map((project,index)=>{
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects03.map((project,index)=>{
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}