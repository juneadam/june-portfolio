function TechBtn(props) {
  return (
    <div className="TechBtn rounded-full h-[2em] px-2 m-1 grid place-content-center text-slate-950 bg-teal-400 hover:bg-indigo-700 hover:outline-dashed hover:outline-pink-400 hover:text-slate-300 transition-all duration-200">
      {props.language}
    </div>
  );
}

export default TechBtn;
