const input = document.getElementById("input");
const mdp = document.getElementById("motdepasse");
const submit = document.getElementById("submit");
const email_error= document.getElementById("error-email");
email_error.classList.add("hidden");

submit.addEventListener("click" , function (event) {
    setTimeout(() => {
           submit.innerHTML = "<div class='loader'><div></div><div></div><div></div></div>"
    }, 3000);
    var mail = "hei.maharavo@gmail.com";
    let modp = "m";
    if ((mdp.value != "" || mdp.value != "") || (!input.value.match(mail)) || !input.value.match(modp) ) {
            setTimeout(() => {
       submit.innerHTML = "<button type='submit'  id='submit' class='submit' > Login</button>"
       email_error.classList.remove("hidden")
    }, 3000);
    setTimeout(() => {
        email_error.classList.add("hidden")
    }, 5000);
    }

    if (input.value.match(mail) && mail.valuee.match(modp)) {
        setTimeout(() => {
            submit.innerHTML =  "<button type='submit'  id='submit' class='submit' > Login</button>";
            email_error.classList.add("hidden");
            window.location.href = "Res.html";
        }, 5000);
        
    }
    
})