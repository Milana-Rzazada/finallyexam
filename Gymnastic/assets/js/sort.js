// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = fruits;

// fruits.sort();
// document.getElementById("demo2").innerHTML = fruits;


async function fetchUsers() {
    const response = await fetch("http://localhost:3000/comments");
    const data = await response.json();
   
        const sortedResponse = data.sort(function(a, b) { return parseInt(a.id) - parseInt(b.id) });
       document.body.innerHTML = sortedResponse;
     
    
 
    console.log(sortedResponse);


}
fetchUsers()