let ball;
let points = 0;

function setup() {
	new Canvas(500, 500);
	displayMode('centered');

	ball = new Sprite();
	mouse = new Sprite(50,50);
	ball.diameter = 50;
	print(`points = ${points}`);
}

function draw() {
	background('skyblue');
	mouse.moveTowards(mouse);
	ball.x = random(0,500);
	ball.y = random(0,500);
	if (mouse.overlaps(ball)) points = points + 1
	//}
}
