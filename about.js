const inpName = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const key= "Name";


document.getElementById("saveBtn").addEventListener("click", Login Submit);

function Login(){
const value = inpName.value;

if (key && value){
  localStorage.setItem(key, value);
  location.reload();
}

};

$(".txtb input").on("focus",function(){
  $(this).addClass("focus");
});

$(".txtb input").on("blur",function(){
  if($(this).val() == "")
  $(this).removeClass("focus");
});
