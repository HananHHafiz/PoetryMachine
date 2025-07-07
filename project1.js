console.log("Hello to Poetry Machine ");

//Functions modified from Rudy McDaniel's Lab Exercises, student examples & www.w3schools.com tutorials.

  // this function will Remove Poem header 2 first lines
  function changePoemLine1()
    {
      document.getElementById('line1').innerHTML = "";
      document.getElementById('line2').innerHTML = "";
    }
    console.log("Remove Poem header");

  
  // this function will Increase the poem font-size using CSS
  function bigPoem()
    {
    var poemWrapper = document.getElementById('poam');
    poemWrapper.style.fontSize = "20px";
   
    }
    console.log("Increaze text function");


     // this function will Decrease the poem font-size using CSS
  function smallPoem()
  {
  var poemWrapper = document.getElementById('poam');
  poemWrapper.style.fontSize = "15px";
 
  }
  console.log("Decrease poem function");

  
    // this function will change the poem colors using CSS
    function colorizePoem()
      {
      console.log("Colorize poem function");
      var poemWrapper = document.getElementById('line3');
      poemWrapper.style.color = "beige";
      var poemWrapper = document.getElementById('line16');
      poemWrapper.style.color = "beige";
      var poemWrapper = document.getElementById('line7');
      poemWrapper.style.color = "purple";
      var poemWrapper = document.getElementById('line9');
      poemWrapper.style.color = "purple";
      var poemWrapper = document.getElementById('line11');
      poemWrapper.style.color = "purple";
      var poemWrapper = document.getElementById('line5');
      poemWrapper.style.color = "rgb(80, 60, 18)";
      var poemWrapper = document.getElementById('line6');
      poemWrapper.style.color = "maroon";
      var poemWrapper = document.getElementById('line13');
      poemWrapper.style.color = "maroon";
      var poemWrapper = document.getElementById('line15');
      poemWrapper.style.color = "rgb(44, 97, 37";
      var poemWrapper = document.getElementById('line8');
      poemWrapper.style.color = "yellow";
      var poemWrapper = document.getElementById('line10');
      poemWrapper.style.color = "yellow";
      var poemWrapper = document.getElementById('line14');
      poemWrapper.style.color = "yellow";
      var poemWrapper = document.getElementById('line4');
      poemWrapper.style.color = "rgb(44, 97, 37";
      var poemWrapper = document.getElementById('poam');
      poemWrapper.style.color = "rgba(48, 4, 88, 0.637)";
      var poemWrapper = document.getElementById('poam');
      poemWrapper.style.background = "rgba(170, 169, 169, 0.637)";
      }
      console.log("Change Text Color");

  
      //Randomize array element order in-place.

      var changedPoem = [
        "A woman who held a baby against her bosom said, 'Speak to us of Children.",
        "And he said:",
        "Your children are not your children.",
        "They are the sons and daughters of Life's longing for itself.",
        "They come through you but not from you,",
        "And though they are with you, yet they belong not to you.",
        "You may give them your love but not your thoughts.",
        "For they have their own thoughts.",
        "You may house their bodies but not their souls,",
        "or their souls dwell in the house of tomorrow, which you cannot visit, not even in your dreams.",
        "You may strive to be like them but seek not to make them like you.",
        "The archer sees the mark upon the path of the infinite, and He bends you with His might that His arrows may go swift and far.",
        "Let your bending in the archer's hand be for gladness;",
        "For even as he loves the arrow that flies, so He loves also the bow that is stable.",
        "For life goes not backward nor tarries with yesterday",
        "ou are the bows from which your children as living arrows are sent forth.",
      ]
     
      function shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--)
              {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
              }
          return(array);
      }
  
      // this function will loop through and change the entire poem, line by line
      function scramblePoem()
        {
        var randomPoem = shuffleArray(changedPoem);
        var id, i;
          for (i = 0; i < randomPoem.length; i++)
            {
              id = "line" + (i+1);
              console.log("Changing line " + id);
              document.getElementById(id).innerHTML = randomPoem[i];
            }
        }
        console.log("Scramble Poem");

// Function to replace they to your children

function theyReplace() {
    var str = document.getElementById("poam").innerHTML; 
    var res = str.replace("They", "Your children");
    document.getElementById("poam").innerHTML = res;

    var str = document.getElementById("poam").innerHTML; 
    var res = str.replace("they", "your children");
    document.getElementById("poam").innerHTML = res;
}

console.log("replace they with your children");

// Capitalize Keywords

function keywords() {
  var str = document.getElementById("poam").innerHTML; 
  var res = str.replace(/children|not|like|arrows|bows/gi, function (x) {
    return x.toUpperCase();
  });
  document.getElementById("poam").innerHTML = res;
}

console.log("Capitalize Keywords");


// Background Change

// code based from http://itwebtutorials.mga.edu/js/chp10/text-background-colors.aspx

function SwitchColorsBlack() {
  if (document.getElementById("PAR").style.color == "black") {
    document.getElementById("PAR").style.color = "white";
    document.getElementById("PAR").style.backgroundColor = "black"; 
  } else {
    document.getElementById("PAR").style.color = "white";
    document.getElementById("PAR").style.backgroundColor = "black"; 
  }
}
console.log("Switch Colors Black Mode");


function SwitchColorsWhite() {
  if (document.getElementById("PAR").style.color == "white") {
    document.getElementById("PAR").style.color = "black";
    document.getElementById("PAR").style.backgroundColor = "white"; 
  } else {
    document.getElementById("PAR").style.color = "black";
    document.getElementById("PAR").style.backgroundColor = "white"; 
  }
}
console.log("Switch Colors Light Mode");


// Description box code from 

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";}
  }

  console.log("Description Box");

