// Global Variables
var numSquare = 6;
var colors = generateRandomColors(numSquare);
var pickedColor = pickColor();



// Helper Functions

// Pick a random color from "colors" as the "pickedColor"
function pickColor() 
{
	// Pick a random integer between 0 and (colors.length - 1)
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


// Generate an array (size = "num") of random colors 
function generateRandomColors(num) 				// "num" - size of the array
{
	// Declare an array	
	var array = [];

	// Choose random colors and push into array
	for (var i = 0; i < num; i++) 
	{
		array.push(randomColor());
	}

	// Return the array
	return array;
}

function randomColor() 
{
	// Select red from 0 to 255
	var r = Math.floor(Math.random() * 256);

	// Select green from 0 to 255
	var g = Math.floor(Math.random() * 256);

	// Select blue from 0 to 255
	var b = Math.floor(Math.random() * 256);

	// Concatenate
	var result = "rgb(" + r + ", " + g + ", " + b + ")";			// Be careful with the space!!!
	return result;
}



// DOM Select
var squares = document.querySelectorAll(".square");				// squares - classList: Similar as array but different
																// CSS style
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.getElementById("message");
var h1 = document.querySelector("h1");							// CSS style
var resetButton = document.querySelector("#reset");				// CSS style
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");	



// DOM Manipulate Functions
function clickSquares() 
{
	// Select the "clickeColor"
	var clickedColor = this.style.backgroundColor;			// In rgb(r, g, b) format

	// Compare the "clickedColor" with "pickedColor"
	if (clickedColor === pickedColor) 
	{
		messageDisplay.textContent = "Correct"
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play Again?";
	} 
	else 
	{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again"
	}
}


// Change all the "squares" same as "clckedColor" 
function changeColors(color)						
{
	for (var i = 0; i < squares.length; i++) 
	{
		squares[i].style.backgroundColor = color;
	}
}


function clickResetButton() 
{
	// Generate an array (size = "num") of random colors  	
	colors = generateRandomColors(numSquare);

	//Select a new random "pickedColor" from the array
	pickedColor = pickColor();

	// Allow "colorDisplay" to match "pickedColor"
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";

	this.textContent = "New Colors";

	// Modify "squares" colors
	for (var i = 0; i < squares.length; i++) 
	{
		squares[i].style.backgroundColor = colors[i]
	}

	// Change the "h1" background color back to the orginal
	h1.style.backgroundColor = steelblue;
} 


function clickEasyButton() 
{
	// Add class on HTML from CSS 
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

	// Update "numSquare"
	numSquare = 3;

	// Generate an array (size = "num") of random 	colors  	
	colors = generateRandomColors(numSquare);

	//Select a new random "pickedColor" from the array
	pickedColor = pickColor();

	// Allow "colorDisplay" to match "pickedColor"
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) 
	{
		if (colors[i]) 
		{
			squares[i].style.backgroundColor = colors[i];
		} 
		else 
		{
			squares[i].style.display = "none";
		}
	}
}


function clickHardButton() 
{
	// Add class on HTML from CSS 
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	// Update "numSquare"
	numSquare = 6;

	// Generate an array (size = "num") of random colors  	
	colors = generateRandomColors(numSquare);

	//Select a new random "pickedColor" from the array
	pickedColor = pickColor();

	// Allow "colorDisplay" to match "pickedColor"
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) 
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
}



// DOM Manipulate
for (var i = 0; i < squares.length; i++) 
{
	// Initialize "colors"
	squares[i].style.backgroundColor = colors[i]

	// Add "click" event to all "squares" 
	squares[i].addEventListener("click", clickSquares);
}


colorDisplay.textContent = pickedColor;


//Add "click" event to "resetButton"
resetButton.addEventListener("click", clickResetButton);


//Add "click" event to "easyBtn"
easyBtn.addEventListener("click", clickEasyButton);


//Add "click" event to "hardBtn"
hardBtn.addEventListener("click", clickHardButton);