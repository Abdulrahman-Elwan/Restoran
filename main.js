document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#breakfast").onclick = function () {
        document.querySelector("#aunch").style.display = "none";
        document.querySelector("#inner").style.display = "none";
        document.querySelector("#reakfast").style.display = "block";
    };
    document.querySelector("#launch").onclick = function () {
        document.querySelector("#reakfast").style.display = "none";
        document.querySelector("#inner").style.display = "none";
        document.querySelector("#aunch").style.display = "block";
    };
    document.querySelector("#dinner").onclick = function () {
        document.querySelector("#reakfast").style.display = "none";
        document.querySelector("#aunch").style.display = "none";
        document.querySelector("#inner").style.display = "block";
    };
});
// create counter
let nums = document.querySelectorAll(".nums .num");
let sec = document.querySelector(".about_us")
let started = false;
window.onscroll = function(){
    if(window.scrollY >= sec.offsetTop){
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=> {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 1500 / goal);
}
// form validate contact page
document.forms['signupForm']['name'].addEventListener('textInput', fstnameVerify);
document.forms['signupForm']['email'].addEventListener('textInput', emailVerify);
document.forms['signupForm']['Phone'].addEventListener('textInput', PhoneVerify);
document.forms['signupForm']['textarea'].addEventListener('textarea', messageVerify);
function validateForm(event) {
    event.preventDefault();
    if (document.forms['signupForm']['name'].value === "" || document.forms['signupForm']['name'].value.length < 3) {
        document.forms['signupForm']['name'].style.border = "2px solid #ff0000c5";
        return false; 
    }
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!Regex.test(document.forms['signupForm']['email'].value)) {
        document.forms['signupForm']['email'].style.border = "2px solid #ff0000c5";
        return false; 
    }
    if (document.forms['signupForm']['Phone'].value.length < 11) {
        document.forms['signupForm']['Phone'].style.border = "2px solid #ff0000c5";
        return false; 
    }
    if (document.forms['signupForm']['textarea'].value === "") {
        document.forms['signupForm']['textarea'].style.border = "2px solid #ff0000c5";
        return false;
    }
    document.getElementById("myForm").test();
}
function fstnameVerify() {
    if (document.forms['signupForm']['name'].value.length >= 3) {
        document.forms['signupForm']['name'].style.border = "1px solid #3498db";
        return true;
    }
}
function emailVerify() {
    if (document.forms['signupForm']['email'].value.length > 1) {
        document.forms['signupForm']['email'].style.border = "1px solid #3498db";
        return true;
    }
}
function PhoneVerify() {
    if (document.forms['signupForm']['Phone'].value.length >= 11) {
        document.forms['signupForm']['Phone'].style.border = "1px solid #3498db";
        return true;
    }
}
function messageVerify() {
    if (document.forms['signupForm']['textarea'].value.length > 2) {
        document.forms['signupForm']['textarea'].style.border = "1px solid #3498db";
        return true;
    }
}
// gmail.js
var submit = document.getElementById('submit');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    Email.send({
        SecureToken : "a1f27cf1-2632-4c74-bcc7-633b19d4369d",
        To: 'am8957053@gmail.com',
        From:'am8957053@gmail.com',
        Subject: "test form",
        Body: 'name: ' + document.getElementById('name').value +
                '<br/> email: ' + document.getElementById('email').value+   
                '<br/> Phone: ' + document.getElementById('Phone').value+ 
                '<br/> message;: ' + document.getElementById('message').value
    }).then(
        message => alert("message send succesfully")
    );
})