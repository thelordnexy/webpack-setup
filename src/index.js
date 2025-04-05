import modular from "./module";

function saySomething(something, fn) {
  console.log(fn(something));
}

saySomething("Mates", modular);
