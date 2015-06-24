#pragma strict

var level : String = "One1";

function OnMouseDown()
{
	if(PlayerPrefs.GetInt("p1a5I8d") == 951402483)
	{
		Application.LoadLevel(level);
	}
	else if(level == "Worlds" || level == "Worlds2" || level == "Menu" || Application.loadedLevelName == "Menu")
	{
		Application.LoadLevel(level);
	}
//	else if(Application.loadedLevelName != "Worlds" && Application.loadedLevelName != "Worlds2")
//	{
//		Application.LoadLevel(level);
//	}
//	else if(level.Substring(0,level.Length - 1) != "World" && Application.loadedLevelName == "Worlds")
//	{
//		Application.LoadLevel(level);
//	}
	else if(PlayerPrefs.GetInt(level) != 0)
	{
		Application.LoadLevel(level);
	}
//	else if(PlayerPrefs.GetInt("p1a5I8d") == 951402483 && (level == "World4" || level == "World5" || level == "World6"))
//	{
//		Application.LoadLevel(level);
//	}
//	else if(PlayerPrefs.GetInt(level) != 0 && Application.loadedLevelName == "Worlds2" && level != "World4")
//	{
//		Application.LoadLevel(level);
//	}
}

function Start()
{
	PlayerPrefs.SetInt("World1", 1);
//	if(PlayerPrefs.GetInt("p1a5I8d") != 951402483 && (level == "World4" || level == "World5" || level == "World6"))
//	{
//		transform.renderer.material.color = Color(0.2,0.2,0.2,0);
//	}
	if(PlayerPrefs.GetInt("p1a5I8d") != 951402483 && level.Substring(0,level.Length - 1) == "World" && PlayerPrefs.GetInt(level) == 0 && Application.loadedLevelName == "Worlds" && Application.loadedLevelName != "Menu")
	{
		transform.renderer.material.color = Color(0.2,0.2,0.2,0);
	}
	else if(PlayerPrefs.GetInt("p1a5I8d") != 951402483 && level.Substring(0,level.Length - 1) == "World" && PlayerPrefs.GetInt(level) == 0 && Application.loadedLevelName == "Worlds2" && Application.loadedLevelName != "Menu")
	{
		transform.renderer.material.color = Color(0.2,0.2,0.2,0);
	}
//	else if(PlayerPrefs.GetInt("p1a5I8d") == 951402483 && level.Substring(0,level.Length - 1) == "World" && PlayerPrefs.GetInt(level) == 0 && Application.loadedLevelName == "Worlds2" && level != "World4")
//	{
//		transform.renderer.material.color = Color(0.2,0.2,0.2,0);
//	}
}