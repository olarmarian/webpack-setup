import { someString } from "./utils.ts";
import "./styles/main.css";
import "./styles/scss-main.scss";

const image = require("./assets/kiwi.svg");

const mapString = (string) => {
  return `in index -> ${string}`;
};

const string = someString();
const mappedString = mapString(string);

document.getElementById("label").innerHTML = mappedString;
document.getElementById("img").src = image;
