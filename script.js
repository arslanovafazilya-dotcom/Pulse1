// 🔥 ВСТАВЬ СВОЙ FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "ТВОЙ_KEY",
  authDomain: "ТВОЙ_DOMAIN",
  databaseURL: "ТВОЙ_URL",
  projectId: "ТВОЙ_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const ref = db.ref("votes");

// голосование
function vote(type) {
  ref.child(type).transaction(value => (value || 0) + 1);
}

// обновление в реальном времени
ref.on("value", snapshot => {
  const data = snapshot.val() || { joy:0, calm:0, sad:0, anger:0 };

  const total = data.joy + data.calm + data.sad + data.anger;

  const joyP = total ? (data.joy / total) * 100 : 0;
  const calmP = total ? (data.calm / total) * 100 : 0;
  const sadP = total ? (data.sad / total) * 100 : 0;
  const angerP = total ? (data.anger / total) * 100 : 0;

  document.getElementById("joyBar").style.height = joyP + "%";
  document.getElementById("calmBar").style.height = calmP + "%";
  document.getElementById("sadBar").style.height = sadP + "%";
  document.getElementById("angerBar").style.height = angerP + "%";

  document.getElementById("stats").innerHTML = `
    ${joyP.toFixed(0)}% Радость |
    ${calmP.toFixed(0)}% Спокойствие |
    ${sadP.toFixed(0)}% Грусть |
    ${angerP.toFixed(0)}% Гнев
  `;
});

// день недели
const days = ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"];
document.getElementById("day").innerText =
  days[new Date().getDay()];
