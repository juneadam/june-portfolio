function Card(props) {
  return (
    <div className="card-wrapper grid-cols-1 grid-rows-3 w-1/3 min-w-[250px] max-w-max h-2/3 rounded-md border border-black">
      <div className="card-image-div h-1/2 min-h-[250px] overflow-hidden rounded-t-md row-span-1 flex items-center">
        <img
          className="object-cover"
          src={props.image}
          alt="card-portrait"
        ></img>
      </div>
      <div className="card-content px-6 h-1/4 bg-orange-200">
        <h1 className="text-2xl text-right font-semibold py-4">
          {props.title}
        </h1>
        <p className="py-1 text-xl text-right">{props.content}</p>
      </div>
      <div className="card-links px-6 pb-3 h-1/4 bg-orange-200 flex flex-wrap flex-col justify-around items-end rounded-b-md">
        <button>a</button>
        <button>b</button>
        <button>c</button>
      </div>
    </div>
  );
}

export default Card;
