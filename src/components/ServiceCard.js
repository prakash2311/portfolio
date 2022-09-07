import Col from "react-bootstrap/Col"

export const ServiceCard = ({title,description,imgurl}) =>{

    return(
        <Col size={100}>
            <div className="srv-imgbx">
                <img src={imgurl} />
                <div className="srv-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
export default ServiceCard;