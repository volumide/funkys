const app = document.getElementById("app");
let value = "0";
const Button = (v, id) => {
	const button = document.createElement("button");
	button.textContent = v;
	button.id = id;
	button.addEventListener("click", (e) => {
		e.preventDefault();
		if (parseInt(v) || v == "0") {
			value += v;
			displayObj.textContent = parseInt(value);
		}

		if (v === "AC") {
			value = "0";
			displayObj.textContent = value;
		}
	});
	return button;
};

const displayObj = document.createElement("div");
displayObj.className = "display";
displayObj.textContent = value;

const divElement = document.createElement("div");
divElement.className = "container";

for (let i = 0; i <= 9; i++) divElement.append(Button(i, `button${i}`));
divElement.append(Button("AC", "clear"));
app.append(displayObj);
app.append(divElement);
