import "./Portrait.css"

function Portrait(props) {
  return (
    <span className="Portrait max-h-[75%] max-w-[75%] rounded-3xl overflow-hidden grid place-content-center justify-self-center transition-all duration-300">
      <img className="image object-cover filter-[frosted]" src={props.image} alt="portrait"></img>
    </span>
  );
}

export default Portrait;
