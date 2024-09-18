function submitForm() {
    const red = document.getElementById('red').value || 0;
    const green = document.getElementById('green').value || 0;
    const blue = document.getElementById('blue').value || 0;
    document.getElementById('colorbox').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    //document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
