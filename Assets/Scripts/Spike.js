#pragma strict

var pause : Transform;

function OnCollisionEnter(hit : Collision)
{
	if(hit.gameObject.tag == "Player")
	{
		Application.LoadLevel(Application.loadedLevel);
		Button.on1 = true;
		Button.on2 = true;
		Clicks.clicks = 0;
		Launch.onArrow = false;
		Launch.onBar = false;
		GameObject.Find("Pause").GetComponent(Pause).Unfreeze();
		Launch.play = true;
		if(PlayerPrefs.GetInt("p1a5I8d") != 951402483)
		{
		DontDestroy.more2 = true;
		}
	}
}