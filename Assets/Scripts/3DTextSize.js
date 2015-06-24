#pragma strict

var size = 1;

function Start () 
{
	transform.GetComponent(TextMesh).fontSize = Screen.width / size/1.2;
}