// const nfts = require('./nfts');
const Engine = Matter.Engine;
const Render = Matter.Render;
const Runner = Matter.Runner;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;

const nfts = [
	{
		name: 'victor494',
		shape: 'circle',
		color: 'green',
		positionX: 300,
		positionY: 200,
		sides: 5,
		radius: 30,
		width: 30,
		height: 90,
		slope: 20,
	},
	{
		name: 'Gerald',
		shape: 'circle',
		color: 'purple',
		positionX: 300,
		positionY: 200,
		sides: 5,
		radius: 30,
		width: 30,
		height: 90,
		slope: 20,
	},
	{
		name: 'Abeeujah',
		shape: 'rectangle',
		color: 'blue',
		positionX: 300,
		positionY: 200,
		sides: 5,
		radius: 30,
		width: 30,
		height: 90,
		slope: 20,
	},
	{
		name: 'DDC',
		shape: 'polygon',
		color: 'yellow',
		positionX: 300,
		positionY: 200,
		sides: 5,
		radius: 30,
		width: 30,
		height: 90,
		slope: 20,
	},
	{
		name: 'Dannyx',
		shape: 'trapezoid',
		color: 'red',
		positionX: 300,
		positionY: 200,
		sides: 5,
		radius: 30,
		width: 30,
		height: 90,
		slope: 5,
	},
];

//create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: false,
	},
});

// create nft objects from the nft attributes
const nftBoxes = nfts.map((nft) => {
	console.log(nft.shape);
	if (nft.shape === 'rectangle') {
		console.log('yes');
		const boxObj = Bodies.rectangle(
			nft.positionX,
			nft.positionY,
			nft.width,
			nft.height,
			{
				render: {
					fillStyle: nft.color,
					strokeStyle: 'grey',
					lineWidth: 3,
				},
			}
		);
		return boxObj;
	}
	if (nft.shape === 'circle') {
		const circleObj = Bodies.circle(
			nft.positionX,
			nft.positionY,
			nft.radius,
			{
				render: {
					fillStyle: nft.color,
					strokeStyle: 'grey',
					lineWidth: 3,
				},
			}
		);
		return circleObj;
	}
	if (nft.shape === 'polygon') {
		const polyObj = Bodies.polygon(
			nft.positionX,
			nft.positionY,
			nft.sides,
			nft.radius,
			{
				render: {
					fillStyle: nft.color,
					strokeStyle: 'grey',
					lineWidth: 3,
				},
			}
		);
		return polyObj;
	}
	if (nft.shape === 'trapezoid') {
		const zoidObj = Bodies.trapezoid(
			nft.positionX,
			nft.positionY,
			nft.width,
			nft.height,
			nft.slope,
			{
				render: {
					fillStyle: nft.color,
					strokeStyle: 'grey',
					lineWidth: 3,
				},
			}
		);
		return zoidObj;
	}
});

// creating ground
const ground = Bodies.rectangle(400, 610, 810, 60, {
	// isSensor: true,
	// isSleeping: true,
	isStatic: true,
	render: {
		fillStyle: 'red',
	},
});

const newObj = Bodies.fromVertices(120, 150, [{ x: 10, y: 13 }]);

// add all the bodies to the world
Composite.add(engine.world, [...nftBoxes, ground]);

Render.run(render);

const runner = Runner.create();

Runner.run(runner, engine);
