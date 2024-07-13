let counter = document.querySelector("#counter");
let pauseButton = document.querySelector("#pause");
let isPaused = false;
let interval;

let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let heartButton = document.querySelector("#heart");
let likesList = document.querySelector(".likes");
let likes = {};
let commentInput = document.querySelector("#comment-input");
let commentForm = document.querySelector("#comment-form");
let commentList = document.querySelector("#list");
let submitButton = document.querySelector("#submit");
function startTheTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      counter.innerText = parseInt(counter.innerText) + 1;
    }
  }, 1000);

  pauseButton.addEventListener("click", () => {
    isPaused = !isPaused;
    if (isPaused) {
      pauseButton.innerText = "resume";
      minusButton.disabled = true;
      plusButton.disabled = true;
      heartButton.disabled = true;
      submitButton.disabled = true;
    } else {
      pauseButton.innerText = "pause";
      minusButton.disabled = false;
      plusButton.disabled = false;
      heartButton.disabled = false;
      submitButton.disabled = false;
    }
  });
  plusButton.addEventListener("click", () => {
    if (!isPaused) {
      counter.innerText = parseInt(counter.innerText) + 1;
    }
  });
  minusButton.addEventListener("click", () => {
    if (!isPaused) {
      counter.innerText = parseInt(counter.innerText) - 1;
    }
  });
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let comment = commentInput.value;
    let paragraph = document.createElement("p");
    paragraph.innerText = comment;
    commentList.appendChild(paragraph);
    commentForm.reset();
  });
}
startTheTimer();
