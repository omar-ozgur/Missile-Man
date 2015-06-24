#pragma strict

var star : Material;
var star1 : Material;
var star2 : Material;
var star3 : Material;
var two = 2;
var three = 1;
static var move = false;

private var speed = 90;
private var startTime: float;
private var journeyLength: float;
private var startMarker : Vector3;

function Start() {
		startMarker = transform.position;
		startTime = Time.time;
		journeyLength = Vector3.Distance(startMarker, Vector3(0,0,0));
}

function FixedUpdate () 
{
	if(move)
	{
		transform.localScale.x += 10 * Time.deltaTime;
		transform.localScale.y += 4 * Time.deltaTime;
		var distCovered = (Time.time - startTime) * speed * Time.deltaTime;
		var fracJourney = distCovered / journeyLength;
		transform.position = Vector3.Lerp(startMarker, Vector3(0,0,-1), fracJourney);
	}

	if(Clicks.clicks <= three - 1 && !Launch.motion)
	{
		transform.renderer.material = star3;
	}
	else if(Clicks.clicks <= two - 1 && !Launch.motion)
	{
		transform.renderer.material = star2;
	}
	else if(Clicks.clicks > two - 1 && !Launch.motion)
	{
		transform.renderer.material = star1;
	}
	
	//PlayerPrefs.SetInt(""+level, 0);
}
