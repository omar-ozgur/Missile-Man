#pragma strict

function FixedUpdate()
{
	transform.eulerAngles.y -= 5;
}

function OnTriggerEnter(hit : Collider)
{
	if(hit.gameObject.tag == "Player")
	{
		Physics.gravity = -Physics.gravity;
		Destroy(this.gameObject);
	}
}