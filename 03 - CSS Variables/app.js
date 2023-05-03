const allInputs = document.querySelectorAll('input');
console.log(allInputs);



allInputs.forEach(item => {

    item.addEventListener('change', handleUpdate)
});


function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    console.log(suffix);
    let x = document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    console.log(this.value)
}


