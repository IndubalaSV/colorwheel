function submitForm() {
    // add fallback values as 0 to avoid errors
    const red = document.getElementById('red').value || 0;
    const green = document.getElementById('green').value || 0;
    const blue = document.getElementById('blue').value || 0;
    const pagebg = document.getElementById('pagebg').checked
    document.getElementById('colorbox').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    if (pagebg === true) {
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
        // This will reset it to the default background color
        document.body.style.backgroundColor = '';
    }
}
