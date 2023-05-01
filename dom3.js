const group = document.querySelector('.group');
const output = document.querySelector('.output');

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];


group.innerHTML = sizes.map((size)=>
    `<div>
    <input type="radio" id="${size}" value="${size}" name="size">
    <label for="${size}">${size}</label>
    </div>`
).join(' ');




function ShowOutput(e){
    //console.log(e);

    if (this.checked){
        document.querySelector('.output').innerHTML = `You selected ${this.value}`;

    }
}
