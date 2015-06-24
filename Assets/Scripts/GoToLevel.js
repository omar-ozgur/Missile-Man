#pragma strict

var level : String = "one1";
var pause : Transform;


function OnMouseDown()
{
	Application.LoadLevel(level);
	Button.on1 = true;
	Button.on2 = true;
	Clicks.clicks = 0;
	Launch.onArrow = false;
	Launch.onBar = false;
	pause.GetComponent(Pause).Unfreeze();
}