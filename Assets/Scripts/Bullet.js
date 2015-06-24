#pragma strict

function Start () 
{
	rigidbody.AddForce(transform.forward * 50000 * Time.deltaTime);
}