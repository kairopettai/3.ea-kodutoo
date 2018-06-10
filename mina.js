console.log('Mwahahahahahahahahahahahahahahahahaha!')

let filename = "mina1.jpg";

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs) {
    //let r = Math.floor(Math.random() * filenames.lenght);
    let file = filename;
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    console.log(url);
}