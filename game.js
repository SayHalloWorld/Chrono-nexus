const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

// Nhân vật chính
let player = {
    x: 100,
    y: 250,
    width: 50,
    height: 50,
    color: "blue",
    speed: 5
};

// Xử lý phím bấm
let keys = {};
window.addEventListener("keydown", function(e) { keys[e.key] = true; });
window.addEventListener("keyup", function(e) { keys[e.key] = false; });

// Cập nhật game
function update() {
    if (keys["ArrowRight"]) player.x += player.speed;
    if (keys["ArrowLeft"]) player.x -= player.speed;
    if (keys["ArrowUp"]) player.y -= player.speed;
    if (keys["ArrowDown"]) player.y += player.speed;
}

// Vẽ game
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Vòng lặp game
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Chạy game
gameLoop();
