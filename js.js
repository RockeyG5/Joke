const button1 = document.getElementById("Button");
console.log("The console prints this");

function test(){
    console.log("Button Working...");
    return 1;
}


button1.onclick = test();