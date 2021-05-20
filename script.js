var row=1;
var entry=document.getElementById("entry");
entry.addEventListener("click",displaydetails);


function displaydetails()
{
var Uscity=document.getElementById("Uscity").value;
var State=document.getElementById("State").value;
var Population=document.getElementById("Population").value;

if(!Uscity || !State|| !Population) {
    alert("please fill all the inputs");
    return;
}

var display=document.getElementById("display");

var newRow =display.insertRow(row);
 
var cell1=newRow.insertCell(0);
var cell2=newRow.insertCell(1);
var cell3=newRow.insertCell(2);

cell1.innerHTML=Uscity;
cell2.innerHTML=State;
cell3.innerHTML=Population;
document.getElementById("Uscity").value=""
document.getElementById("State").value=""
document.getElementById("Population").value=""
row++;


}
var th=document.getElementsByTagName("th");

for(let c=0;c <th.length;c++)
{
    th[c].addEventListener('click',item(c))
}

function item(c){
    return function(){
        console.log(c)
        SortTable(c);
    }
}

function SortTable(c){
    var table,rows,switching,i,x,y,shouldSwitch,TD;
    table=document.getElementById("display");
    switching=true;
    while(switching){
        switching=false;
        rows=table.rows;
        for(i=1;i<(rows.length-1);i++){
            shouldSwitch=false;
            x=rows[i].getElementsByTagName("TD")[c];
            y=rows[i+1].getElementsByTagName("TD")[c];

            if(x.innerHTML.toString().toLowerCase()> y.innerHTML.toString().toLowerCase()){
                shouldSwitch=true;
                break;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1],rows[i])
            switching=true;

        }
    }
}