import "./Resume.css";

function Resume() {
  let width = "";
  let height = "";

  if (window.screen.width <= 900) {
    width = window.screen.width;
  } else {
    width = "900";
  }

  if (window.screen.availHeight <= 2000) {
    height = window.screen.availHeight;
  } else {
    height = "2000";
  }

  return (
    <div className="Resume overflow-hidden w-screen h-screen flex flex-row justify-evenly">
      <iframe
        title="embedded-resume"
        src="https://drive.google.com/file/d/1l_8JuHCPAjeU-oERekfrMshXVW5XLDsZ/preview"
        width={width}
        height={height}
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Resume;
