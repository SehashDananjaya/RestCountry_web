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
                                    <p> <strong>Country Name:</strong> ${element.name.common} <br>
                                        <strong>Official Name:</strong> ${element.name.official} <br>
                                        <strong>Capital:</strong> ${element.capital ? element.capital[0] : "N/A"} <br>
                                        <strong>Region:</strong> ${element.region} <br>
                                        <strong>Population:</strong> ${element.population.toLocaleString()} <br> </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" onclick="loadModalData(${index})" class="btn btn-sm btn-outline-secondary"data-bs-toggle="modal" data-bs-target="#exampleModal">View Flag</button>
                                            
                                        </div>
                                        
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
    modelBody.innerHTML = `<img src="${countriesArrayList[index].flags.png}"  alt="" >
    
                `



}



function search() {
    let searchvalue = document.getElementById("txtSearch").value;

    //console.log(searchvalue);


    fetch(`https://restcountries.com/v3.1/name/${searchvalue}`).then(res => res.json())
        .then(data => {
            //console.log(data);

            let modelBody = document.getElementById("modal-body");
            console.log(data[0].name.common);
            modelBody.innerHTML = `<br> <img src="${data[index].flags.png}"  alt="" >
            <br>
            <strong>Country Name:</strong> ${data[0].name.common} <br>
                 <strong>Official Name:</strong> ${data[0].name.official} <br>
                <strong>Capital:</strong> ${data[0].capital ? data[0].capital[0] : "N/A"} <br>
                <strong>Region:</strong> ${data[0].region} <br>
                <strong>Population:</strong> ${data[0].population.toLocaleString()} <br>`



        })


}




