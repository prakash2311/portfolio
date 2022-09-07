import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import resume from '../assets/img/Prakash_Devta.pdf'


export const Footer = () => {
        return (
          <footer className="footer">
            <Container>
              <Row className="align-items-center">
                <Col>
                  <a href="mailto:devtaprakash@gmail.com" target="_blank"><h6>Contact at: devtaprakash@gmail.com</h6></a>
                  <a href={resume} download><h6>Resume: Prakash Devta</h6></a> 
                </Col>
                  <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                     <a href="https://www.linkedin.com/in/prakash-devta-18498a95/" target="_blank"><img src={linkedin} alt="" /></a>
                     <a href="https://github.com/prakash2311" target="_blank"><img src={github} alt="" /></a>
                    </div>
                  </Col>
              </Row>
            </Container>
          </footer>
        )
      }