if (localStorage.getItem("currentUser") != null) {
   href = "./home.html";
}
else{
    
}
const submitButton = document.getElementById("submit");
const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

submitButton.addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password");
    let found = false;
    for (let i = 0; i <= accounts.length; i++){
        if (accounts[i].username == username){
            found = true;
            if (accounts[i].password == password){
                localStorage.setItem("currentUser", JSON.stringify(accounts[i]));
                if (accounts[i].type == "admin") {
                   window.location.href = "admin.html";
                } else {
                    window.location.href = "home.html";
                }
                break;
            } else {
                alert("password Or username is wrong");
                break;
            }
        }
    }
    if (!found) {
        alert("Account Not Found");
    }
});