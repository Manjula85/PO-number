function result(number){
    var spanEl = document.querySelector('#po_number');
    spanEl.textContent = number;
}

async function newCompany(number){
    console.log('got the number',number);
    result(number);

}

//document.querySelector('#enter').addEventListener('click',newCompany);