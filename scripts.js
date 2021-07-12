mydate = "July 25, 2021";
const dateOfDay = new Date(mydate).getTime();

let i = setInterval(function () {
  const timeNow = new Date().getTime();
  const tillThen = dateOfDay - timeNow;

  const days = Math.floor(tillThen / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (tillThen % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((tillThen % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((tillThen % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `
    <h1> It's almost ${mydate}</h1>
    <span class="container"> Days ${days}</span>
    <span class="container"> Hours ${hours}</span>
    <span class="container"> Minutes ${minutes}</span>
    <span class="container"> Seconds ${seconds}</span>
    `;
}, 1000);
