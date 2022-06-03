import "./styles/index.scss";
import "../src/module/main";
import asss from "../src/module/main";

const userStack = {
   language: 'JavaScript',
   framework: 'Angular'
};

const user = {
   name: 'Vitalij',
   age: '37',
   ...userStack
};

console.log(user);
console.log("hello!!");

asss();
