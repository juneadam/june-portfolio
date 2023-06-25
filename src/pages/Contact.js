import ContactCard from "../utils/ContactCard";
import "./Contact.css"

function Contact() {
  return (
    <div className="Contact w-screen h-screen text-xl flex flex-auto justify-center items-center">
      <ContactCard
        key="contactCard"
        image="june.jpg"
        title="June Balter"
        content="You can reach me below on LinkedIn, find my work on GitHub, or email me with any questions about availability for work and rates."
        github="https://github.com/juneadam"
        githubIcon="fa-brands fa-github"
        linkedin="https://linkedin.com/in/june-balter"
        linkedinIcon="fa-brands fa-linkedin"
        etc=" junedoeswork (@) gmail (.) com"
        etcLink="mailto:junedoeswork@gmail.com"
        etcIcon="fa-solid fa-envelope"
      />
    </div>
  );
}

export default Contact;
