//----------create table--------------------------------------------------
var table = document.getElementById("table");
for(i=1;i<=9;i++){
    var tr=document.createElement("tr");
    tr.setAttribute("id","tr"+i);
    for(j=1;j<=9;j++){
        var td=document.createElement("td");
        td.setAttribute("id","td"+i+j);
        td.setAttribute("onclick","selected(this)");
        tr.appendChild(td);
    }
    table.appendChild(tr);  
}
//var game_page =  document.getElementById("game_page");
//game_page.style.display="none";
//------------------------------style table-----------------------------------------
for(i=1;i<=9;i++){
    document.getElementById("td"+i+"3").style.borderRightColor="black";
}
for(i=1;i<=9;i++){
    document.getElementById("td"+i+"6").style.borderRightColor="black";
}
//------------------------------------puzzles-----------------------------------------------------
var puz1 = [["",5,6,"",7,3,"",4,""],[4,"",3,5,"","",7,"",1],["","","",1,"",8,"","",5],["",7,"",6,"",1,"","",4],[8,1,9,"","",5,"",7,""],[5,"","",2,"","",9,"",""],[2,"",8,7,6,"","",5,""],["",4,"","",5,"",3,2,""],["",9,5,"","",2,"",6,""]];
//var list = [];
function puz(p){
for(i=1;i<=9;i++){
    for(j=1;j<=9;j++){
        document.getElementById("td"+i+j).innerHTML=p[i-1][j-1];
        if(p[i-1][j-1]!=""){
            document.getElementById("td"+i+j).style.backgroundColor="rgb(72, 177, 121)";
        }
        else{
            var inpt = document.createElement("input");
            inpt.setAttribute("type","number");
            inpt.setAttribute("id","inp"+i+j);
            inpt.setAttribute("onkeypress","if(this.value.length==1 ) return false;");
            inpt.addEventListener("input",updatevalue);
            inpt.addEventListener('change',function(){change(this)});
            document.getElementById("td"+i+j).appendChild(inpt);
            document.getElementById("td"+i+j).style.padding = "0 0";
        }
    }
}
}
puz(puz1);
//------------------------------find the error-----------------------------------------
 function updatevalue(e){
//-------------------------------horizontal-----------------------------------------
    var t = e.target
    t.style.color="black";
    if(t.value==0 || this.value=="-"){
        t.value="";
    }
        for(j=1;j<=9;j++){
            if((t.id>="inp"+j+"1"&&t.id<="inp"+j+"9")){
                for(i=1;i<=9;i++){

                    if((document.getElementById("td"+j+i).innerHTML==t.value)){
                        document.getElementById("td"+j+i).style.color="red";
                        
                        t.style.color="red";
                    }

                    else{
                        document.getElementById("td"+j+i).style.color="black";
                        
                    } 
                    if (document.getElementById("inp"+j+i) === null){
                        continue;
                    }
                    else if(document.getElementById("inp"+j+i).value==t.value && t.id!=("inp"+j+i)){
                        document.getElementById("inp"+j+i).style.color="red";
                        t.style.color='red';
                        
                    }
                    /*else if(t.value==""){
                       document.getElementById("inp"+j+i).style.color="black";
                    }*/
                }
            }
        }
        
//---------------------------------vertical--------------------------------------------------
    /*var n = t.id.slice(4,5);
    if(t.id>="inp1"+n&&t.id<="inp9"+n){
        for(i=1;i<=9;i++){
            if(document.getElementById("td"+i+n).innerHTML==t.value){
            document.getElementById("td"+i+n).style.color="red";
            t.style.color="red";
            }
            else{
                document.getElementById("td"+i+n).style.color="black";
            }
            if (document.getElementById("inp"+i+n) === null){
                continue;
               }
            else if((document.getElementById("inp"+i+n).value==t.value && t.id!=("inp"+i+n))){
                document.getElementById("inp"+i+n).style.color="red";
                t.style.color='red';
            }
            /*else if(document.getElementById("inp"+i+n).value!=t.value){
                document.getElementById("inp"+i+n).style.color="black";
            }
        }
    }
//----------------------------------every 3t3---------------------------------------
    var m =t.id.slice(3,4);
    for(v=1;v<=7;v+=3){
        for(s=1;s<=7;s+=3)
        if((n>=s&&n<=s+2)&&(m>=v&&m<=v+2)){
            for(i=v;i<=v+2;i++){
                for(j=s;j<=s+2;j++){
                    if(t.value==document.getElementById("td"+i+j).innerHTML){
                        document.getElementById("td"+i+j).style.color="red";
                        t.style.color="red";
                    }
                    else{
                        document.getElementById("td"+i+j).style.color="black";
                    }
                    
                    if (document.getElementById("inp"+i+j) === null){
                        continue;
                       }
                    else if((document.getElementById("inp"+i+j).value==t.value && t.id!=("inp"+i+j))){
                        document.getElementById("inp"+i+j).style.color="red";
                        t.style.color='red';
                    }
                   /* else if(document.getElementById("inp"+i+j).value!=t.value){
                        document.getElementById("inp"+i+j).style.color="black";
                    }
                }
            }
        }
    }*/
}
//------------------------------------------------------------------------------------------
function change(m){
    m.style.color="black";
//-------------------------------horizontal------------------------------------------------------      
    for(i=1;i<=9;i++){
        for(j=1;j<=9;j++){
            if(document.getElementById("td"+i+j).style.color=="red"){
                m.style.color="red";
            }
            document.getElementById("td"+i+j).style.color="black";
            
            if (document.getElementById("inp"+i+j) === null){
                continue;
            }
            else if(document.getElementById("inp"+i+j).style.color=="red"){
                m.style.color='red';
                
            }
            
        }
    }
//----------------------------------vaertical-----------------------------------------------
   /* var n = t.id.slice(4,5);
        if(document.getElementById("td"+i+n).style.color ==  'red'){
            m.style.color="red"; 
        }
        document.getElementById("td"+i+n).style.color="black";
//---------------------------------------every3t3---------------------------------
    var m =t.id.slice(3,4);
    for(v=1;v<=7;v+=3){
        for(s=1;s<=7;s+=3){
            for(i=v;i<=v+2;i++){
                for(j=s;j<=s+2;j++){
                    if(t.value==document.getElementById("td"+i+j).style.color=="red"){
                        m.style.color="red";
                    }
                    t.value==document.getElementById("td"+i+j).style.color=="black"
                }
            }
        }
    }*/
}


