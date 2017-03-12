/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

document.title = "JavaScript";
function fib(n){
  var div = document.createElement("div");
  var value;
  if(n < 2){
    if(n === 0){
      value = 0;
    }
    if(n === 1){
      value = 1;
    }
    var poop = document.createElement("p");
    poop.textContent = "Fib(" + n + ") = " + value;
    div.appendChild(poop);
    
    
  }
  else{
    var left = fib(n - 1);
    var right = fib(n - 2);
    value = right + left;
    var poop = document.createElement("p");
    poop.textContent = "Fib(" + n + ") = " + value;
    div.appendChild(poop);
  }
  document.body.appendChild(div);
  return value;
}
function trib(n){
    var value;
    var div = document.createElement("div");
    if(n < 3){
        if(n === 2){
            value = 1;
        }
        if(n === 1){
            value = 0;
        }
        if(n === 0){
            value = 0;
        }
        var par = document.createElement("p");
        par.textContent = "Trib(" + n + ") = " + value;
        div.appendChild(par);
    }
    else{
        var left = trib(n - 1);
        var mid = trib(n - 2);
        var right = trib(n - 3);
        value = left + right + mid;
        var par = document.createElement("p");
        par.textContent = "Trib(" + n + ") = " + value;
        div.appendChild(par);
    }
    document.body.appendChild(div);
    return value;
}
var val = fib(11);
var vad = trib(11);

