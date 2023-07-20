const COUNT_LIMIT = 12;
const r = 200;

function start() {
  const hourHand = document.querySelector("#hour");
  const minuteHand = document.querySelector("#minute");
  const secondHand = document.querySelector("#second");

  hourHand.style.width = `8px`;
  hourHand.style.height = `${2 * r * 0.6}px`;

  minuteHand.style.width = `4px`;
  minuteHand.style.height = `${2 * r * 0.75}px`;

  secondHand.style.width = `2px`;
  secondHand.style.height = `${2 * r * 0.8}px`;

  setInterval(() => {
    const time = new Date();
    let hour = time.getHours();
    if (hour > COUNT_LIMIT) {
      hour -= COUNT_LIMIT;
    }
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const millisecond = time.getMilliseconds();

    hourHand.style.transform = `translate(-50%, -50%) rotate(${
      hour * (360 / COUNT_LIMIT)
    }deg)`;
    minuteHand.style.transform = `translate(-50%, -50%) rotate(${
      minute * 6
    }deg)`;
    secondHand.style.transform = `translate(-50%, -50%) rotate(${
      second * 6 + millisecond * 0.006
    }deg)`;
  }, 10);
}

const setNumbers = () => {
  const clock = document.querySelector("#clock");

  clock.style.width = `${r * 2}px`;
  clock.style.height = `${r * 2}px`;

  const numberRadius = r * 0.85;

  const numbers = document.createElement("div");
  clock.appendChild(numbers);
  numbers.style.width = `${numberRadius * 2}px`;
  numbers.style.height = `${numberRadius * 2}px`;
  numbers.setAttribute("id", "numbers");

  for (let i = 0; i < COUNT_LIMIT; i++) {
    const angle = 270 + (i + 1) * (360 / COUNT_LIMIT);
    const x = numberRadius + numberRadius * Math.cos((angle * Math.PI) / 180);
    const y = numberRadius + numberRadius * Math.sin((angle * Math.PI) / 180);

    const point = document.createElement("span");
    point.style.position = "absolute";
    point.style.left = `${x}px`;
    point.style.top = `${y}px`;

    point.innerText = i + 1;

    numbers.appendChild(point);
  }
};

setNumbers();

start();
