function showScreen(screen){

let screens = document.querySelectorAll(".screen");

screens.forEach(s => s.style.display="none");

document.getElementById(screen).style.display="block";

}

showScreen("inbox");

function saveItem(){

let input = document.getElementById("captureInput").value;

if(input===""){
alert("Write something first");
return;
}

document.getElementById("savedMessage").innerText="Saved to myGENE inbox";

document.getElementById("captureInput").value="";

}

function askAI(){

let question = document.getElementById("chatInput").value;

let response = document.getElementById("chatResponse");

if(question.toLowerCase().includes("ofw")){

response.innerHTML = `
<p><strong>myGENE:</strong></p>
<p>You saved 3 OFW related items:</p>
<ul>
<li>OFW remittance idea</li>
<li>Balikbayan logistics concept</li>
<li>Article on digital remittance</li>
</ul>
`;

}

else{

response.innerHTML = `
<p><strong>myGENE:</strong></p>
<p>I found no related saved items yet.</p>
`;

}

}
