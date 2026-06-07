const faqs = [
{
question:"what is ai",
answer:"Artificial Intelligence is the simulation of human intelligence by machines."
},
{
question:"what is machine learning",
answer:"Machine Learning is a subset of Artificial Intelligence."
},
{
question:"what is deep learning",
answer:"Deep Learning is a branch of Machine Learning that uses neural networks."
},
{
question:"what is nlp",
answer:"Natural Language Processing helps computers understand human language."
},
{
question:"what is data science",
answer:"Data Science involves extracting useful insights from data."
}
];

function sendMessage(){

let input=document.getElementById("userInput");

let userQuestion=input.value.toLowerCase().trim();

if(userQuestion===""){
return;
}

let chatbox=document.getElementById("chatbox");

chatbox.innerHTML +=
`<div class="user">You: ${userQuestion}</div>`;

let response="Sorry, I don't know the answer.";

for(let i=0;i<faqs.length;i++){

if(userQuestion.includes(faqs[i].question)){

response=faqs[i].answer;
break;

}

}

chatbox.innerHTML +=
`<div class="bot">Bot: ${response}</div>`;

chatbox.scrollTop=chatbox.scrollHeight;

input.value="";
}