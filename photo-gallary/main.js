let num_file = 0;
let tr;
let ele = document.getElementById("listImageTable");
for(let d = 0; d < 11; d++){
    
    let td = document.createElement("td");
    let img = document.createElement("img");
    td.className = "ImageItem";
    img.className = "image";
    img.src = `images/images_${d}.jpg`;
    td.appendChild(img);
    if (d % 4 == 0){
        tr = document.createElement("tr");
        tr.appendChild(td);
        ele.appendChild(tr);
        ele.style.height = `${d * 100}px`;   
    } else {
        tr = ele.lastChild;
        tr.appendChild(td);
    }
}
function colorChange(ele){
    let r = Math.floor(Math.random()*300);
    let b = Math.floor(Math.random()*300);
    let g = Math.floor(Math.random()*300);
    ele.style.color = `rgb(${r},${b},${g})`}



