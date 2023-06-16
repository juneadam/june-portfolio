import MobileCardLandscape from "../utils/MobileCardLandscape";
import MobileCardPortrait from "../utils/MobileCardPortrait";
import useScreenSize from "../utils/useScreenSize";

function MobileContact() {
  const { screenWidth, screenHeight } = useScreenSize();

  let cardVar = "";
  (screenWidth < 2 * screenHeight)
    ? (cardVar = (
        <MobileCardPortrait
          image="/aiony-haust-3TLl_97HNJo-unsplash.jpg"
          title="June Balter"
          content="lorem ipsum tootie frutti"
        />
      ))
    : (cardVar = (
        <MobileCardLandscape
          image="/aiony-haust-3TLl_97HNJo-unsplash.jpg"
          title="June Balter"
          content="lorem ipsum tootie frutti"
        />
      ));

  return <div className="flex flex-row justify-center content-center">{cardVar}</div>;
}

export default MobileContact;
