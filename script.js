document.querySelector(".btn").addEventListener("click", function () {

  let input1 = document.querySelector(".input1").value;
  let input2 = document.querySelector(".input2").value;

  let title = document.querySelector(".title");
  let desc = document.querySelector(".desc");
  let img = document.querySelector(".img");

  if (input1 === "" || input2 === "") {
    title.innerHTML = "Answer both questions dummy";
    desc.innerHTML = "";
    img.src = "ConfusdAdele.png";
  }

  else if (input1 === "Yes" && input2 === "Money") {
    title.innerHTML = "Grammy Winning Adele 🏆";
    desc.innerHTML = "You want success, luxury, and awards. Icon behavior.";
    img.src = "GrammyAdele.jpg";
  }

  else if (input1 === "Yes" && input2 === "Love") {
    title.innerHTML = "Fat Adele 😭💗";
    desc.innerHTML = "You love food, love, and comfort. Cozy BIG energy.";
    img.src = "FatAdele.jpg";
  }

  else if (input1 === "No" && input2 === "Money") {
    title.innerHTML = "Hello Adele 🎤";
    desc.innerHTML = "Dramatic, distant, and legendary. You’ll disappear then return with a hit.";
    img.src = "HelloAdele.jpg";
  }

  else if (input1 === "No" && input2 === "Love") {
    title.innerHTML = "In Love Adele 🥰";
    desc.innerHTML = "You want romance, softness, and real love.";
    img.src = "LoveAdele.jpg";
  }

  else {
    title.innerHTML = "Follow directions";
    desc.innerHTML = "Type: Yes or No and Money or Love (exact spelling).";
    img.src = "ConfusdAdele.jpg";
  }

});