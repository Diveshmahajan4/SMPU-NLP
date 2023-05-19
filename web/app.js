document.getElementById("button-name").addEventListener(
  "click",
  () => {
    eel.solve();
  },
  false
);

eel.expose(name2);
function name2() {
  const question = document.getElementById("exampleFormControlInput1").value;
  return question;
}
eel.expose(displayAnswer);
function displayAnswer(s) {
  document.getElementById("p1").innerHTML = s;
}
