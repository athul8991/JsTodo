class CreateList{
    constructor(item,index){
        const itemContainer = document.createElement('div');
        const title = document.createElement('h2');
        const toolContainer = document.createElement('div');
        const del = document.createElement('i');

        itemContainer.classList.add('item-container');
        toolContainer.classList.add('tool-container')
        del.classList.add('fa-solid','fa-trash-can','fa-lg');

        title.innerHTML = item;
        title.onclick = this.fun;
        del.onclick = this.delete;

        toolContainer.appendChild(del);
        title.dataset.id = index;
        itemContainer.appendChild(title);
        itemContainer.appendChild(toolContainer);

        document.querySelector('#conrainer').appendChild(itemContainer);


    }
    delete(e){
        const selDel = e.target.parentElement.parentElement;
        selDel.remove();
    }
    fun(e){
        const selTitle = e.target.parentElement;
        console.log(selTitle);

        if(e.target.style.textDecoration =='line-through'){
            e.target.style.textDecoration ='none';
            e.target.style.color = 'rgb(89, 96, 66)';
           
        }else{
            e.target.style.textDecoration ='line-through';
            e.target.style.color ='red'
        }
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