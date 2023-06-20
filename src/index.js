document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form=document.getElementById('create-task-form');
  form.addEventListener('submit',function(e){
  e.preventDefault();
  // console.log(e.target.nth-of-type);
  const input=document.getElementById('new-task-description');
  input.value
  ///
  const li=document.createElement("li");
  
      const ol=document.getElementById('tasks');
      ol.appendChild(li);
      li.textContent=`${input.value} `;
      const deleteBtn=document.createElement("button");
      ///
  deleteBtn.addEventListener("click",function(e){
  e.target.parentNode.remove();
  })
  //
      li.appendChild(deleteBtn);
      deleteBtn.innerHTML="x";
      //
  form.reset();
  });
  
  
  function deleteAllTasks(){
  const removeAll=document.querySelector(".remove-all");
  removeAll.addEventListener('click',function(){
      const ol=document.getElementById('tasks');
      ol.innerHTML='';
  })}
  
  deleteAllTasks();
  
});
