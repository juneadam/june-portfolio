import "./Portrait.css"

function Portrait(props) {
  return (
    <span className="Portrait max-h-[75%] max-w-[75%] rounded-lg overflow-hidden grid place-content-center justify-self-center">
      <img className="object-cover" src={props.image} alt="portrait"></img>
    </span>
  );
}

export default Portrait;
