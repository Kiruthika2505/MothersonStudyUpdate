function demo() {
    let nm = document.getElementById("t1");
    let sp = document.getElementById("spanid");
    var user = /^([a-z A-Z])+$/
    nm = nm.value;
    if (nm == "" || nm == null) {
        sp.innerHTML = "please fill the name";
    }
    else if (user.test(nm)) {
        sp.innerHTML = "Valid";
        sp.style.color = "green";
    }
    else {
        sp.innerHTML = "Not valid";
        sp.style.color = "red";
    }
}

function demo1() {
    let empid = document.getElementById("t11").value;
    let sp1 = document.getElementById("spanid1");
    let info1;
    empid = empid.value;
    if (empid != "") {
        info1 = "Ok";
    }
    else {
        info1 = "Enter the empid";
    }
    sp1.innerText = info1;
}
function demo2() {
    let des = document.getElementById("t2").value;
    let sp2 = document.getElementById("spanid2");
    pass = /^([A-Z a-z])+$/
    if (des == "" || des == null) {

        sp2.innerHTML = "No value";

    }
    else if (pass.test(des)) {
        sp2.innerHTML = "Valid info";
        sp2.style.color = "green";
    }
    else {
        sp2.innerHTML = "Not valid";
        sp2.style.color = "red";
    }
}
function tot_sal() {
    let bp = document.getElementById("t3").value;
    let hra = document.getElementById("t4").value = bp * 0.15;
    let da = document.getElementById("t5").value = bp * 0.10;
    let pf = document.getElementById("t6").value = bp * 0.5;
    bp = parseInt(bp);
    hra = parseInt(hra);
    da = parseInt(da);
    let np = document.getElementById("t8").value = (bp + hra + da);
    np=parseInt(np);
    pf=parseInt(pf);
    let gp = document.getElementById("t7").value = np - pf;

}
function sub() {
    let nm = document.getElementById("t1").value;
    let empid = document.getElementById("t11").value;
    let des = document.getElementById("t2").value;
    let bp = document.getElementById("t3").value;
    let hra = document.getElementById("t4").value;
    let da = document.getElementById("t5").value;
    let pf = document.getElementById("t6").value;
    let gp = document.getElementById("t7").value;
    let np = document.getElementById("t8").value;
    p1.innerText = ("Name:" + nm + "\n" + "Employeeid:" + empid + "\n" + "Designation:" + des + "\n" + "BasicPay:" + bp + "\n" + "HRA:" + hra + "\n" + "DA:" + da + "\n" + "PF:" + pf + "\n" + "Grosspay:" + gp + "\n" + "Netpay:" + np);
}