// var emoji = require("./emoji.js");
import {format} from "./emoji.js";

var container = document.getElementById("app");
container.innerText = format(container.innerText);

