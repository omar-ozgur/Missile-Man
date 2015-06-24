#pragma strict

static var tapped = false;
static var query = false;

function Start()
{
	query = true;
}

function Update()
{
	if(PlayerPrefs.GetInt("p1a5I8d") == 951402483)
	{
		transform.renderer.enabled = false;
		transform.collider.enabled = false;
	}
	else if(PlayerPrefs.GetInt("p1a5I8d") != 951402483)
	{
		transform.renderer.enabled = true;
		transform.collider.enabled = true;
	
	}
}

function OnMouseDown()
{
	tapped = true;
}