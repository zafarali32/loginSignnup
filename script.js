
function myMenuFuction(){
    var i = document.getElementById("navMenu");
    if (i.className === "nav-menu"){
        i.className += "responsive";
    } else {
        i.className = "nav-menu"
    }
}




var a = document.getElementById("loginBtn");
var b = document.getElementById("signupBtn");
var x = document.getElementById("login");
var y = document.getElementById("signup");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += "white-Btn";
    b.className = "btn";
    x.style.opacity = 1 ;
    y.style.opacity = 0 ;

}

function signup() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += "white-Btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}