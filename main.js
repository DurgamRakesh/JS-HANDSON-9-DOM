let id = document.getElementById('text')
console.log(id);
//<------------------------------------------------------------->

let tagname = document.getElementsByTagName('h1')
console.log(tagname);

//<------------------------------------------------------------->

let classname = document.getElementsByClassName('box')
console.log(classname);

//<------------------------------------------------------------->

let newv = document.getElementById('h3-tag').textContent = 'Hello World'
console.log(newv);

//<------------------------------------------------------------->

function change(){
    let newflex = document.getElementById('main-container')

    if(newflex.style.flexDirection == 'row'){
        console.log('row');
        newflex.style.flexDirection = 'column'
    }
    else{
        newflex.style.flexDirection = 'row'
        console.log('c');
    }
}

//<------------------------------------------------------------->

let head = document.querySelector('h1')
 head.setAttribute('id','heading')
 document.getElementById('heading').style.color = 'red'

//<------------------------------------------------------------->

 document.querySelector('#btn2').addEventListener('click' , () => {
    document.querySelector('#para').textContent = 'Welcome to Elevation Academy'
 })

//<------------------------------------------------------------->

 function time(){

    let date = new Date();
    let hours = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()

    document.getElementById("min").innerHTML = mins + ":"
    document.getElementById("sec").innerHTML = secs 
    if(hours < 10){
        hours = '0' + hours
    }
    if(mins < 10){
        mins = '0' + mins
    } 
    if(hours > 12){
        hours = hours - 12
    document.getElementById("ap").innerHTML = "PM"
    }else{
    document.getElementById("ap").innerHTML = "AM"
    }
    document.getElementById("hrs").innerHTML = hours + ":"
    
 }setInterval(time,1000)


//<------------------------------------------------------------->

document.querySelector('#newbtn').addEventListener('click' , () => {
     newvalue = document.querySelector("#select")
     a = newvalue.options[newvalue.selectedIndex].value;
    document.querySelector("#selectedyear").textContent = a

})
    





