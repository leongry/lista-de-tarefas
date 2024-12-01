const adicionarBtn = document.getElementById('adicionarBtn');
const novaTarefaInput = document.getElementById('novaTarefa');
const listaTarefas = document.getElementById('listaTarefas');

adicionarBtn.addEventListener('click', function() {
    const tarefaTexto = novaTarefaInput.value.trim();
    if (tarefaTexto === "") return;

    const li = document.createElement('li');
    li.classList.add('tarefa');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = tarefaTexto;

    const removerBtn = document.createElement('button');
    removerBtn.classList.add('remover');
    removerBtn.textContent = 'Remover';

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(removerBtn);

    listaTarefas.appendChild(li);

    novaTarefaInput.value = "";

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            label.style.textDecoration = 'line-through';
            label.style.color = '#777';
            removerBtn.style.display = 'none';
        } else {
            label.style.textDecoration = 'none';
            label.style.color = '#333';
            removerBtn.style.display = 'inline-block';
        }
    });

    removerBtn.addEventListener('click', function() {
        listaTarefas.removeChild(li);
    });
});
