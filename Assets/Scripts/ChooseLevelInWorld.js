#pragma strict

var level : String = "One1";


function OnMouseDown()
{
	if(PlayerPrefs.GetInt("p1a5I8d") == 951402483)
	{
		Application.LoadLevel(level);
	}
	else if(level.Substring(level.Length - 1) == "1")
	{
		Application.LoadLevel(level);
	}
	else if(level.Substring(level.Length - 1) != "1" && PlayerPrefs.GetInt("" +(level.Substring(0, level.Length - 1)) +(int.Parse(level.Substring(level.Length - 1)) - 1)) != 0 && level.Substring(level.Length - 1) != "0")
	{
		Application.LoadLevel(level);
	}
	else if(level.Substring(level.Length - 1) != "1" && level.Substring(level.Length - 1) == "0" && PlayerPrefs.GetInt("" +(level.Substring(0, level.Length - 2)) +(int.Parse(level.Substring(level.Length - 2)) - 1)) != 0)
	{
		Application.LoadLevel(level);
	}
}

function Start()
{
	
	if(PlayerPrefs.GetInt("p1a5I8d") != 951402483 && level.Substring(level.Length - 1) != "1" && (PlayerPrefs.GetInt("" +(level.Substring(0, level.Length - 1)) +(int.Parse(level.Substring(level.Length - 1)) - 1)) == 0) && level.Substring(level.Length - 1) != "0")
	{
		transform.renderer.material.color = Color(0.2,0.2,0.2,0);
	}
	else if(PlayerPrefs.GetInt("p1a5I8d") != 951402483 && level.Substring(level.Length - 1) != "1" && level.Substring(level.Length - 1) == "0")
	{
		if(PlayerPrefs.GetInt("p1a5I8d") != 951402483 && PlayerPrefs.GetInt("" +(level.Substring(0, level.Length - 2)) +(int.Parse(level.Substring(level.Length - 2)) - 1)) == 0)
		{
			transform.renderer.material.color = Color(0.2,0.2,0.2,0);
		}
	}
//	else if(PlayerPrefs.GetInt("p1a5I8d") == 951402483 && (Application.loadedLevelName == "World4" || Application.loadedLevelName == "World5" || Application.loadedLevelName == "World6") && level.Substring(level.Length - 1) != "1" && (PlayerPrefs.GetInt("" +(level.Substring(0, level.Length - 1)) +(int.Parse(level.Substring(level.Length - 1)) - 1)) == 0) && level.Substring(level.Length - 1) != "0")
//	{
//		transform.renderer.material.color = Color(0.2,0.2,0.2,0);
//	}
//	else if(PlayerPrefs.GetInt("p1a5I8d") == 951402483 && (Application.loadedLevelName == "World4" || Application.loadedLevelName == "World5" || Application.loadedLevelName == "World6") && level.Substring(level.Length - 1) != "1" && level.Substring(level.Length - 1) == "0")
//	{
//		if(PlayerPrefs.GetInt("p1a5I8d") == 951402483 && (Application.loadedLevelName == "World4" || Application.loadedLevelName == "World5" || Application.loadedLevelName == "World6") && PlayerPrefs.GetInt("" +(level.Substring(0, level.Length - 2)) +(int.Parse(level.Substring(level.Length - 2)) - 1)) == 0)
//		{
//			transform.renderer.material.color = Color(0.2,0.2,0.2,0);
//		}
//	}
}