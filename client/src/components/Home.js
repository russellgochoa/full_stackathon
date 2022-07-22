import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import RollerCoasterCard from "./RollerCoasterCards";
export default function Home() {
  return (
    <div>
      <Container>
        <Card.Group>
          <RollerCoasterCard image="https://www.tripsavvy.com/thmb/X-BoTPQjy5InfRt_r8wXS75E3ug=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FalconsFlightSixFlagsQiddiya-2376489093b44050bdd44090ec67ae83.jpg" />
          <RollerCoasterCard image="https://www.tripsavvy.com/thmb/ioiHuRYLId4wuMDkrnfIa-j_RSQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/KIngda-56a951853df78cf772a5cd83.jpg" />
          <RollerCoasterCard image="https://www.tripsavvy.com/thmb/MICVpTjynbLt8IvJFfRAC7cnLBM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Top-Thrill-Dragster-56a951933df78cf772a5cdd2.jpg" />
          <RollerCoasterCard image="https://www.tripsavvy.com/thmb/2zDljLwVAoiZAnAuuoJEY1CVldw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Ferrari-Vertical-Accelerator-Coaster-56c248e63df78c0b138f6a16.jpg" />
          <RollerCoasterCard image="https://www.tripsavvy.com/thmb/1Uwb-_WbAOygK54knMVHRAcU9-o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SupermanEscapeFromKrypton-56a952015f9b58b7d0fa494b.jpg" />
        </Card.Group>
      </Container>
    </div>
  );
}
