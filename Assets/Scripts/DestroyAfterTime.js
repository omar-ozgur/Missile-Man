#pragma strict

function Start () {
	yield WaitForSeconds(1000 * Time.deltaTime);
	
		Destroy(this.gameObject);
	
}
