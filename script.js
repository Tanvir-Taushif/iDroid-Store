//Search Function

let searchKey; //Taking the value of the Searched Phone
const searchButton=()=>{
    const catagory=document.getElementById('input').value;
    document.getElementById('input').value='';
    searchKey=catagory;
    const url=`https://openapi.programming-hero.com/api/phones?search=${catagory}`;

    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data.data));
}
// Showing search result in the UI

const searchResult= data =>{
    const searchResult=document.getElementById('search-result');
    searchResult.textContent='';
    const length=data.length;
    data.slice(0,20).forEach(element => {
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
            <div  class="card p-2 cards d-flex align-items-center">
                <img src="${element.image}" class="img-fluid" alt="..." heigth="300" width="200">
                <div class="card-body">
                  <h4 class="card-title fw-bold">${element.phone_name}</h4>
                  <h5 class="fw-bold">${element.brand}</h5><br>
                  <button class="btn button">Details</button>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
    if(length>20){
        const extraDiv=document.getElementById('extraSearch');
        const a=document.createElement('div');
        extraDiv.innerHTML=`
        <a class="navButton" onclick="showMore()" id="moreButton">Show More  <i class="fa-solid fa-arrow-right"></i></a><br><br>
        `;
        extraDiv.appendChild(a);
    }
} 

const showMore=()=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => moreDisplay(data.data));
}

// Show More Function
const moreDisplay=data=>{
    const searchResult=document.getElementById('search-result');
    const length=data.length;
    data.slice(20,length-1).forEach(element=>{
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
            <div  class="card p-2 cards d-flex align-items-center">
                <img src="${element.image}" class="img-fluid" alt="..." heigth="300" width="200">
                <div class="card-body">
                  <h4 class="card-title fw-bold">${element.phone_name}</h4>
                  <h5 class="fw-bold">${element.brand}</h5><br>
                  <button class="btn button">Details</button>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
    const extraDiv=document.getElementById('extraSearch');
    const a=document.getElementById('moreButton');
    extraDiv.removeChild(a);
}