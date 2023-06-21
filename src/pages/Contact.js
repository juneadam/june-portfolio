import Card from "../utils/Card";
import "./Contact.css"

function Contact() {
  return (
    <div className="Contact w-screen h-screen flex flex-auto justify-center items-center">
      <Card
        image="/aiony-haust-3TLl_97HNJo-unsplash.jpg"
        title="June Balter"
        content="lorem ipsum tootie frutti"
      />
    </div>
  );
}

export default Contact;
