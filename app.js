// using axios 

let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let info = await getResult();
    console.log(info);
    let p = document.querySelector("#info");
    p.innerText = JSON.stringify(info, null, 2);
});

let url3 = "https://randomuser.me/api/";

async function getResult() {
    try{
        let op = await axios.get(url3);
        return op.data.results[0];
    }
    catch(e){
        return "Not Deatils Found";
    }
}



// -----------------------------------------------------------------------------------------------------

let btn1 = document.querySelector("#btn");
btn1.addEventListener("click", async()=>{
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("#img");
    img.setAttribute("src",link);
    
});

let url4 = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
    try{
        let getImg = await axios.get(url4);
        return getImg.data.message;
    }
    catch(e){
        return "Image Not Found";
    }
}



// -----------------------------------------------------------------------------------------------------
// query string

let url6 = "http://universities.hipolabs.com/search?name=";
let btn3 = document.querySelector("#search");

btn3.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
    console.log(country);

    let collArr = await getColleges(country);
    console.log(collArr);
    show(collArr);
});

function show(collArr){
    let list = document.querySelector("#list");
    for(coll of collArr){
        console.log(coll.name);

        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let output = await axios.get(url6 + country);
        return output.data;
    } catch(error){
        console.log("error : ",error);
        return [];
    }
}
