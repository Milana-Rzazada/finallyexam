

async function fetchUsers() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const cards = document.querySelector(".cards")
    for (let i = 0; i < 3; i++) {
  
        let card = document.createElement("div");

        console.log(cards);
        let image = document.createElement("img");
        let text = document.createElement("p");
        let content = document.createElement("span");

        image.src = data[i].flags.png;
        card.appendChild(image);

        text.innerHTML = "Country name: " + data[i].name.common;
        card.appendChild(text);

        content.innerHTML = "Country population: " + data[i].population;
        card.appendChild(content);
        console.log(card);

        cards.appendChild(card);
        cards.classList.add("cards");
        card.classList.add("card");


        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.addEventListener('click', function (e) {
            card.remove()

        });
        btn.classList.add("btn2");
        card.appendChild(btn);


        let editbtn = document.createElement('button');
        editbtn.innerHTML = "Edit";
        editbtn.addEventListener('click', function (e) {
            let inputs = document.createElement("input");
            const add = document.createElement('button');
            add.innerHTML = "Add";
            card.appendChild(inputs);
            card.appendChild(add);
            inputs.addEventListener("keyup", function (e) {
                content.innerHTML = '';
                content.innerHTML =" Country population: "+ inputs.value;
            })
            add.addEventListener("click", function (e) {
              
                add.style.display = "none";
                inputs.style.display = "none";
            })

        })
        card.appendChild(editbtn);

        editbtn.classList.add("btn2")

    }

    const createbtn = document.createElement('a');
    createbtn.innerHTML="Create";
    createbtn.addEventListener('click' , function(e){
        createbtn.href = "./form.html";    
    
    });
    const sort = document.createElement('a');
    sort.innerHTML="Sort";
    sort.addEventListener('click' , function(e){
        sort.href = "./sort.html";    
    
    });
    cards.appendChild(sort);
    sort.classList.add("btn2");
    sort.classList.add("create");

    cards.appendChild(createbtn);
    createbtn.classList.add("btn2");
    createbtn.classList.add("create");
 
    
    
}
fetchUsers();




