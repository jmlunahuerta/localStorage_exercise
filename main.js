var image = [];
image = prompt("Dime la URL de tu imagen favorita");


function showImage() {
    var img = document.createElement("IMG");
    img.src = image;
    $('.image-container').html(img); 
}

localStorage.setItem("image", JSON.stringify(image));

var storedImages = JSON.parse(localStorage.getItem("image"));