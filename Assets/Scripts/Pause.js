#pragma strict

var pause : Transform;
var launches : GUIText;
var level : GUIText;
var arrow : Transform;
static var paused = false;

function OnMouseDown ()
{
	if(!paused)
	{
		Freeze();
	}
	else
	{
		Unfreeze();
	}
}

function Update()
{
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		if(!paused)
		{
			Freeze();
		}
		else
		{
			Unfreeze();
		}
	}
}

function Freeze()
{
	paused = true;
	Time.timeScale = 0.0;
	launches.color = Color.gray;
	level.color = Color.gray;
	pause.renderer.enabled = true;
		for( var i = 0; i < pause.childCount; ++i )
		{
			pause.GetChild(i).gameObject.active=true;
		}
}

function Unfreeze()
{
	Time.timeScale = 1.0;
	launches.color = Color.white;
	level.color = Color.white;
	pause.renderer.enabled = false;
	for( var i = 0; i < pause.childCount; ++i )
		{
			pause.GetChild(i).gameObject.active=false;
		}
	paused = false;
}