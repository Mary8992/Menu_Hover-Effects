let list = document.querySelectorAll('.list li a');
list.forEach(link => {
    let letters = link.textContent.split("");
    link.textContent = "";
    letters.forEach((letter, i) => {
        i += 1;

        let span = document.createElement('span');
        let delay = i/15;

        let letterOut = document.createElement('span');
        letterOut.textContent = letter;
        letterOut.style.transitionDelay = `${delay}s`;
        letterOut.classList.add('out');
        span.append(letterOut);




        link.append(span);
    })
})