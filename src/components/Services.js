import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ServiceCard from "./ServiceCard";
import srvbg from'../assets/img/srvbg.jpg';
import srvbg1 from'../assets/img/srvbg1.jpg';
import srvbg2 from'../assets/img/srvbg2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Services = () =>{
    
    const service01 =[
        {
            title: "Portfolio Creation",
            description: "I will create your portfolio of in react.",
            imgurl: srvbg,
        },
    ];
    const service02 =[
        {
            title: "Website Development",
            description: "I will create your website.",
            imgurl: srvbg1,
        },
    ];
    const service03 =[
        {
            title: "Frontend/Backend",
            description: "I will create your frontend or backend apps.",
            imgurl: srvbg2,
        },
    ];

    return(
        <section className="services" id="services">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Services</h2>
                            <Tab.Container id="services-tabs" defaultActiveKey="first">
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
                            
                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            service01.map((service,index)=>{
                                                return(
                                                    <ServiceCard
                                                        key={index}
                                                        {...service}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            service02.map((service,index)=>{
                                                return(
                                                    <ServiceCard
                                                        key={index}
                                                        {...service}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            service03.map((service,index)=>{
                                                return(
                                                    <ServiceCard
                                                        key={index}
                                                        {...service}
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