#pragma strict

function Start () {
	yield WaitForSeconds(3);
	Application.LoadLevel(Application.loadedLevel + 1);
}
