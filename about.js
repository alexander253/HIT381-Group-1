const inpName = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const key= "Name";


document.getElementById("saveBtn").addEventListener("click", save);

function save(){
const value = inpName.value;

if (key && value){
  localStorage.setItem(key, value);
  location.reload();
}

};
