function validateForm() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const phone = document.getElementById("phone");

    const EmailVrai = "maharavo@mail.com";
    const PasswordVrai = "1234";
    const PhoneVrai = "0389456590";

    const EmailValue = email.value;
    const PasswordValue = password.value;
    const PhoneValue = phone.value;

    if (EmailValue === "" || PasswordValue === "" || PasswordValue ==="") {
        alert("Remplir le champ s'il vous plaît.");
    } else if (EmailValue !== EmailVrai || PasswordValue !== PasswordVrai || PhoneValue !== PhoneVrai) {
        alert("Email ou mot de passe ou phone incorrect.");
    } else {
        window.location.href = "index.html";
    }
}
