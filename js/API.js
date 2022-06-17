
const card = document.getElementById("card");

const getInfo = async () => {
  const api = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );


  
  const size = api.length;
  for (let i = 0; i < size; i++) {
    const news = document.createElement("div");
    news.classList.add("box");
    card.appendChild(news);
    const title = document.createElement("h1");
    const information = document.createElement("p");
    const index = document.createElement("div");
    index.classList.add('index');

    news.appendChild(title).innerHTML = api[i].title;
    news.appendChild(information).innerHTML = api[i].body;
    news.appendChild(index).innerHTML = api[i].id;

  }
};

getInfo();
