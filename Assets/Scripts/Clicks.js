#pragma strict

static var clicks = 0;

function FixedUpdate()
{

	transform.guiText.text = "Launches: " +clicks.ToString();

}