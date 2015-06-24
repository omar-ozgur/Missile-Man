#pragma strict

var Player : Transform;
var xShift = 0.0;
var yShift = 0.0;

function Update()
{
		if(Physics.gravity.y < 0)
		{
			transform.position.x = Player.position.x + xShift;
			transform.position.y = Player.position.y + yShift;
		}
		else if(Physics.gravity.y > 0)
		{
			transform.position.x = Player.position.x + xShift;
			transform.position.y = Player.position.y - yShift;
		}
}