import kiwi from "./kiwi.png";
import "./kiwi-image.scss";

class KiwiImage {
  render() {
    const img = document.createElement("img");
    img.src = kiwi;
    img.alt = "Kiwi";
    img.classList.add("kiwi-image");
    document.body.appendChild(img)
  }
}

export default KiwiImage;