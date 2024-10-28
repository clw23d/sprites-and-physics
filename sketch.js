let ball;
let player;
let points = 0;

function setup() {
	new Canvas(500, 500);
	displayMode('centered');

	ball = new Sprite();
	player = new Sprite(50,50);
	ball.diameter = 50;
	print(`points = ${points}`);
}

function draw() {
	background('skyblue');
	player.moveTowards(mouse);
	ball.x = random(0,500);
	ball.y = random(0,500);
	if (player.overlaps(ball)) points = points + 1;
	print(`points = ${points}`);
	text(`points = ${points}`, 50, 50);
	//}
}
