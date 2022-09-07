import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgurl , url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={url} target="_blank">
      <div className="proj-imgbx">

        <img src={imgurl} />
        
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
export default ProjectCard;