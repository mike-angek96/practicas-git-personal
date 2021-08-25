
let rombo=document.getElementById("rombo");
let timer= document.getElementById("cont");

let cont=1;
let timerForward=0;

setInterval(()=>{
    cont++;

    console.log(cont)
    rombo.style=`transform: rotate(${cont}deg);`;


},1000);


setInterval(()=>{
	timerForward++;
	cont.innerHTML=`${timerForward}`
},2000);


const data=[
    {
        "name":"miki",
        "age":22
    },
    {
        "name":"andrea",
        "age":29
    },
    {
        "name":"sebastian",
        "age":78
    },
    {
        "name":"anthony",
        "age":24
    },
    {
        "name":"qutberto",
        "age":28
    }
];
let divData=document.getElementById("data");
let input='';

data.map((datos)=>{
    input+=`
    <li>${datos.name}</li>
    <li>${datos.age}</li>
    `;
});

divData.innerHTML=input;