const text = document.getElementById("premier");
const button = document.getElementById("log-in")

const loader = () => {
setTimeout(() => {
    text.textContent = " Welcome on E-Kaly !" ;
   text.style.animation = " apparition 3s 1s ease-in-out " ; 
}, 0);
setTimeout(() => {
    text.textContent = "Order your food safely ";
    text.style.animation = "apparition 4s 4s ease-in-out";
    text.style.transform = "translateX(1000px)";
}, 3000);
setTimeout(() => {
    text.textContent =  "Wherever you are ";
    text.style.animation = "scale(0.9)";
}, 3000);
} 
loader () ;
