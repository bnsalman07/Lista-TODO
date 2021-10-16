// JavaScript Document
const input = document.querySelector('.texto-entrada');
const add = document.querySelector('.add');
const ul = document.querySelector("ul");
const alerta = document.querySelector('.Alerta');

add.addEventListener("click", (e) =>{
	e.preventDefault();
	const text = input.value;
	
	if(text.length>=6){
	alerta.style.color="white";
	const li = document.createElement("li");
	const br = document.createElement('br');
	const check = document.createElement("input");
	const span = document.createElement("span");
	li.className="lli";
	span.className="texto";
	span.textContent=text;
	
	check.className="verificar";
	check.type="checkbox";
	ul.appendChild(br);
	li.appendChild(check);
	li.appendChild(span);
	li.appendChild(EliminarElemento());
	ul.appendChild(li);
	input.value="";
	}
	else {input.value="";
	alerta.style.color="red";}
})

function EliminarElemento(){
	const borrar =document.createElement("button");
	borrar.className="borrar";
	borrar.type="reset";
	borrar.textContent="-";
	
	borrar.addEventListener('click', (e) =>{
		const item =e.target.parentElement;
		ul.removeChild(item);
		
	})
	return borrar;
}


function EliminarSeleccionados(){
	var boxes = document.getElementsByClassName('verificar');
	var eliminates = document.getElementsByClassName('lli');
    for(var i = 0; i<=boxes.length; i++){
       var box = boxes[i];
		var eliminate = eliminates[i];
        if(box.checked){
			eliminate.parentNode.removeChild(eliminate)
        }
    }
}
