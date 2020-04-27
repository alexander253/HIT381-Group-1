const outItem = document.getElementById("item");
outItem.innerHTML= localStorage.getItem("RestItem");


const restName = document.getElementById("itemName");
const key = "RestItem";

document.getElementById("itemName").addEventListener("click", addItem);

function addItem(){
const value = restName.innerHTML;

if (key && value){
  localStorage.setItem(key, value);
  location.reload();
}

};
