const noCont = document.querySelector(".count");
const decRec = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const incRec = document.querySelector(".increase");
let count = 0;

incRec.addEventListener("click", function () { 
  count = count + 1;
  console.log(count);
  noCont.innerHTML = `${count}`;
})

decRec.addEventListener("click", function () {
  if (count > 0) {
   count = count - 1;
   console.log(count);
   noCont.innerHTML = `${count}`; 
  } else {
    alert("Counter cannot go below zero.");
  }
  
  
});

reset.addEventListener("click", function () {
  count = 0;
  noCont.innerHTML = `${count}`;
});
  
