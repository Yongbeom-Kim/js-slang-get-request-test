import { httpGet } from "./module1";
import { httpGet as httpGet2 } from "./module2";

console.log(httpGet("https://source-academy.github.io/modules/modules.json"))
httpGet2("https://source-academy.github.io/modules/modules.json").then(console.log)