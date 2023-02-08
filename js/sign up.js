const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    let nameInput = document.getElementById("name");
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    let newAccount = {
        username: usernameInput.Value,
        name: nameInput.value,
        password: passwordInput.value,
        type: "user"
    }
    accounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    window.location.href = "./home.html";
});