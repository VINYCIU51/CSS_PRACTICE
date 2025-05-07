const balls = document.querySelectorAll('.ball');
const totalBalls = balls.length;

// cria um array adicionando x e y para cada bolinha
const positions = Array(totalBalls).fill({ x: 0, y: 0 });

document.addEventListener('mousemove', (e) => {
    // a primeira bolinha segue o mouse de perto
    positions[0] = {
        x: e.clientX,
        y: e.clientY
    };

    // a bolinha 1 pega a posicao da 0 e assim por diante
    for (let i = 1; i < totalBalls; i++) {
        positions[i] = {
            x: positions[i].x + (positions[i - 1].x - positions[i].x) * 0.3, // anda 30% da diferenca entre a bola atual e a da frente
            y: positions[i].y + (positions[i - 1].y - positions[i].y) * 0.3
        };
    }

    // muda a posicao no css
    balls.forEach((ball, index) => {
        ball.style.transform = `translate(${positions[index].x}px, ${positions[index].y}px)`;
    });
});