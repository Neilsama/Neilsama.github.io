var textArray=[];





function saveText(){
	var textInput = document.getElementById("inputArea");
	var newOption = textInput.value;
	textArray.push(newOption);
	textInput.value = '';
	console.log(textArray);
	updateOptions();
}

function updateOptions(){
	var optionHolding = document.getElementById("listContainer");
	optionHolding.innerHTML = '';

	var len = textArray.length;
	var i;

	for(i=0;i<len;i++){
		var newOptionDiv = document.createElement('div');
		newOptionDiv.id = i;
		newOptionDiv.className = 'option';

		var optionContent = document.createElement('p');
		optionContent.innerHTML = textArray[i];

		var deleteButton = document.createElement("div");   

		newOptionDiv.appendChild(optionContent);
		newOptionDiv.appendChild(deleteButton);
		optionHolding.appendChild(newOptionDiv);

	}
}
