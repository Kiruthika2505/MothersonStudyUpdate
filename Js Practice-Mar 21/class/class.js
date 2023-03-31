class demo{
    constructor(firstname,lastname,year){
        this.firstname=firstname;
        this.lastname=lastname;
        this.year=year;
    }
    age(){
        const date=new Date();
        return date.getFullYear()-this.year;

    }
}
const name1=new demo("Kiruthika","Venkatachalam",2001);
document.getElementById("p1").innerHTML=name1.firstname+" "+name1.lastname+" "+name1.age();