const elements = {
  heading: document.querySelector("h1"),
  para: document.querySelector("p"),
  link: document.querySelector("a"),
};

const appendNumbers = (element, limit) => {
  let content = "";
  for (let i = 0; i <= limit; i++) {
    content += i;
  }
  element.textContent += content;
};

appendNumbers(elements.heading, 2);
appendNumbers(elements.para, 4);
appendNumbers(elements.link, 7);
