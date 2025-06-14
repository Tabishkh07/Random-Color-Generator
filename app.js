let btn = document.querySelector('button');
btn.addEventListener("click", function(){
    // change value of h3 to rgb
    let h3 = document.querySelector('h3');
    let random = getRandom();
    h3.innerText = random;
    h3.style.color = random;

    let div = document.querySelector("div");
    div.style.backgroundColor = random;

});

function getRandom(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}