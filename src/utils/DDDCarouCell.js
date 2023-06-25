
import Card from "./Card";
import "./DDDCarouCell.css";

function useRangeValue(cellIndex, selectedIndex, arrayLength) {
  // this function should allow us to track the distance between the
  // front-facing cell (the one at selectedIndex) and the cell rendered
  // (cellIndex), which allows for dynamic shading to be applied to
  // cells facing in different directions, implying a light source.

  let cI = cellIndex; //the particular cell rendered, should match key attribute
  if (cI >= arrayLength) {
    cI = cI - arrayLength;
  } else if (cI < 0) {
    cI = cI + arrayLength;
  }

  let faceIndex = selectedIndex; //the index of the front-facing card, monitored in state
  if (faceIndex >= arrayLength) {
    faceIndex = faceIndex - arrayLength;
  } else if (faceIndex < 0) {
    faceIndex = faceIndex + arrayLength;
  }
  let rangeValue = 99; //the value (+ or -) from 0 - arrayLength, tracking a particular face

  if (cI === faceIndex) {
    rangeValue = 0;
    //front-facing card is the current rendered card
  } else if (cI === faceIndex + arrayLength - 1) {
    rangeValue = -1;
  } else if (faceIndex === cI + arrayLength - 1) {
    rangeValue = 1;
  } else if (Math.abs(cI - faceIndex) === arrayLength / 2) {
    rangeValue = arrayLength / 2;
    //when there are an even number of cards,
    //this is the opposite card from the front-facing card
  } else if (faceIndex < cI && Math.abs(cI - faceIndex) < arrayLength / 2) {
    rangeValue = cI - faceIndex;
  } else if (faceIndex < cI && Math.abs(cI - faceIndex) >= arrayLength / 2) {
    rangeValue = cI - faceIndex - arrayLength;
  } else if (faceIndex > cI && Math.abs(cI - faceIndex) < arrayLength / 2) {
    rangeValue = cI - faceIndex;
  } else if (faceIndex > cI && Math.abs(cI - faceIndex) >= arrayLength / 2) {
    rangeValue = cI - faceIndex + arrayLength;
  }

  return { rangeValue, cI };
}

function DDDCarouCell(props) {
  let { rangeValue, cI } = useRangeValue(
    props.cellIndex,
    props.selectedIndex,
    props.arrayLength
  );

  return (
    <div
      id={props.cellIndex}
      className={`carouselCell cI${cI} rv${rangeValue} absolute my-14`}
    >
      <Card
        key={props.title}
        image={props.image}
        title={props.title}
        content={props.content}
        github={props.github}
        githubIcon={props.githubIcon}
        deploy={props.deploy}
        deployIcon={props.deployIcon}
        demo={props.demo}
        demoIcon={props.demoIcon}
        etc={props.etc}
        etcLink={props.etcLink}
        etcIcon={props.etcIcon}
      />
    </div>
  );
}

export default DDDCarouCell;
