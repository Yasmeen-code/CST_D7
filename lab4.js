const data = ['1', '1', '3', '4', '5', '6', '7'];

const container = document.getElementById('dataContainer');

data.forEach((item, index) => {
    const p = document.createElement('p');
    p.textContent = item;
    if (index % 2 === 0) {
        p.classList.add('even');
    } else {
        p.classList.add('odd');
    }
    container.appendChild(p);
});
