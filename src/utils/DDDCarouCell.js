import Card from "./Card";
import "./DDDCarouCell.css";

function useRangeValue(cellIndex, selectedIndex, arrayLength) {
  // this function should allow us to track th distance between the
  // front-facing cell (the one at selectedIndex) and the cell rendered
  // (cellIndex), which allows for dynamic shading to be applied to
  // cells facing in different directions, implying a light source.

  const cI = cellIndex; //the particular cell rendered, should match key attribute
  const sI = selectedIndex; //the index of the front-facing card, monitored in state
  let rangeValue = 99; //the value (+ or -) from 0 - arrayLength, tracking a particular face

  if (cI == sI) {
    rangeValue = 0; 
    //front-facing card is the current rendered card

  } else if (Math.abs(cI - sI) == arrayLength / 2) {
    rangeValue = arrayLength / 2; 
    //when there are an even number of cards,
    //this is the opposite card from the front-facing card

  } else if (sI < cI && Math.abs(cI - sI) < arrayLength / 2) {
    rangeValue = cI - sI; 
  // } else if (sI > cI && Math.abs(cI - sI) > arrayLength / 2) {
  //   rangeValue = cI - sI;
  } else if (sI > cI && Math.abs(cI - sI) < arrayLength / 2) {
    rangeValue = cI - sI;
  } else if (cI == sI + arrayLength) {
    rangeValue = 1;
  }

  return rangeValue;
}

function DDDCarouCell(props) {
  let rangeValue = useRangeValue(
    props.cellIndex,
    props.selectedIndex,
    props.arrayLength
  );

  return (
    <div
      id={props.cellIndex}
      className={`carouselCell rv${rangeValue} absolute max-w-[360px] my-14`}
    >
      <Card image={props.image} title={props.title} content={props.content} />
    </div>
  );
}

export default DDDCarouCell;
