#pragma strict

var one = true;
static var on1 = true;
static var on2 = true;


function OnTriggerEnter (hit : Collider)
{
	if(hit.gameObject.tag == "Player")
	{
		if(one)
		{
			on1 = false;
		}
		else
		{
			on2 = false;
		}
	}
}