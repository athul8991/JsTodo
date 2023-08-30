class CreateList{
    constructor(item,index){
        const itemContainer = document.createElement('div');
        const title = document.createElement('h2');

        itemContainer.classList.add('item-container');
        title.innerHTML = item;
        title.onclick = this.fun;

        title.dataset.id = index;
        itemContainer.appendChild(title);

        document.querySelector('#conrainer').appendChild(itemContainer);


    }
    fun(e){
        console.log(e.target.getAttribute('data-id'));
    }
}


// new CreateList('name')
let item= document.getElementsByClassName('item-container');
let arr =[];

arr.forEach((data,index)=>{
    new CreateList(data,index);
})
for(let i =0;i<item.length;i++ ){
    // item[i].addEventListener('click',(e)=>{
    //     console.log(e.target);
    // })
}



const btn = document.querySelector('#btn');
const inText = document.querySelector('#inptext');
btn.onclick = ()=>{
    // e.preventDefault();
    if(inText.value){
        let length = arr.length;
        new CreateList(inText.value,length);
        arr.push(inText.value)
        inText.value ='';

    }else{
        console.log('no value');
    }

}