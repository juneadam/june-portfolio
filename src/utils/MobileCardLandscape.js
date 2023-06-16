function MobileCardLandscape(props) {
    
    return (

    <div className="MobileCardLandscape card-wrapper grid grid-rows-3 grid-cols-2 max-w-[50%] max-h-[50%] rounded-md border border-black">
      <div className="card-image-div row-span-3 col-span-1 overflow-hidden rounded-l-md flex place-content-center items-center">
        <img className="object-cover" src={props.image} alt="card-portrait"></img>
      </div>
      <div className="card-content row-span-3 px-6 h-fit">
        <h1 className="text-2xl text-right font-semibold py-4">
          {props.title}
        </h1>
        <p className="py-1 text-xl text-right">{props.content}</p>
        <div className="card-links px-6 pb-3 h-1/4 flex flex-wrap flex-col self-stretch justify-around items-end rounded-b-md">
          <button>a</button>
          <button>b</button>
          <button>c</button>
        </div>
      </div>
    </div>
  );
}

export default MobileCardLandscape;

// w-2/3 min-w-[250px] max-w-max h-2/5