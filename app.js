console.log("hello");

let countriesArrayList = [];
let index = "0";

function loadcountry() {
    let contrylist = document.getElementById("countrylist");
    let body = "";

    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(datalist => {

            countriesArrayList = datalist;

            datalist.forEach((element, index) => {
                //console.log(element);

                body += `<div class="col" data-aos="zoom-in" >
                            <div class="card shadow-sm"  >
                                <img src="${element.flags.png}"  alt="" >
                                <div class="card-body">
                                <p class="card-text" >This is a ${element.name.common}wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                    <button type="button" onclick="loadModalData(${index})" class="btn btn-sm btn-outline-secondary"data-bs-toggle="modal" data-bs-target="#exampleModal">View More</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small class="text-body-secondary">9 mins</small>
                                </div>
                                </div>
                            </div>
              
                        </div>
`
            });

            contrylist.innerHTML = body;


        })
}

loadcountry();




async function loadModalData(index) {
    console.log("Clickedddd");
    //console.log(countriesArrayList);
    // alert(index);

    let modelBody = document.getElementById("modal-body");
    console.log(countriesArrayList[index]);
    modelBody.innerHTML = `<img src="${countriesArrayList[index].flags.png}"  alt="" >`



}



function search() {
    let searchvalue = document.getElementById("txtSearch").value;

    console.log(searchvalue);


    fetch(`https://restcountries.com/v3.1/name/${searchvalue}`).then(res => res.json())
        .then(data => {
            console.log(data);

        })


}




