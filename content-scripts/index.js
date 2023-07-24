const elementsOvered = [];

document.addEventListener("mouseover", (e) => {
  if (elementsOvered.length > 0) {
    elementsOvered[0].style.border = "none";
    elementsOvered.shift();
  }
  const element = e.target;
  element.style.border = "1px solid green";
  elementsOvered.push(element);

  element.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
