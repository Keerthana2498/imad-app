console.log('Loaded!');
var button=document.getElementById('counter');
var counter=0;

button.onclick = function(){
    var request=new XMLhttpRequest(){
        request.onreadystatechange=function(){
            if(request==XMLhttpRequest.DONE){
                
                if(request.status == 200){
                var counter=request.respnsetext;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
       }
            }
        }
    }
}
