var ul=document.getElementById('list');
var li;

var addButton=document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton=document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeAll=document.getElementById('reset');
removeAll.addEventListener('click', reset);

function addItem(){
  var input=document.getElementById('input');
  var item=input.value;
  var textnode=document.createTextNode(item)

  if(item === ''){
      return false;
      const myNewPara=document.createElement('p');
      myNewPara.textContent="Enter Your Todo";
      document.querySelector('body').appendChild(myNewPara);
      document.querySelector('button').addEventListener('click', (event)=>{
        event.target.textContent='I was Clicked';
      });
      
        setTimeout(()=>{
            input.parentNode.insertBefore(pTag, input.nextSibling);
        },9)
    }else{
      //create li
    //   ul=document.getElementById('list');
      li=document.createElement('li')
      //create checkbox
      var checkbox=document.createElement('input')
      checkbox.type='checkbox';
      checkbox.setAttribute('id', 'check');
      //create for label
      var label=document.createElement('label')
      label.setAttribute('for', 'item');
      ul.appendChild(label);
      li.appendChild(checkbox);
      label.appendChild(textnode);
      li.appendChild(label);
      ul.insertBefore(li, ul.childNodes[0]);

      setTimeout(()=>{ 
          li.className='visual';
      },4);
      input.value= '';
  }
  
};
function removeItem(){
    li=ul.children;
    for(let i=0; i< li.length; i++){
    while(li[i] && li[i].children[0].checked){
        ul.removeChild(li[i])
    }
    }
}
function reset(){
    li=ul.children;
    for(let i=0; i < li.length; i++){
    ul.removeChild(li[i]);
        i--;
    }
}