// JavaScript to Toggle Phone Number
document.getElementById("viewPhoneButton").addEventListener("click", function () {
    const phoneNumber = document.getElementById("phoneNumber");
    if (phoneNumber.style.display === "none") {
        phoneNumber.style.display = "block";
        this.innerText = "Hide Contact No.";
    } else {
        phoneNumber.style.display = "none";
        this.innerText = "View Contact No.";
    }
});
// Get the button
let mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
