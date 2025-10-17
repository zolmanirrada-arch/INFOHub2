document.getElementById("orderForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const ref = document.getElementById("ref").value;
  const desc = document.getElementById("desc").value;

  const text = `📘 Тапсырыс:\nАты-жөні: ${name}\nПән: ${subject}\nНөмірі: ${ref}\nСипаттама: ${desc}`;
  const telegramUsername = "Irrada"; // өз username жаз
  const link = `https://t.me/${telegramUsername}?text=${encodeURIComponent(text)}`;
  window.open(link, "_blank");
  alert("Telegram ашылады. Тапсырысты жіберіңіз.");
});
