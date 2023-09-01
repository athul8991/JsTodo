class CreateList{
    constructor(item,index){
        this.createElement(item,index);
       
    }
    createElement(item,index){
        const itemContainer = document.createElement('div');
        const title = document.createElement('h2');
        const toolContainer = document.createElement('div');
        const del = document.createElement('h4');
        const edit = document.createElement('h4');
        const mark = document.createElement('h4');
        const menuTool = document.createElement('div');

        
        menuTool.classList.add('menu-tool');
        itemContainer.classList.add('item-container');
        toolContainer.classList.add('tool-container')
        // del.classList.add('fa-solid','fa-trash-can','fa-lg');
        del.textContent ="Delete";
        edit.textContent="Edit";
        mark.textContent="Mark";

        title.innerHTML = item;
        title.onclick = (e)=>{
            this.fun(e);
        }

        // title.document.addEventListener('focusout',(e)=>{
        //     // focusOutFunct(e);
        //     console.log("hello");
            
        // })

        // title.setAttribute('onfocusout','focusOutFunct(e)')
        del.onclick = this.delete;


        menuTool.appendChild(del);
        menuTool.appendChild(edit);
        menuTool.appendChild(mark);
        title.dataset.id = index;
        itemContainer.appendChild(title);
        itemContainer.appendChild(menuTool);

        document.querySelector('#conrainer').appendChild(itemContainer);
    }
    
    delete(e){
        const selDel = e.target.parentElement.parentElement;
        selDel.remove();
    }

     toolMenuToggle (id){

        const menuItems = id.parentElement.parentElement.children;
        // console.log(menuItems);

        for(let i=1;i<menuItems.length;i++){
            if(id.style.display !='block'){
            menuItems[i].children[1].style.display ='none';
            }
        }

        if( id.style.display =='block'){
            id.style.display = 'none';
        }else{
            id.style.display = 'block';

        }
        // console.log('hh');
    }

   flag = true;
    fun(e){
        // const selectAllItem = document.querySelectorAll('.tool-container');
        // console.log(selectAllItem);
        const selTitle = e.target.parentElement.children[1];

        this.toolMenuToggle(selTitle);
        if(e.target.style.color == 'red'){
            e.target.style.color = 'rgb(89, 96, 66)';
        }else{
            e.target.style.color ='red';
        }
        // if(e.target.style.textDecoration =='line-through'){
        //     e.target.style.textDecoration ='none';
        //     e.target.style.color = 'rgb(89, 96, 66)';
           
        // }else{
        //     e.target.style.textDecoration ='line-through';
        //     e.target.style.color ='red'
        // }
    }

    

    
}


// new CreateList('name')
let item= document.getElementsByClassName('item-container');
let arr =['item 1','item 2','item 3',];

arr.forEach((data,index)=>{
    new CreateList(data,index);
})
// for(let i =0;i<arr.length;i++ ){

// }

function focusOutFunct(e){
    console.log("Focus out");
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