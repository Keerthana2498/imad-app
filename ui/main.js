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
        request.open('GET','http://askcutir.imad.hasura-app.io/counter', true );
        request.send(null);
};

