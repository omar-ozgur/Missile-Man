#pragma strict

var vel : int;
var vert = true;

function OnCollisionStay (hit : Collision)
{
	if(hit.gameObject.tag != "Player")
	{
		if(vert)
		{
			if(transform.rigidbody.velocity.y > 0)
			{
				transform.rigidbody.velocity.y = -vel;
			}
			else if(transform.rigidbody.velocity.y < 0)
			{
				transform.rigidbody.velocity.y = vel;
			}
		}
		else
		{
			if(transform.rigidbody.velocity.x > 0)
			{
				transform.rigidbody.velocity.x = -vel;
			}
			else if(transform.rigidbody.velocity.x < 0)
			{
				transform.rigidbody.velocity.x = vel;
			}
		}
	}
	
}

function Start()
{
	if(vert)
	{
		transform.rigidbody.velocity.y = vel;
	}
	else
	{
		transform.rigidbody.velocity.x = vel;
	}
}

function FixedUpdate()
{
	if(vert)
	{
		if(vel > 0)
		{
			if(transform.rigidbody.velocity.y > 0 && transform.rigidbody.velocity.y < vel)
			{
				transform.rigidbody.velocity.y = vel;
			}
			else if(transform.rigidbody.velocity.y < 0 && transform.rigidbody.velocity.y > -vel)
			{
				transform.rigidbody.velocity.y = -vel;
			}
		}
		else if(vel < 0)
		{
			if(transform.rigidbody.velocity.y > 0 && transform.rigidbody.velocity.y < -vel)
			{
				transform.rigidbody.velocity.y = -vel;
			}
			else if(transform.rigidbody.velocity.y < 0 && transform.rigidbody.velocity.y > vel)
			{
				transform.rigidbody.velocity.y = vel;
			}
		}
	}
	else
	{
		if(vel > 0)
		{
			if(transform.rigidbody.velocity.x > 0 && transform.rigidbody.velocity.x < vel)
			{
				transform.rigidbody.velocity.x = vel;
			}
			else if(transform.rigidbody.velocity.x < 0 && transform.rigidbody.velocity.x > -vel)
			{
				transform.rigidbody.velocity.x = -vel;
			}
		}
		else if(vel < 0)
		{
			if(transform.rigidbody.velocity.x > 0 && transform.rigidbody.velocity.x < -vel)
			{
				transform.rigidbody.velocity.x = -vel;
			}
			else if(transform.rigidbody.velocity.x < 0 && transform.rigidbody.velocity.x > vel)
			{
				transform.rigidbody.velocity.x = vel;
			}
		}
	}
}

