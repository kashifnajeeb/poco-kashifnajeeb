var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    coverImage: "https://m.media-amazon.com/images/I/416Hql52NCL.jpg",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    coverImage:
      "https://brianchristian.org/images/The-Most-Human-Human-Paperback-Front-Cover.jpg",
    alreadyRead: true,
  },
];

const heading = document.querySelector("h1");

heading.insertAdjacentHTML(
  "afterend",
  `<ul>
    ${books
      .map(
        (book) => `<li class=${book.alreadyRead ? "read" : ""}>
    <img src="${book.coverImage}">
    ${book.title}
    <br/>
    <span>${book.author}</span></li>`
      )
      .join("")}
</ul>`
);
