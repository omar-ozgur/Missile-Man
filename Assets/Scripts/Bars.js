#pragma strict

var one = true;
var two = false;

function Update()
{
	if(one)
	{
		if(!Button.on1)
		{
			transform.localScale.y -= 5 * Time.deltaTime;
		}
		
		if(transform.localScale.y <= 0)
		{
			Destroy(this.gameObject);
		}
	}
	else if(two)
	{
		if(!Button.on2)
		{
			transform.localScale.y -= 5 * Time.deltaTime;
		}
		
		if(transform.localScale.y <= 0)
		{
			Destroy(this.gameObject);
		}
	}
}