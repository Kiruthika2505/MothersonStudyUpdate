class company{
    constructor(name1)
    {
        this.name1=name1;
    }
    companyname(){
        return("Company name:"+this.name1);
    }
}
class employee extends company{
    constructor(name1,empname){
        super(name1);
        this.empname=empname;
    }
    result(){
        return this.companyname()+" "+"Employee name:"+this.empname;
    }
}
const emp=new employee("Motherson","Kiruthika");
console.log(emp.result());