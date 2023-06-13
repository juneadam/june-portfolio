function TechBtn(props) {
  return (
    <span className="TechBtn rounded-full px-2 py-1 bg-teal-400 hover:bg-indigo-700 hover:outline-dashed hover:outline-pink-400">
      {props.language}
    </span>
  );
}

export default TechBtn;
