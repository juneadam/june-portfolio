function MobileResume() {
  let width = "";
  let height = "";

  if (window.screen.width <= 1000) {
    width = window.screen.width;
  } else {
    width = "1000";
  }

  if (window.screen.availHeight <= 2000) {
    height = window.screen.availHeight;
  } else {
    height = "2000";
  }

  return (
    <div className="ResumeEmbed w-full h-screen flex flex-row justify-evenly">
      <iframe
        title="embedded-resume"
        src="https://drive.google.com/file/d/1ar8juYpGL5qp5n29QzuutDF2DYo78fX5/preview"
        width={width}
        height={height}
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default MobileResume;
