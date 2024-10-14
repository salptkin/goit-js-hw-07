const nameInput = document.querySelector('#name-input');
const nameOutPut = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    const name = nameOutPut.textContent = event.target.value;

    if (name === '') {
        nameOutPut.textContent = 'Anonymous';
    } else {
        nameOutPut.textContent = name;
    }
})

