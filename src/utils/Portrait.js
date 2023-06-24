import "./Portrait.css"

function Portrait(props) {
  return (
    <span className="Portrait shadow-ani max-h-[75%] max-w-[75%] rounded-3xl overflow-hidden grid place-content-center justify-self-center transition-all duration-300 shadow-lg">
      <img className="image object-cover" src={props.image} alt="portrait"></img>
    </span>
  );
}

export default Portrait;
