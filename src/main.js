import { someString } from "./utils.ts";
import "./styles/main.css";
import "./styles/scss-main.scss";

const mapString = (string) => {
  return `in main -> ${string}`;
};

const string = someString()
const mappedString = mapString(string);

console.log(mappedString);
console.log('aa');