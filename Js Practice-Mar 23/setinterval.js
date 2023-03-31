let count = 0;
// function creation
function increaseCount(){
    // increasing the count by 1
    count += 1;
    console.log(count);
}
setInterval(increaseCount,2000);
