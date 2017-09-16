window.onload=function(){
    const images=['batman','batmanbyn','flash','flashbyn','superman','supermanbyn','wonder_woman','wonder_womanbyn'];
    
    images.forEach(function(image){
        const element=document.createElement('img');
        element.src= image+ '.png';
    })
    function mouseOver(){
        alert('Mouse sobre el hipervinculo');
    }
    image.addEventListener('mouseover', mouseOver);

    function mouseOut(){
        alert('Mouse salió del hipervinculo');
    }
    image.addEventListener('mouseout', mouseOut);
}

