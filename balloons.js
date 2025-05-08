const container = document.getElementById("balloon-container");

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.animationDuration = `${4 + Math.random() * 3}s`;
  container.appendChild(balloon);
  setTimeout(() => balloon.remove(), 8000);
}

setInterval(createBalloon, 500);

const style = document.createElement('style');
style.innerHTML = `
  .balloon {
    position: absolute;
    bottom: -100px;
    width: 30px;
    height: 50px;
    background: hsl(${Math.random()*360}, 70%, 60%);
    border-radius: 50%;
    animation: floatUp linear infinite;
  }

  @keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-110vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
