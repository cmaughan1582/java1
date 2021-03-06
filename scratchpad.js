/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

document.title = "JavaScript";

var style = document.createElement("style");
style.textContent =

"#twotree{" +
"		display: inline-block;" +
"		width: 15000px;" +
"}" +
"#threetree{" +
"    display: inline-block;" +
"    width: 28000px;" +
"}" +
".twotree {" +
"		background-color: rgba(204,0,102,0.1);" +
"		" +
"}" +
".twoleft {" +
"		float: left;" +
"		display: inline-block;" +
"		margin-right: 4px;" +
"}" +
"	 " +
".tworight {" +
"		float: right;" +
"		display: inline-block;" +
"		margin-left: 4px;" +
"}" +
".threeleft{" +
"    float: left;" +
"    display: inline-block;" +
"    margin-right: 4px;" +
"}" +
".threecenter{" +
"    float: left;" +
"    display: inline-block;" +
"    margin-left: 4px;" +
"    margin-right: 4px;" +
"}" +
".threeright{" +
"    float: right;" +
"    display: inline-block;" +
"    margin-left: 4px;" +
"}" +
".maindiv1{" +
"    background: rgb(98, 214, 232);" +
"    text-align: center;" +
"}" +
".maindiv2{" +
"    background: rgb(85, 246, 36);" +
"    text-align: center;" +
"}" +
".maindiv3{" +
"    background: rgb(246, 190, 36);" +
"    text-align: center;" +
"}";
document.querySelector('body').appendChild(style);

function fib(n){
  var div = document.createElement("div");
  div.setAttribute("class", "twotree");
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
    var cals = left.html.getAttribute("class");
    left.html.setAttribute("class", cals + " twoleft");
    
    var right = fib(n - 2);
    cals = right.html.getAttribute("class");
    right.html.setAttribute("class", cals + " tworight");
    
    value = right.value + left.value;
    
    var poop = document.createElement("p");
    poop.textContent = "Fib(" + n + ") = " + value;
    div.appendChild(poop);
    
    div.appendChild(left.html);
    div.appendChild(right.html);
  }
  return {'value': value, 'html': div};
}
function fibTree(n , node){
    var display = fib(n);
    node.appendChild(display.html);
    node.setAttribute("id", "twotree")
}

function trib(n){
    var value;
    var div = document.createElement("div");
    div.setAttribute("class", "twotree");
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
        var cals = left.html.getAttribute("class");
        left.html.setAttribute("class", cals + " threeleft");
        
        var mid = trib(n - 2);
        cals = mid.html.getAttribute("class");
        mid.html.setAttribute("class", cals + " threecenter");
        
        var right = trib(n - 3);
        cals = right.html.getAttribute("class");
        right.html.setAttribute("class", cals + " threeright");
        
        value = left.value + right.value + mid.value;
        var par = document.createElement("p");
        par.textContent = "Trib(" + n + ") = " + value;
        div.appendChild(par);
        
        div.appendChild(left.html);
        div.appendChild(mid.html);
        div.appendChild(right.html);
        
    }
    return {'value': value, 'html': div};
}
function tribTree(n, node){
    var display = trib(n);
    node.appendChild(display.html);
    node.setAttribute("id", "threetree");
    
}
function pell(n){
    var value;
    var div = document.createElement("div");
    div.setAttribute("class", "twotree");
    if(n < 2){
        if(n === 1){
            value = 1;
        }
        if(n === 0){
            value = 0;
        }
        var para = document.createElement("p");
        para.textContent = "Pell(" + n + ") = " + value;
        div.appendChild(para);
    }
    else{
        var left = pell(n-1);
        var cals = left.html.getAttribute("class");
        left.html.setAttribute("class", cals + " twoleft");
        
        var right = pell(n-2);
        cals = right.html.getAttribute("class");
        right.html.setAttribute("class", cals + " tworight");
        
        value = 2*left.value + right.value;
        
        var para = document.createElement("p");
        para.textContent = "Pell(" + n + ") = " + value;
        div.appendChild(para);
        
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return {'value': value, 'html': div};
}
function pellTree(n, node){
    var display = pell(n);
    node.appendChild(display.html);
    node.setAttribute("id", "twotree");
}

var divMaker = function(id, n) {
	return function() {
		var div = document.createElement('div');
		div.setAttribute('class', 'maindiv' + n);
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
}

var fibDiv = divMaker("twotree", 1);
var pellDiv = divMaker("twotree", 2);
var tribDiv = divMaker("threetree", 3);
fibDiv();
pellDiv();
tribDiv();
fibTree(11, document.querySelector(".maindiv1"));
pellTree(11, document.querySelector(".maindiv2"));
tribTree(11, document.querySelector(".maindiv3"));
function createLink(){
    var break1 = document.createElement("br");
    var break2 = document.createElement("br");
    var link = document.createElement("a");
    link.href = "https://oeis.org/A000045"; 
    link.text = "Fibonacci Numbers";
    link.target = "_blank";
    var link2 = document.createElement("a");
    link2.href = "https://oeis.org/A000129"; 
    link2.text = "Pell Numbers";
    link2.target = "_blank";
    var link3 = document.createElement("a");
    link3.href = "https://oeis.org/A000073"; 
    link3.text = "Tribonacci Numbers";
    link3.target = "_blank";
    document.body.appendChild(link);
    document.body.appendChild(break1);
    document.body.appendChild(link2);
    document.body.appendChild(break2);
    document.body.appendChild(link3);
}
createLink();