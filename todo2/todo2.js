let total = 0;
const list = [];
const transactionDate = new Date();


function deposit() {
  const inputValue = document.getElementById("tutar").value;
  total = total + +inputValue;
  const transaction = {
    value: inputValue,
    type: " " + "$ Yatırıldı" + " " + transactionDate.toLocaleString(),
  };
  list.unshift(transaction);
  operators();
}

function withdraw() {
  const inputValue = document.getElementById("tutar").value;
  total = total - +inputValue;
  const transactiond = {
    value: inputValue,
    type: " " + "$ Çekildi" + " " + transactionDate.toLocaleString(),
  };
  list.unshift(transactiond);
  operators();
}

function operators() {
  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = "";
  list.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = item.value + item.type;
    listItem.style.color =
      item.type === " " + "$ Çekildi" + " " + transactionDate.toLocaleString()
        ? "red"
        : "green";
    transactionList.appendChild(listItem);
  });

  document.getElementById("wallet").innerHTML =
    "Toplam Bakiyeniz  :  " + " " + total + "$";

  tutar.value = "";
}

function category() {
  let x = document.getElementById("myDIV");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
