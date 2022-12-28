const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://static.wbstatic.net/j/spa/modules/catalog/queryHelper.min.js?031ec9f64bf72742"
  );
  request.setRequestHeader("COntent-type", "application/json");
  request.send();
  request.addEventListener("load", () => {
    console.log(request.response);
    const data = JSON.parse(request.response);
    console.log(data);
    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".age").innerHTML = data.age;
  });
});
