const snowflake = document.getElementById("snowflakes");
const christmassifierBtn = document.getElementById("christmassifierBtn");

const audio = new Audio("holiday.mp3");

christmassifierBtn.addEventListener("click", christmassifyName);

function christmassifyName() {
  if (christmassifierBtn.textContent === "Let it SNOW!") {
    console.log("BUTTON PRESSED");
    christmassifierBtn.textContent = "STOP snowing!";
    snowflake.style.display = "block";
    audio.play();
    audio.volume = 0.4;
  } else {
    christmassifierBtn.textContent = "Let it SNOW!";
    snowflake.style.display = "none";
    audio.pause();
  }
}
