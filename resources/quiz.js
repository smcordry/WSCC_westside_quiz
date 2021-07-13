
<!--//Hide this script from old browsers. Else it will show up in the display window! Probably not even needed anymore. But I ramble.

//Calculate Online Readiness
function determineLevel() {

  var answeredAllQuestions = true; //Set to true to start.
  var questionNumber = 1; //Which question are we on?
  var totalQuestions = 10; //How many questions exist? 
  var totalPoints = 0; //Start at 0.
  var info = ""; //Used to display the score.
  
  while ((answeredAllQuestions == true) && (questionNumber <= totalQuestions)) {
	answeredAllQuestions = false; //Set to false here, set to true if the current particular question in the loop was answered.
    eval("if(document.Question" + questionNumber + ".radio[0].checked) { totalPoints = totalPoints + 5; answeredAllQuestions = true;}"); //Calculate the points.
    eval("if(document.Question" + questionNumber + ".radio[1].checked) { totalPoints = totalPoints + 4; answeredAllQuestions = true;}");
    eval("if(document.Question" + questionNumber + ".radio[2].checked) { totalPoints = totalPoints + 3; answeredAllQuestions = true;}");
	eval("if(document.Question" + questionNumber + ".radio[3].checked) { totalPoints = totalPoints + 2; answeredAllQuestions = true;}");
	eval("if(document.Question" + questionNumber + ".radio[4].checked) { totalPoints = totalPoints + 1; answeredAllQuestions = true;}");
	questionNumber = questionNumber + 1;
  }
  
  totalPoints = totalPoints/10; //Make it a number between 1-5.

  if(totalPoints >= 4.0) {
     info = "<P>You have an extremely high test anxiety level.</P>";
  }

  if(totalPoints < 4.0) {
     info = "<P>You have a high test anxiety level.</P>";
  }

  if(totalPoints < 3.5) {
     info = "<P>You have a moderately high test anxiety level.</P>";
  }

  if(totalPoints < 3.0) {
     info = "<P>You have a high normal test anxiety level.</P>";
  }

  if(totalPoints < 2.5) {
     info = "<P>You have a normal or average test anxiety level.</P>";
  }

  if(totalPoints < 2.0) {
     info = "<P>You have a comfortably low test anxiety level.</P>";
  }
  
  info = "<P><B><H2>Your Test Anxiety Level Results</H2></B></P>" + 
  "<P>Your average response is " + totalPoints +".</P>" + info;
 
  if(answeredAllQuestions == false) {
     info = "<P>You must answer <b>all</b> statements for an accurate interpretation of your test anxiety level. You missed one or more of the radio buttons. Try again.</P>"
  }
  
  document.getElementById('results').innerHTML = info; //Display updated info at the bottom of the page.
  window.location.hash="ShowResults"; //Scroll the window to show the results.
  
}
<!-- done hiding -->