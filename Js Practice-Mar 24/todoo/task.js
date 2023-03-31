function addelement() {

    let table = document.getElementById("table");
    let fn = document.getElementById("fn");
    let ln = document.getElementById("ln");
    let city = document.getElementById("city");

    if (fn.value != "" && ln.value != "" && city.value != "") {
        
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        let p4 = document.createElement("input");

        td1.innerHTML = fn.value;
        td2.innerHTML = ln.value;
        td3.innerHTML = city.value;

        p4.style.cursor = "pointer";
        p4.style.border = "none"
        p4.type = "button";
        p4.value = "Delete";
        p4.onclick = function () {
            table.removeChild(tr);
        }


        td4.appendChild(p4);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        table.appendChild(tr);
    }
    else {
        alert("Enter the value");
    }
    fn.value = "";
    ln.value = "";
    city.value = "";

}