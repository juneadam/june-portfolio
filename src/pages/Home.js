import Accordion from "../utils/Accordion";

function Home(props) {
  return (
    <div className="content">
      <div>Hello World</div>
      <div className="technologies-hole">
        {props.technologies.length > 0 ? (
          <Accordion accordionData={["Technologies", props.techsFound]} />
        ) : (
          <p>No technologies found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
