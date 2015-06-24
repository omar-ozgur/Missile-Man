#pragma strict

var pause : Transform;

function OnMouseDown ()
{
	Application.LoadLevel(Application.loadedLevel);
	Button.on1 = true;
	Button.on2 = true;
	Clicks.clicks = 0;
	Launch.onArrow = false;
	Launch.onBar = false;
	pause.GetComponent(Pause).Unfreeze();
}
