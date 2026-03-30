const result = document.getElementById("result");
const form = document.getElementById("counter-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  startCounter();
});

function startCounter() {
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const step = document.getElementById("step");

  if (step.value <= 0 && start.value.length > 0 && end.value.length > 0) {
    step.value = 1;
  }

  detectValueError(start);
  detectValueError(end);

  if (start.value.length === 0 || end.value.length === 0) {
    result.textContent = "Preencha os campos para contar!";
    return;
  }

  count(start.value, end.value, step.value);
}

function count(start, end, step) {
  const startValue = Number(start);
  const endValue = Number(end);
  const stepValue = Number(step) || 1;
  const numbers = [];

  if (startValue <= endValue) {
    for (let i = startValue; i <= endValue; i += stepValue) {
      numbers.push(i);
    }
  } else {
    for (let i = startValue; i >= endValue; i -= stepValue) {
      numbers.push(i);
    }
  }

  result.textContent = numbers.join(", ") + ".";
}

function detectValueError(elem) {
  if (elem.value.length === 0) {
    elem.classList.add("error");
  } else {
    elem.classList.remove("error");
  }
}
