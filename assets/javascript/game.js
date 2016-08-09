$(document).ready(function(){
	// Create an initial todoCount variable
var trainTime = 0;
var trainRoute = 0;
var trainName = "";
var trainDestination = "";
var todoCount = 0;
var currentTime = 0;
var trainNext = 0;
var nextTrain = 0;



// On Click event associated with the addTodo function
$("#addSubmit").on("click", function(){

// Get the "values" from the textboxs
	var trainName = $('#inputName').val().trim();
	console.log(trainName);

	var trainDestination = $('#inputDestination').val().trim();
	console.log(trainDestination);

	var trainTime = $('#inputTime').val().trim();
	console.log(trainTime);

	var trainRoute = $('#inputFrequency').val().trim();
	console.log(trainRoute);
	



	// pull current time


	// set currentTime = to the current time




	// convert all time measurements to minutes


	// calculate minutes away and next train
	trainNext = trainTime - currentTime; 

	nextTrain = trainTime + trainRoute;

	// convert time messurements from minutes to military time.



	
	



	var name = $('<div>');
		name.attr("id", "item-" + todoCount);
		name.addClass("col-md-3");
		name.append("<span>" + trainName + "</span>");
		console.log(name);

		// Add the Div and data to the trainTimes div
		$("#trainTimes").append(name);
		
		localStorage.setItem("data-todo-" + todoCount, trainName);

	

	


	var destination = $('<div>');
		destination.attr("id", "item-" + todoCount);
		destination.addClass("col-md-3");
		destination.append("<span>" + trainDestination + "</span>");
		console.log(destination);

		// Add the Div and data to the trainTimes div
		$("#trainTimes").append(destination);
			
		localStorage.setItem("data-todo-" + todoCount, trainDestination);
			


	


	var time = $('<div>');
		time.attr("id", "item-" + todoCount);
		time.addClass("col-md-2");
		time.append("<span>" + trainTime + "</span>");
		console.log(time);

		// Add the Div and data to the trainTimes div
		$("#trainTimes").append(time);

		localStorage.setItem("data-todo-" + todoCount, trainTime);
	
	var minute = $('<div>');
		minute.attr("id", "item-" + todoCount);
		minute.addClass("col-md-2");
		minute.append("<span>" + trainNext + "</span>");
		console.log(minute);

		// Add the Div and data to the trainTimes div
		$("#trainTimes").append(minute);

		localStorage.setItem("data-todo-" + todoCount, trainNext);
		


	var next = $('<div>');
		next.attr("id", "item-" + todoCount);
		next.addClass("col-md-2");
		next.append("<span>" + nextTrain + "</span>");
		console.log(next);

		// Add the Div and data to the trainTimes div
		$("#trainTimes").append(next);
	
		localStorage.setItem("data-todo-" + todoCount, nextTrain);
	




	
		// $("#todos").append(todoItem);


		// Clear the textbox when done
		$('#inputTime').val("");
		$('#inputFrequency').val("");
		$('#inputName').val("");
		$('#inputDestination').val("");

		// Add to the todoCount
		todoCount++;

		// Prevent Form from Refreshing (return false)
		return false;



	

	
});

// code from homework for reference:
// $("#addTodo").on("click", function(){

// 	// Get the Todo "value" from the textbox
// 	var todoTask = $('#todo').val().trim();
	// var todoItem = $('<p>');
// 		todoItem.attr("id", "item-" + todoCount);
// 		todoItem.append(" " + todoTask);

// 		// Create a button with unique identifers based on what number it is in the list. Again use jquery to do this.
// 		// Give your button a data attribute called data-todo and a class called "checkbox".
// 		// Lastly append a letter X inside.  
// 		var todoClose = $("<button>");
// 		todoClose.attr("data-todo", todoCount);
// 		todoClose.addClass("checkbox");
// 		todoClose.append("X");

// 		// Append the button to the todoitem
// 		todoItem = todoItem.prepend(todoClose);

// 		// Add the button and todo item to the todos div
// 		$("#todos").append(todoItem);

// 		// Clear the textbox when done
// 		$('#todo').val("");

// 		localStorage.setItem("data-todo-" + todoCount, todoTask);
// 		// Add to the todoCount
// 		todoCount++;

// 		// Prevent Form from Refreshing (return false)
// 		return false;
// 	// Create a new todo <p> tag in jquery  to hold a todoitem and give it a unique identifier based on what number it is in the list. 
// 	// Then give it an ID of the form: "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.
// 	// Then append the todo text to this <p> element.
	
// });




// When a user clicks a check box then delete the specific content 
// (NOTE: Pay attention to the unusual syntax here for the click event. Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)

// $(document.body).on('click', '.checkbox', function(){

// 	// Get the todoNumber of the button from its data attribute.
// 	var todoNumber = $(this).data("todo");

// 	// Empty the specific <p> element that previously held the todo item.
// 	$("#item-" + todoNumber).empty();

// });

	





})

			