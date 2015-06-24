#pragma strict

static var number = 0;
static var more1 = false;
static var more2 = false;


function Awake()
{
	DontDestroyOnLoad (this.gameObject);
}

function OnLevelWasLoaded()
{
	if(more1)
	{
		more1 = false;
		number += 3;
		Debug.Log(DontDestroy.number);
	}
	if(more2)
	{
		more2 = false;
		number += 1;
		Debug.Log(DontDestroy.number);
	}
}

