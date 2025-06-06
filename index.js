let fahrenheit = prompt("What is the temperature");

var x = +fahrenheit;

const Celsius = ((x - 32) * 5) / 9;

const convertToCelsius = () => {
  let str = "";
  if (Celsius < 0) {
    str = "very cold";
  } else if (Celsius < 20) {
    str = "cold";
  } else if (Celsius < 30) {
    str = "warm";
  } else if (Celsius < 40) {
    str = "hot";
  } else {
    str = "very hot";
  }
  return str;
};

console.log(Fahrenheit);

console.log(Celsius);

console.log(convertToCelsius());
