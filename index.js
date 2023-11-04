const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function () {
  const response = JSON.parse(xhr.responseText);
  console.log(response);
  const usdContries = response.filter((cty) => {
    const { currencies = {} } = cty;
    // refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    return Object.keys(currencies).includes("USD");
  });
  for (let cty of usdContries) {
    console.log(cty.name.common);
  }

  usdContries.forEach((cty) => {
    console.log(cty.name.common, cty.capital[0], cty.flag);
  });
};
