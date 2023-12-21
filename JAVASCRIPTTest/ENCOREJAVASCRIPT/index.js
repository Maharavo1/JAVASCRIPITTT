window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const list_el = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert('Hey, il faut que tu écrives quelque chose');
    } else {
      console.log('Success');
    }

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');
    task_content_el.innerText = task;

    const task_action_el = document.createElement('div');
    task_action_el.classList.add('actions');

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerHTML = 'Delete';


    list_el.appendChild(task_el);
    task_el.appendChild(task_content_el);
    task_el.appendChild(task_action_el);
    task_action_el.appendChild(task_delete_el);

     input.value = "";


task_delete_el.addEventListener('click' , () => {
  list_el.removeChild(task_el);
});

  });
});
