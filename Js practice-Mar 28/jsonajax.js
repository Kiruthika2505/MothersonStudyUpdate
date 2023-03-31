document.querySelector("button").addEventListener('click',()=>{
    let xhr=new XMLHttpRequest();
    xhr.open("GET","sample.txt",true)
    xhr.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200){
        let output=xhr.responseText;
        console.log(output);
    }
}
    xhr.send();
});