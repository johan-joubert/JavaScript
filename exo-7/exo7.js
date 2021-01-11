

jsonDatas.forEach(element => {
    console.log(element);
})


let traduction = {
    "car": "voiture",
    "house": "maison",
    "game": "jeu",
    "videoGame": "jeux videos",
    "show": "spectacle"
}

jsonDatas.forEach(element => {
    element.translatedType = traduction[element.type];
})

console.log(jsonDatas);


let input = document.createElement('input');

document.body.append(input);

let button = document.createElement('button');

button.textContent = "Afficher type";

document.body.append(button);

let checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
document.body.append(checkbox);



let text = document.querySelector('input');


button.addEventListener('click', () => {

    for (var i = 0; i < jsonDatas.length; i++) {

        if (jsonDatas[i].translatedType === input.value || jsonDatas[i].type === input.value) {
            console.log(checkbox.checked);

            if (checkbox.checked) {

                for (var j = 0; j < jsonDatas[i].items.length; j++) {
                    if (jsonDatas[i].items[j].quantity > 0) {
                        console.log(jsonDatas[i].items[j]);
                    }
                }

            } else {

                jsonDatas[i].items.forEach(article => console.log(article))
            }
        }
    }
})

let articles= [];

for (var i = 0; i < jsonDatas.length; i++) {
    for (var j = 0; j < jsonDatas[i].items.length; j++) {

        articles.push(jsonDatas[i].items[j]);

    }
}


let buttonAsc = document.createElement('button');
buttonAsc.textContent = "Trier par ordre alphabétique";
document.body.append(buttonAsc);

let buttonDesc = document.createElement('button');
buttonDesc.textContent = "Trier par ordre désalphabétique";
document.body.append(buttonDesc);

let buttonPrice = document.createElement('button');
buttonPrice.textContent = "Trier par prix";
document.body.append(buttonPrice);


buttonAsc.addEventListener('click', () => {

    articles.sort( (a,b) => {

        if(a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    
    })
    
    console.log(articles);
  
})


buttonDesc.addEventListener('click', () => {

    articles.sort( (a,b) => {

        if(a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        return 0;
    
    })
    
    console.log(articles);
  
})

buttonPrice.addEventListener('click', () => {

    articles.sort( (a,b) => {

        if(a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    
    })
    
    console.log(articles);
  
})

let type = document.querySelector('#type');
let name = document.querySelector('#name');
let description = document.querySelector('#description');
let price = document.querySelector('#price');
let quantity = document.querySelector('#quantity');
let submit = document.querySelector('#submit');

f.addEventListener('submit', () => {
    
    let isArticleInserted = false;

    let newArticle = {
        "name": name.value,
        "description": description.value,
        "price": price.value,
        "quantity": quantity.value 
    } ;
    
    
    for (let i = 0; i < jsonDatas.length; i++) { 
        
            if (type.value == jsonDatas[i].type) {
    
                jsonDatas[i].items.push(newArticle);

                isArticleInserted = true;
    
            } 

    }

    if(isArticleInserted) {
        console.log('article inséré avec succès');
        console.log(jsonDatas);
    } else {
        console.log('article non inséré, famille inconnu');
    }

});


for (let i = 0; i < jsonDatas.length; i++) {
    for (let j = 0; j < jsonDatas[i].items.length; j++) {
        console.log(jsonDatas[i].items[j].contact);
    }
}





