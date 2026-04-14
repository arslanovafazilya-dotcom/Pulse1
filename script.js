let votes = JSON.parse(localStorage.getItem("votes")) || {
  joy: 0,
  calm: 0,
  sad: 0,
  anger: 0
};

function vote(type) {
  votes[type]++;

  let total =
    votes.joy + votes.calm + votes.sad + votes.anger;

  let joy = Math.round((votes.joy / total) * 100) || 0;
  let calm = Math.round((votes.calm / total) * 100) || 0;
  let sad = Math.round((votes.sad / total) * 100) || 0;
  let anger = Math.round((votes.anger / total) * 100) || 0;

  document.getElementById("joyBar").style.width = joy + "%";
  document.getElementById("calmBar").style.width = calm + "%";
  document.getElementById("sadBar").style.width = sad + "%";
  document.getElementById("angerBar").style.width = anger + "%";

  document.getElementById("joyText").innerText = joy + "%";
  document.getElementById("calmText").innerText = calm + "%";
  document.getElementById("sadText").innerText = sad + "%";
  document.getElementById("angerText").innerText = anger + "%";

  localStorage.setItem("votes", JSON.stringify(votes));
}

// загрузка при старте
vote("joy");
votes.joy--;
// день недели
const days = ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"];
document.getElementById("day").innerText =
  days[new Date().getDay()];
