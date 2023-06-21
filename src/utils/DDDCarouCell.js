import Card from "./Card";
import "./DDDCarouselCell.css";

function DDDCarouCell(props) {

  return (
  <div className="carouselCell absolute max-w-[360px] my-14">
    <Card
      image={props.image}
      title={props.title}
      content={props.content}
    />
  </div>
  );
}

export default DDDCarouCell;
