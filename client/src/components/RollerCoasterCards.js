import { Card, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function RollerCoasterCard(props) {
  const [press, setPress] = useState(false);
  function showInfo() {
    setPress(!press);
  }

  return (
    <Card
      onClick={showInfo}
      image={props.image}
      header="Elliot Baker"
      meta="Friend"
      description={
        press
          ? "Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          : ""
      }
      extra="none"
    />
  );
}
