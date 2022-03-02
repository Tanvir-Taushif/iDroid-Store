//Search Function

function searchButton(){
    const catagory=document.getElementById('input').value;
    document.getElementById('input').value='';
    const url=`https://openapi.programming-hero.com/api/phones?search=${catagory}`;
    console.log(url);
}