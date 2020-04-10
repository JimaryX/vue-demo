function toDou(n){
    if(n<10){
        return '0'+n
    }else{
        return ''+n
    }
}
window.onload = function(){
    var img = document.getElementsByTagName("img");
    var oDate = new Date();
    var year = oDate.getFullYear();
    var month = oDate.getMonth()+1;
    var date = oDate.getDate();
    var day = oDate.getDay();


    var str =toDou(year)+toDou(month)+toDou(date)+day.toString();
    for(i=0;i<img.length;i++){
        img[i].src = 'image/' + str[i] + '.png'
    }
}
