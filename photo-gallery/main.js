function imagesLoad(id){
    let file_name;
    switch (id){
        case "carGalleryP":
            console.log("yo")
            file_name = "car";
            break
        case "backgroundGalleryP":
            file_name = "background"
            break
        case "flowerGalleryP":
            file_name = "flower"
            break
        default:
            file_name = "car"
    }
    let tr;
    let ele = document.getElementById("listImageTable");
    if (ele.children.length > 1){
        //let elem = document.createElement("Table")
        for(let r = 0;r <= ele.lastChild.id;r += 4){
            ele.removeChild(document.getElementById(r))
        }
    }
    for(let d = 0; d < 9; d++){      
        let td = document.createElement("td");
        let img = document.createElement("img");
        td.className = "ImageItem";
        td.setAttribute("id","ImageItem")
        img.className = "image";
        img.src = `images/${file_name}-${d}.jpg`;
        td.appendChild(img);
        if (d % 4 == 0){
            tr = document.createElement("tr");
            tr.setAttribute("id",d)
            tr.appendChild(td);
            ele.appendChild(tr);
            ele.style.height = `${d * 100}px`;   
        } else {
            tr = ele.lastChild;
            tr.appendChild(td);
        }
        }
    }

imagesLoad();
rightSideList.onclick = function (eve){
    let id = eve.target.id;
    console.log(id)
    if (id){
        imagesLoad(id)
    }
};
