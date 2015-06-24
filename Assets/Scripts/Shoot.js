#pragma strict

private var fire = false;
var bullet : GameObject;
var time = 70;

function Start()
{
	yield WaitForSeconds(time * Time.deltaTime);
	fire = true;
}

function FixedUpdate () {
    if(fire)
    {
    	Fire();
    }
}

function Fire()
{
	fire = false;
	Instantiate(bullet, transform.position, transform.rotation);
	yield WaitForSeconds(time * Time.deltaTime);
	fire = true;
}