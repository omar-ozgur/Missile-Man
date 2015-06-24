#pragma strict

var level : String = "one1";
var star : Material;
var star1 : Material;
var star2 : Material;
var star3 : Material;

function Start () 
{
	if(PlayerPrefs.GetInt(""+level) == 1)
	{
		transform.renderer.material = star1;
	}
	else if(PlayerPrefs.GetInt(""+level) == 2)
	{
		transform.renderer.material = star2;
	}
	else if(PlayerPrefs.GetInt(""+level) == 3)
	{
		transform.renderer.material = star3;
	}
	else
	{
		transform.renderer.material = star;
	}
	
//	PlayerPrefs.SetInt("One1", 0);
//	PlayerPrefs.SetInt("One2", 0);
//	PlayerPrefs.SetInt("One3", 0);
//	PlayerPrefs.SetInt("One4", 0);
//	PlayerPrefs.SetInt("One5", 0);
//	PlayerPrefs.SetInt("One6", 0);
//	PlayerPrefs.SetInt("One7", 0);
//	PlayerPrefs.SetInt("One8", 0);
//	PlayerPrefs.SetInt("One9", 0);
//	PlayerPrefs.SetInt("One10", 0);
//	PlayerPrefs.SetInt("Two1", 0);
//	PlayerPrefs.SetInt("Two2", 0);
//	PlayerPrefs.SetInt("Two3", 0);
//	PlayerPrefs.SetInt("Two4", 0);
//	PlayerPrefs.SetInt("Two5", 0);
//	PlayerPrefs.SetInt("Two6", 0);
//	PlayerPrefs.SetInt("Two7", 0);
//	PlayerPrefs.SetInt("Two8", 0);
//	PlayerPrefs.SetInt("Two9", 0);
//	PlayerPrefs.SetInt("Two10", 0);
//	PlayerPrefs.SetInt("Three1", 0);
//	PlayerPrefs.SetInt("Three2", 0);
//	PlayerPrefs.SetInt("Three3", 0);
//	PlayerPrefs.SetInt("Three4", 0);
//	PlayerPrefs.SetInt("Three5", 0);
//	PlayerPrefs.SetInt("Three6", 0);
//	PlayerPrefs.SetInt("Three7", 0);
//	PlayerPrefs.SetInt("Three8", 0);
//	PlayerPrefs.SetInt("Three9", 0);
//	PlayerPrefs.SetInt("Three10", 0);
//	PlayerPrefs.SetInt("Four1", 0);
//	PlayerPrefs.SetInt("Four2", 0);
//	PlayerPrefs.SetInt("Four3", 0);
//	PlayerPrefs.SetInt("Four4", 0);
//	PlayerPrefs.SetInt("Four5", 0);
//	PlayerPrefs.SetInt("Four6", 0);
//	PlayerPrefs.SetInt("Four7", 0);
//	PlayerPrefs.SetInt("Four8", 0);
//	PlayerPrefs.SetInt("Four9", 0);
//	PlayerPrefs.SetInt("Four10", 0);
//	PlayerPrefs.SetInt("Five1", 0);
//	PlayerPrefs.SetInt("Five2", 0);
//	PlayerPrefs.SetInt("Five3", 0);
//	PlayerPrefs.SetInt("Five4", 0);
//	PlayerPrefs.SetInt("Five5", 0);
//	PlayerPrefs.SetInt("Five6", 0);
//	PlayerPrefs.SetInt("Five7", 0);
//	PlayerPrefs.SetInt("Five8", 0);
//	PlayerPrefs.SetInt("Five9", 0);
//	PlayerPrefs.SetInt("Five10", 0);
//	PlayerPrefs.SetInt("Six1", 0);
//	PlayerPrefs.SetInt("Six2", 0);
//	PlayerPrefs.SetInt("Six3", 0);
//	PlayerPrefs.SetInt("Six4", 0);
//	PlayerPrefs.SetInt("Six5", 0);
//	PlayerPrefs.SetInt("Six6", 0);
//	PlayerPrefs.SetInt("Six7", 0);
//	PlayerPrefs.SetInt("Six8", 0);
//	PlayerPrefs.SetInt("Six9", 0);
//	PlayerPrefs.SetInt("Six10", 0);
//	PlayerPrefs.SetInt("p1a5I8d", 0);
//	PlayerPrefs.SetInt("World2", 0);
//	PlayerPrefs.SetInt("World3", 0);
//	PlayerPrefs.SetInt("World4", 0);
//	PlayerPrefs.SetInt("World5", 0);
//	PlayerPrefs.SetInt("World6", 0);



//	PlayerPrefs.SetInt("One1", -1);
//	PlayerPrefs.SetInt("One2", -1);
//	PlayerPrefs.SetInt("One3", -1);
//	PlayerPrefs.SetInt("One4", -1);
//	PlayerPrefs.SetInt("One5", -1);
//	PlayerPrefs.SetInt("One6", -1);
//	PlayerPrefs.SetInt("One7", -1);
//	PlayerPrefs.SetInt("One8", -1);
//	PlayerPrefs.SetInt("One9", -1);
//	PlayerPrefs.SetInt("One10", -1);
//	PlayerPrefs.SetInt("Two1", -1);
//	PlayerPrefs.SetInt("Two2", -1);
//	PlayerPrefs.SetInt("Two3", -1);
//	PlayerPrefs.SetInt("Two4", -1);
//	PlayerPrefs.SetInt("Two5", -1);
//	PlayerPrefs.SetInt("Two6", -1);
//	PlayerPrefs.SetInt("Two7", -1);
//	PlayerPrefs.SetInt("Two8", -1);
//	PlayerPrefs.SetInt("Two9", -1);
//	PlayerPrefs.SetInt("Two10", -1);
//	PlayerPrefs.SetInt("Three1", -1);
//	PlayerPrefs.SetInt("Three2", -1);
//	PlayerPrefs.SetInt("Three3", -1);
//	PlayerPrefs.SetInt("Three4", -1);
//	PlayerPrefs.SetInt("Three5", -1);
//	PlayerPrefs.SetInt("Three6", -1);
//	PlayerPrefs.SetInt("Three7", -1);
//	PlayerPrefs.SetInt("Three8", -1);
//	PlayerPrefs.SetInt("Three9", -1);
//	PlayerPrefs.SetInt("Three10", -1);
//	PlayerPrefs.SetInt("World2", 1);
//	PlayerPrefs.SetInt("World3", 1);
//	PlayerPrefs.SetInt("World4", 1);
//	PlayerPrefs.SetInt("p1a5I8d", 951402483);
}
