let productItem = document.getElementsByClassName('yes');
let popup = document.getElementById('window');
// let bg = document.getElementById('h4').innerHTML = 'WELCOME TO BAGSTORE'


for(let i = 0; i<productItem.length;i++){
    productItem[i].addEventListener('click',function(){
    //  console.log(this.children[1].children[3].children[0].getAtribute('src'));
    // console.log(this.children[0].children[2].innerText)
    let image = this.children[1].children[3].children[0].getAttribute('src');
    let productNme = this.children[0].children[0].innerText;
    let price = this.children[0].children[2].innerText;
    let unit = Math.trunc(Math.random() *5)
    popup.children[0].children[0].setAttribute('src', image)
    popup.children[1].children[1].innerText = productNme;
    popup.children[1].children[2].innerText = price;
    popup.children[1].children[4].innerText = '+' + unit + ' available';
    popup.style.display = 'flex'
    })
}



popup.children[1].children[0].addEventListener('click', function(){
    popup.style.display = 'none'
})