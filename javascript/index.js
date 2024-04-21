function displayJoke(response) {
  let replySection = document.querySelector("#joke");

  replySection.innerHTML = "Generating joke... prepare to laugh!";

  setTimeout(() => {
    new Typewriter("#joke", {
      strings: response.data.answer,
      autoStart: true,
      cursor: null,
      delay: 40,
    });
  }, 4000);

  let containerElement = document.querySelector("#container");
  containerElement.classList.add("container");
}

function getJoke() {
  let apiKey = "2b4a0533t1055afa3fbo41efac5059ad";
  let context =
    "You are a funny AI Assistant who likes telling jokes. Please provide a different joke each time. Please provide the joke in HTML format. Example: <p>this is your answer</p>. The question and the answer must be in different paragraphs.";
  let prompt =
    "Please tell a short and unique joke about anything in the world. Please provide a different joke each time you are asked. Please include emojis at the end which are relevant to the joke.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayJoke);
}

let buttonElement = document.querySelector("#button");
buttonElement.addEventListener("click", getJoke);
