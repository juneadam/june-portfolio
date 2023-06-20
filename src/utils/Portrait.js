function Portrait(props) {
  return (
    <span className="Portrait h-screen overflow-hidden">
      <img className="object-cover" src={props.image} alt="portrait"></img>
    </span>
  );
}

export default Portrait;
