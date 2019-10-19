// Variables for each hour
var hour9 = moment("9:00:00 am", "h:mm:ss a")
var hour10 = moment("10:00:00 am", "h:mm:ss a")
var hour11 = moment("11:00:00 am", "h:mm:ss a")
var hour12 = moment("12:00:00 pm", "h:mm:ss a")
var hour1 = moment("1:00:00 pm", "h:mm:ss a")
var hour2 = moment("2:00:00 pm", "h:mm:ss a")
var hour3 = moment("3:00:00 pm", "h:mm:ss a")
var hour4 = moment("4:00:00 am", "h:mm:ss a")
var hour5 = moment("5:00:00 pm", "h:mm:ss a")
var hour6 = moment("6:00:00 pm", "h:mm:ss a")

// Variable for time now
var time = moment()

// Pushes current date and time onto HTML
$("#currentDay").text(time.format("LLL"))

// Variables for text box input
var text9Div = $("#text9")
var text10Div = $("#text10")
var text11Div = $("#text11")
var text12Div = $("#text12")
var text1Div = $("#text1")
var text2Div = $("#text2")
var text3Div = $("#text3")
var text4Div = $("#text4")
var text5Div = $("#text5")


// Pulling input from local storage when document is ready
$(document).ready(function() {
text9Div.val(localStorage.getItem("9AM"));
text10Div.val(localStorage.getItem("10AM"));
text11Div.val(localStorage.getItem("11AM"));
text12Div.val(localStorage.getItem("12PM"));
text1Div.val(localStorage.getItem("1PM"));
text2Div.val(localStorage.getItem("2PM"));
text3Div.val(localStorage.getItem("3PM"));
text4Div.val(localStorage.getItem("4PM"));
text5Div.val(localStorage.getItem("5PM"));
})

// Function to save input into local storage
function savePlanner() {
    localStorage.setItem("9AM", text9Div.val());
    localStorage.setItem("10AM", text10Div.val());
    localStorage.setItem("11AM", text11Div.val());
    localStorage.setItem("12PM", text12Div.val());
    localStorage.setItem("1PM", text1Div.val());
    localStorage.setItem("2PM", text2Div.val());
    localStorage.setItem("3PM", text3Div.val());
    localStorage.setItem("4PM", text4Div.val());
    localStorage.setItem("5PM", text5Div.val());
}

// Variables for individual buttons
var button0 = document.getElementById("button0")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")
var button5 = document.getElementById("button5")
var button6 = document.getElementById("button6")
var button7 = document.getElementById("button7")
var button8 = document.getElementById("button8")

// Button On Click Functions (Runs savePlanner Function)
button0.addEventListener("click", savePlanner);
button1.addEventListener("click", savePlanner);
button2.addEventListener("click", savePlanner);
button3.addEventListener("click", savePlanner);
button4.addEventListener("click", savePlanner);
button5.addEventListener("click", savePlanner);
button6.addEventListener("click", savePlanner);
button7.addEventListener("click", savePlanner);
button8.addEventListener("click", savePlanner);

// Sets all the Time Slots to "Future"
$(".div9").attr("class", "future col-md-10 div9")
$(".div10").attr("class", "future col-md-10 div10")
$(".div11").attr("class", "future col-md-10 div11")
$(".div12").attr("class", "future col-md-10 div12")
$(".div1").attr("class", "future col-md-10 div1")
$(".div2").attr("class", "future col-md-10 div2")
$(".div3").attr("class", "future col-md-10 div3")
$(".div4").attr("class", "future col-md-10 div4")
$(".div5").attr("class", "future col-md-10 div5")


// If statements to change div classes based on if time is between X and Y
// If time is between 9AM and 10AM
if (time.isBetween(hour9, hour10)) {
    $(".div9").attr("class", "present col-md-10 div9")
}
// If time is between 10AM and 11AM
if (time.isBetween(hour10, hour11)) {
    $(".div9").attr("class", "past col-md-10 div9")
    $(".div10").attr("class", "present col-md-10 div10")
}
// If time is between 11AM and 12PM
if (time.isBetween(hour11, hour12)) {
    $(".div9").attr("class", "past col-md-10 div9")
    $(".div10").attr("class", "past col-md-10 div10")
    $(".div11").attr("class", "present col-md-10 div11")
}
// If time is between 12PM and 1PM
if (time.isBetween(hour12, hour1)) {
    $(".div9").attr("class", "past col-md-10 div9")
    $(".div10").attr("class", "past col-md-10 div10")
    $(".div11").attr("class", "past col-md-10 div11")
    $(".div12").attr("class", "present col-md-10 div12")
}
// If time is between 1PM and 2PM
if (time.isBetween(hour1, hour2)) {
    $(".div9").attr("class", "past col-md-10 div9")
    $(".div10").attr("class", "past col-md-10 div10")
    $(".div11").attr("class", "past col-md-10 div11")
    $(".div12").attr("class", "past col-md-10 div12")
    $(".div1").attr("class", "present col-md-10 div1")
}
// If time is between 2PM and 3PM
if (time.isBetween(hour2, hour3)) {
    $(".div9").attr("class", "past col-md-10 div9")
    $(".div10").attr("class", "past col-md-10 div10")
    $(".div11").attr("class", "past col-md-10 div11")
    $(".div12").attr("class", "past col-md-10 div12")
    $(".div1").attr("class", "past col-md-10 div1")
    $(".div2").attr("class", "present col-md-10 div2")
}
// If time is between 3PM and 4PM
if (time.isBetween(hour3, hour4)) {
    $(".div9").attr("class", "past col-md-10 div9")
    $(".div10").attr("class", "past col-md-10 div10")
    $(".div11").attr("class", "past col-md-10 div11")
    $(".div12").attr("class", "past col-md-10 div12")
    $(".div1").attr("class", "past col-md-10 div1")
    $(".div2").attr("class", "past col-md-10 div2")
    $(".div3").attr("class", "present col-md-10 div3")
}
// If time is between 4PM and 5PM
if (time.isBetween(hour4, hour5)) {
    $(".div9").attr("class", "past col-md-10 div9")
    $(".div10").attr("class", "past col-md-10 div10")
    $(".div11").attr("class", "past col-md-10 div11")
    $(".div12").attr("class", "past col-md-10 div12")
    $(".div1").attr("class", "past col-md-10 div1")
    $(".div2").attr("class", "past col-md-10 div2")
    $(".div3").attr("class", "past col-md-10 div3")
    $(".div4").attr("class", "present col-md-10 div4")
}
// If time is between 5PM and 6PM
if (time.isBetween(hour5, hour6)) {
    $(".div9").attr("class", "past col-md-10 div9")
    $(".div10").attr("class", "past col-md-10 div10")
    $(".div11").attr("class", "past col-md-10 div11")
    $(".div12").attr("class", "past col-md-10 div12")
    $(".div1").attr("class", "past col-md-10 div1")
    $(".div2").attr("class", "past col-md-10 div2")
    $(".div3").attr("class", "past col-md-10 div3")
    $(".div4").attr("class", "past col-md-10 div4")
    $(".div5").attr("class", "present col-md-10 div5")
}
// If time is after 6PM
if (time.isAfter(hour6)) {
    $(".div9").attr("class", "past col-md-10 div9")
    $(".div10").attr("class", "past col-md-10 div10")
    $(".div11").attr("class", "past col-md-10 div11")
    $(".div12").attr("class", "past col-md-10 div12")
    $(".div1").attr("class", "past col-md-10 div1")
    $(".div2").attr("class", "past col-md-10 div2")
    $(".div3").attr("class", "past col-md-10 div3")
    $(".div4").attr("class", "past col-md-10 div4")
    $(".div5").attr("class", "past col-md-10 div5")
    $(".div5").attr("class", "past col-md-10 div2")
}


