// Display the Dynamically Date on the Home Page.
// ************************************************

// getting the CurrentDate Element
var date = document.querySelector('#CurrentDate');

// Create a Date Object , which  is currentDate.
var currentDate = new Date();

//getting the current date value 
let nowdate = currentDate.getDate();

//getting the current Month value 
let nowmonth = currentDate.getMonth();

// Create a Months Array , Which Contains the Months Name in String Format , and Set it into the Get Month Value.
let months = ['Jan','feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];

//getting the current Year value 
var nowyear = currentDate.getFullYear();

// Set the HTML of CurrentDate element.
date.innerHTML = `${nowdate}-${months[nowmonth]}-${nowyear}`;

// ************************************************

setInterval(Timer, 1000);

// Set the New Year Date
var newYearDate = new Date(`31 december,${nowyear} 00:00:00 PM`);

//  Get the Difference Between " NewYearDate to CurrentDate " , and Convert Also in Seconds Format.
//  By Default , it Will return Time difference in MilliSeconds.
let diff = (newYearDate - currentDate) / 1000 ; 


// Create the timer function , which getting and setting the Time Factors.
function Timer()
{
//  checks the Difference is higher or Lower from the NewYear.
//  if Condition is true , then it Will return from here.
if(diff < 0) 
{
    var getNewYearWindow = setTimeout(NewYear,2000);
    clearTimeout(getNewYearWindow(),1000);
};

// if condition is false , then it will continue....

    // convert the Getting difference Time into Integer Days format.
    let days = Math.floor(diff/3600 /24);

    // getting all the input tags
    let inputs = document.querySelectorAll("input");

    // set the input Value
    inputs[0].value = days;

    // convert the Getting difference Time into Integer Hours format.
    let Hour = Math.floor(diff /3600) % 24;
    
    // set the input Value
    inputs[1].value = Hour;

    // convert the Getting difference Time into Integer Minutes format.
    let Minute = Math.floor(diff /60) %60;

    // set the input Value
    inputs[2].value = Minute;

    // convert the Getting difference Time into Integer Seconds format.
    let Second = Math.floor(diff) % 60;

    // set the input Value
    inputs[3].value = Second;
}


// Set The Time InterVal , Which Call the Timer Function after every 1 Seconds;

//  set New Year numnber  in CountDown Timer 
      // getting the Element
let setNewYear = document.querySelector('.countDown-timer h1');

    // Set the Value dynamically.
setNewYear.innerHTML = `New Year ${nowyear + 1} Coming Soon...`;

// On Complete the CountDown Timer , This NewYear function Call.
function  NewYear()
{
   var newYearContent = document.querySelector('.overlay');
   newYearContent.innerHTML = `
   <div class="content-container">
   <div class="hide-content" >
       <h1 id="new-year">Happy New Year</h1>
       <span>${nowyear + 1}</span>
       <audio loop=" "> 
           <source src="/Audio/Happy New Year.mp3" type="audio/mp3">
       </audio>
   </div>
</div>
`;
}
