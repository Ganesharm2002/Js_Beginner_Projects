document.addEventListener("DOMContentLoaded", () => {
  const changeText = () => {
    let randomText = [
      "Web Developer",
      "Youtuber",
      "Freelancer",
      "Instructor",
      "Front-end Developer",
      "Ethical Hacker",
      "Web Designer",
    ];
    let profession = document.querySelector("#change-text");

    randIndex = Math.floor(Math.random() * randomText.length);
    profession.innerText = randomText[randIndex];
  };
  changeText();
  setInterval(changeText, 3000);
});
