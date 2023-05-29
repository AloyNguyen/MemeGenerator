
let memeForm = document.querySelector("form");
let img = document.getElementById("imgFileInput");
const button = document.querySelector("button");

memeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // previewFile();
  const meme = document.createElement("div");
  const textTop = document.createElement("div");
  const textBottom = document.createElement("div");
  const img = document.createElement("img");

  img.src = document.getElementById("imgURL").value;
 
  // let imgFile= document.getElementById("imgFileInput").value;

  
  textTop.classList.add("textTop");
  textTop.innerHTML = document.getElementById("topTextInput").value;

  textBottom.classList.add("textBottom");
  textBottom.innerHTML = document.getElementById("bottomTextInput").value;

  meme.classList.add("meme");
  meme.append(textTop);
  meme.append(textBottom);
  meme.append(img);
  let memeLocation = document.getElementById("location");
  memeLocation.append(meme);
  memeForm.reset();

});

// function previewFile() {
//   var preview = document.querySelector('img');
//   var file    = document.querySelector('input[type=file]').files[0];
//   var reader  = new FileReader();

//   reader.onloadend = function () {
//     preview.src = reader.result;
//   }

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     preview.src = "";
//   }
// };