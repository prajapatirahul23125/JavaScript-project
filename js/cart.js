total = document.getElementById("total")

let ul=document.getElementById('list');
const cart=()=>{
    
    let getdata=JSON.parse(localStorage.getItem("myData"));
    console.log("getdata====",getdata);
    let totalvalue = 0;

    getdata.forEach(data => {
        ul.innerHTML+=` <li class="p-3 d-flex justify-content-between align-items-center list-item">
        <div class="col-1">
            <div class="cart-img">
                <img src="${data.thumbnail}" alt="image">
            </div>
        </div>
        <div class="col-7">
            <div class="cart-name">
            <h2>${data.title}</h2>
            </div>
        </div>
        <div class="col-2">
            <div class="cart-price">
                <p> ${data.price}</p>   
            </div>
        </div>
        <div class="col-2">
            <a href="#" class="button text-decoration-none" onclick="return deletes(${data.id})">
            Remove
            </a>
        </div>
    </li>`;
        totalvalue +=data.price;
    });
    total.innerHTML = "Total value="+"$"+totalvalue
    // console.log(totalvalue);
}
cart();

const deletes = (id) => {

    let deleteCart = JSON.parse(localStorage.getItem("myData"))
    let deleteArr = [];
    
    deleteCart.filter((cartvalue) => {

        if (cartvalue.id != id) {

            deleteArr.push(cartvalue);
        }
        
    });
   
    localStorage.setItem('myData', JSON.stringify(deleteArr));
    ul.innerHTML = ``;
    cart();
    
};


