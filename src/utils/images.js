import logo from "assets/img/logo.png";
import defaultBg from "assets/img/defaultBg1.jpg";

const images = {
  logo,
  defaultBg
};
export default function(imageName) {
  return images[imageName];
}
