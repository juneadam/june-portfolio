import Card from "./Card";
import "./DDDCarouselCell.css";

function DDDCarouselCell(props) {
  <div className="carousel_cell absolute w-[270px] my-10 mx-20">
    <Card
      image={props.image}
      title={props.title}
      content={props.content}
    />
  </div>;
}

export default DDDCarouselCell;
