const url = 'https://randomuser.me/api?results=50';
let url_new;
myFunction(); 
myFunction2();

function myFunction(){
    let btn = document.createElement("BUTTON");   
    btn.setAttribute("id", "button");    
    let text = document.createTextNode("Enter");      
    btn.appendChild(text);                                
    document.body.appendChild(btn);  
    btn.addEventListener('click', clickListener); 
}

function myFunction2(){ 
    let compare_b = document.createElement("BUTTON");   
    compare_b.setAttribute("id", "compare");    
    let text1 = document.createTextNode("Compare");      
    compare_b.appendChild(text1);                                
    document.body.appendChild(compare_b);  
    compare_b.addEventListener('click', clickListener1); 
}

function fetchWork(){
fetch(url_new)
    .then(function(response){
        return response.json(); //gets object 
    })
    .then(function(myJson){
        data = myJson; 
        createDivs(); 
    });
}

function clickListener(event){
    let number = document.getElementById("value").elements.namedItem("num").value;
    const form = document.getElementById("form"); 
    console.log(number);
    button.style.display = "none";
    value.style.display = "none";  
    let title = document.querySelector('#title'); 
    title.innerText = "Social Media"; 
    const qstring = "?results=" + number; 
    url_new = url.replace('50', number); 
    fetchWork(); 
    }


function createDivs(){
    for(let i = 0; i< data.results.length; i++){
    displayName(data.results[i]);
    }
}

function displayName(user){ 
    let element = document.createElement("div");
    element.setAttribute("id", "user");     
    let firstName = user.name.first; 
    let lastName = user.name.last; 
    let fullname = document.createElement("p");
    fullname.setAttribute("id", "name");    
    fullname.innerText = firstName + " " + lastName; 
    let gender1 = user.gender;
    gender = document.createElement('p');
    gender.setAttribute("id", "gender");     
    gender.innerText = gender1;  
    let email1 = user.email; 
    email = document.createElement("p");
    email.setAttribute("id", "email");     
    email.innerText = email1; 
    let picture1 = user.picture.thumbnail; 
    picture = document.createElement('img');
    picture.setAttribute("id", "profile_pic");     
    picture.src = picture1; 
    element.appendChild(picture);  
    element.appendChild(fullname); 
    element.appendChild(gender); 
    element.appendChild(email);
    document.body.appendChild(element); 
    everything.appendChild(element); 
}

function cleareverything(){ 
    let everything = document.querySelector('#everything'); 
    everything.innerHTML = ''; 
}
function clickListener1() {
    // console.log(data.results.map(x=>x.name.first));
    cleareverything();
    data.results.sort(function(a, b){
        let name1 = a.name.first;
        let name2 = b.name.first; 
        if(name1>name2){
            return 1;
        } 
        else{ 
            return -1; 
        }
        // return name1 - name2; 
    });
    createDivs();
}
