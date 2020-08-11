const inputBorderRadius = () => {
    const input = document.getElementById('input'),
        copyClipboard = document.getElementById('clipboard'),
        passive = document.querySelector('.passive');

    input.addEventListener('keydown', () => {
        if (event.code === 'Enter') {
            console.log(input.value.split(''));
            passive.style.borderRadius = `${input.value}px`;
        }
    })

    copyClipboard.addEventListener('click', () => {
        input.select();
        document.execCommand('copy');
    });
}
inputBorderRadius();


