console.log('Loaded!');
var button=document.getElementById('counter');


button.onclick = function(){
    var request=new XMLhttpRequest()
        request.onreadystatechange=function(){
            if(request==XMLhttpRequest.DONE){
                
                if(request.status == 200){
                var counter=request.respnsetext;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
       }
            }
        
        };
        request.open('GET','http://a
        askcutir.imad.hasura-app.io/counter', true );
        request.send(null);
};

var nameInput=document.getElementById("name");
var name= nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    var names=['name1', 'name2', 'name3'];
    list='';
    for(var i=0;i<names.length;i++){
        list += '<li>' + 'names[i]' + '</li>'
    }
var ul=document.getElementById("namelist");
ul.innerHTML=list;
    
};