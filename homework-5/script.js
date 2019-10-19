var hour9 = moment("9:00:00 am", "h:mm:ss a").format("h a")
var hour10 = moment("10:00:00 am", "h:mm:ss a").format("h a")
var hour11 = moment("11:00:00 am", "h:mm:ss a").format("h a")
var hour12 = moment("12:00:00 pm", "h:mm:ss a").format("h a")
var hour1 = moment("1:00:00 pm", "h:mm:ss a").format("h a")
var hour2 = moment("2:00:00 pm", "h:mm:ss a").format("h a")
var hour3 = moment("3:00:00 pm", "h:mm:ss a").format("h a")
var hour4 = moment("4:00:00 am", "h:mm:ss a").format("h a")
var hour5 = moment("5:00:00 pm", "h:mm:ss a").format("h a")

var time9Div = $("#time9")
var time10Div = $("#time10")
var time11Div = $("#time11")
var time12Div = $("#time12")
var time1Div = $("#time1")
var time2Div = $("#time2")
var time3Div = $("#time3")
var time4Div = $("#time4")
var time5Div = $("#time5")

var text9Div = $("#text9")
var text10Div = $("#text10")
var text11Div = $("#text11")
var text12Div = $("#text12")
var text1Div = $("#text1")
var text2Div = $("#text2")
var text3Div = $("#text3")
var text4Div = $("#text4")
var text5Div = $("#text5")

time9Div.text(hour9)
time10Div.text(hour10)
time11Div.text(hour11)
time12Div.text(hour12)
time1Div.text(hour1)
time2Div.text(hour2)
time3Div.text(hour3)
time4Div.text(hour4)
time5Div.text(hour5)

var button0 = document.getElementById("button0")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")
var button5 = document.getElementById("button5")
var button6 = document.getElementById("button6")
var button7 = document.getElementById("button7")
var button8 = document.getElementById("button8")

text9Div.val(localStorage.getItem("9AM"));
text9Div.val(localStorage.getItem("10AM"));
text9Div.val(localStorage.getItem("11AM"));
text9Div.val(localStorage.getItem("12PM"));
text9Div.val(localStorage.getItem("1PM"));
text9Div.val(localStorage.getItem("2PM"));
text9Div.val(localStorage.getItem("3PM"));
text9Div.val(localStorage.getItem("4PM"));
text9Div.val(localStorage.getItem("5PM"));

function savePlanner() {
    localStorage.setItem("9AM", text9Div.val());
    localStorage.setItem("10AM", text9Div.val());
    localStorage.setItem("11AM", text9Div.val());
    localStorage.setItem("12PM", text9Div.val());
    localStorage.setItem("1PM", text9Div.val());
    localStorage.setItem("2PM", text9Div.val());
    localStorage.setItem("3PM", text9Div.val());
    localStorage.setItem("4PM", text9Div.val());
    localStorage.setItem("5PM", text9Div.val());

}

button0.addEventListener("click", savePlanner);
button1.addEventListener("click", savePlanner);
button2.addEventListener("click", savePlanner);
button3.addEventListener("click", savePlanner);
button4.addEventListener("click", savePlanner);
button5.addEventListener("click", savePlanner);
button6.addEventListener("click", savePlanner);
button7.addEventListener("click", savePlanner);
button8.addEventListener("click", savePlanner);

// $(".div9").setAttribute("class","future row time-block")
// $(".div10").setAttribute("class","future row time-block")
// $(".div11").setAttribute("class","future row time-block")
// $(".div12").setAttribute("class","future row time-block")
// $(".div1").setAttribute("class","future row time-block")
// $(".div2").setAttribute("class","future row time-block")
// $(".div3").setAttribute("class","future row time-block")
// $(".div4").setAttribute("class","future row time-block")
// $(".div5").setAttribute("class","future row time-block")


// if (moment().isBefore("6:00:00 pm", "h:mm:ss a") === true) {
//     text9Div.className = "past"
// }
// else {
    

// }