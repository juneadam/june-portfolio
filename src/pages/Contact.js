import Card from "../utils/Card";
import "./Contact.css"

function Contact() {
  return (
    <div className="Contact w-screen h-screen flex flex-auto justify-center items-center">
      <Card
        key="contactCard"
        image="june.jpg"
        title="June Balter"
        content="lorem ipsum tootie frutti"
      />
    </div>
  );
}

export default Contact;
