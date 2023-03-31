const Student={
    "Name":"Kiruthi",
    set changename(newname){
        this.Name=newname;
    }
};
Student.changename="Kiruthika";
console.log(Student.Name);