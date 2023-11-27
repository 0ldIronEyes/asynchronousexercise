let favoriteNumber = 5;
let baseURL = "http://numbersapi.com";


let response = await $.getJSON(`${baseURL}/${favoriteNumber}?json`);
console.log(response);


const favNumbers = [4,10,77];
let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
console.log(data);

let  facts=[];
for (let x =0;x < 4; x++)
{
    facts.append( await $.getJSON(`${baseURL}/${favoriteNumber}?json`));
}

facts.forEach(data => {
    document.body.append(`<div>${data.text}</div>`);
  });
