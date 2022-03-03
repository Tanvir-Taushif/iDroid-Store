//Search Function

const searchButton=()=>{
    const catagory=document.getElementById('input').value;
    document.getElementById('input').value='';
    const url=`https://openapi.programming-hero.com/api/phones?search=${catagory}`;

    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data.data));
}
// Showing search result in the UI

const searchResult= data =>{
    const searchResult=document.getElementById('search-result');
    data.forEach(element => {
        console.log(element);
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
} 