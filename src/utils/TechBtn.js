function TechBtn(props) {
  return (
    <div className="TechBtn rounded-full px-2 pt-1.5 m-1 flex text-justify text-slate-950 bg-teal-400 hover:bg-indigo-700 hover:outline-dashed hover:outline-pink-400 hover:text-slate-300 transition-all duration-200">
      {props.language}
    </div>
  );
}

export default TechBtn;
