const revealButton = document.getElementById('revealButton');
const secret = document.getElementById('ticketSecret');

if(revealButton){
    revealButton.addEventListener('click', () =>{
        secret.style.display = secret.style.display === 'block' ? 'none' : 'block';
    });
}

const revealButton2 = document.getElementById('sexy-button')
const secret2 = document.getElementById('sexy-reveal')

if(revealButton2){
    revealButton2.addEventListener('click', () =>{
        secret2.style.display = secret2.style.display === 'block' ? 'none' : 'block';
    });
}

const confettiButton = document.getElementById('confettiButton');

confettiButton.addEventListener('click', () => {
    for(let i = 0; i < 50; i++){
        const confetti = document.createElement('img');
        confetti.src ='images/hampter.jpeg'
        confetti.className = 'confetti';
        confetti.style.position = 'fixed';
        confetti.style.top = '-20px';
        // confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.width = '100px';
        confetti.style.height = '100px';
        confetti.style.opacity = 0.9;
        confetti.style.transition = 'transform 3s linear, top 3s ease-out';
        document.body.appendChild(confetti);
        const numColumns = 10;
        const columnWidth = 100 / numColumns;

        const col = Math.floor(Math.random() * numColumns);
        confetti.style.left = (col * columnWidth + columnWidth / 2 ) + 'vw';

        requestAnimationFrame(() =>{
            confetti.style.top = '100vh';
            confetti.style.transform = `translateY(100vh) rotate(${Math.random() * 720}deg)`;
        });

        setTimeout(() => confetti.remove(), 3200)

    }
});