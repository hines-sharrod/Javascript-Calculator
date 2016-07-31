window.onload = function () {
  var buttons = document.getElementsByTagName('span'),
      result = document.querySelectorAll('.result p')[0],
      clear = document.getElementsByClassName('clear')[0];
  
  for (var i = 0; i < buttons.length; i += 1) {
    // It will loop through all the buttons to add onclick-event
    // If the inside of that button is NOT '=' --> we will
    // add the onclick-function: addValue(i). 
    // If it is '=' --> add the onclick-function: calculate(i)
    if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } else {
      buttons[i].addEventListener("click", addValue(i));
    }
  }
  
  clear.onclick = function () {
    result.innerHTML = '';
  };  
  
  function addValue(i) {
      //Adding string values together combining numbers 
      //and operators to later be evaluated
    return function () {
      if (buttons[i].innerHTML === '÷') {
         result.innerHTML  += '/';
      } else if (buttons[i].innerHTML === 'x') {
         result.innerHTML  += '*';
      } else if (buttons[i].innerHTML === 'mod') {
         result.innerHTML  += '%';
      } else if (buttons[i].innerHTML === 'increment') {
         result.innerHTML++;
      } else if (buttons[i].innerHTML === 'decrement') {
         result.innerHTML--;
      } else {
            result.innerHTML += buttons[i].innerHTML;
        }
    };
  }
  
  function calculate(i) {
    return function () {
			var final_res = result.innerHTML;

			var bugFix = final_res.replace(/[\d.]+/g, function(n){ 
				return parseFloat(n);
			});
			  
      result.innerHTML = eval(bugFix);
    };
  };
};