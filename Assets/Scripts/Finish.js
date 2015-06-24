#pragma strict

var two = 0;
var three = 0;
var level : String = "One1";
var nextLevel : String = "One2";
var pause : Transform;
static var current = 3;

function OnTriggerEnter(hit : Collider)
{
	if(hit.gameObject.tag == "Player")
	{
//		if(PlayerPrefs.GetInt(""+level) == 5)
//		{
//			PlayerPrefs.GetInt(""+level, 0);
//		}
	
		if(Clicks.clicks <= three && PlayerPrefs.GetInt(""+level) <= 3)
		{
			PlayerPrefs.SetInt("" +level, 3);
			current = 3;
		}
		else if(Clicks.clicks <= two && PlayerPrefs.GetInt(""+level) <= 2)
		{
			PlayerPrefs.SetInt("" +level, 2);
			current = 2;
		}
		else if(Clicks.clicks > two && PlayerPrefs.GetInt(""+level) <= 1)
		{
			PlayerPrefs.SetInt("" +level, 1);
			current = 1;
		}
		if(level.Substring(level.Length - 1) == "0" && level.Substring(0,level.Length - 2) == "One")
		{
			PlayerPrefs.SetInt("World2", 1);
		}
		else if(level.Substring(level.Length - 1) == "0" && level.Substring(0,level.Length - 2) == "Two")
		{
			PlayerPrefs.SetInt("World3", 1);
		}
		else if(level.Substring(level.Length - 1) == "0" && level.Substring(0,level.Length - 2) == "Three")
		{
			PlayerPrefs.SetInt("World4", 1);
		}
		else if(level.Substring(level.Length - 1) == "0" && level.Substring(0,level.Length - 2) == "Four")
		{
			PlayerPrefs.SetInt("World5", 1);
		}
		else if(level.Substring(level.Length - 1) == "0" && level.Substring(0,level.Length - 2) == "Five")
		{
			PlayerPrefs.SetInt("World6", 1);
		}
		Sounds.play = true;
		CurrentStars.move = true;
		GameObject.FindGameObjectWithTag("Player").active = false;
		GameObject.Find("Pause").collider.enabled = false;
		yield WaitForSeconds(70 * Time.deltaTime);
		CurrentStars.move = false;
		Application.LoadLevel(nextLevel);
		Button.on1 = true;
		Button.on2 = true;
		Clicks.clicks = 0;
		Launch.onArrow = false;
		Launch.onBar = false;
		pause.GetComponent(Pause).Unfreeze();
		if(PlayerPrefs.GetInt("p1a5I8d") != 951402483)
		{
			DontDestroy.more1 = true;
		}
	}
}
