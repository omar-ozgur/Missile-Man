#pragma strict

static var onArrow = true;
static var onBar = false;
static var play = false;

private var right = true;
private var direction = 0.0;
private var power = 0.0;
static var motion = false;
private var fire = false;

var arrowPivot : Transform;
var arrow : Transform;
var barPivot : Transform;
var bar : Transform;
var barBackground : Transform;

var audio1 : AudioClip;
var audio2 : AudioClip;
var die : AudioClip;

function Awake()
{
	if(play)
	{
		audio.clip = die;
		audio.Play();
		play = false;
	}
}

function Start()
{
	transform.audio.volume = 1;
	Physics.gravity = Vector3(0, -9.8, 0);
	transform.eulerAngles.z = 0;
	transform.eulerAngles.y = 0;
}

function Update()
{
	var bounds = new Rect(0, 0, Screen.width, (Screen.height/2)+(Screen.height*Camera.main.rect.height/2.37));
	if(onArrow)
	{
		if(Physics.gravity.y < 0)
		{
			arrow.renderer.enabled = true;
			if(right)
			{
				arrow.RotateAround(arrowPivot.position, Vector3.back, 120 * Time.deltaTime);
			}
			else
			{
				arrow.RotateAround(arrowPivot.position, Vector3.forward, 120 * Time.deltaTime);
			}
			if(arrow.eulerAngles.z < 270 && arrow.eulerAngles.z > 90 && right)
			{
				arrow.eulerAngles.z = 271;
				right = false;
			}
			else if(arrow.eulerAngles.z > 90 && arrow.eulerAngles.z < 270 && !right)
			{
				arrow.eulerAngles.z = 89;
				right = true;
			}
			if(Input.GetMouseButtonDown(0) && bounds.Contains(Input.mousePosition) && !Pause.paused)
			{
				onArrow = false;
				audio.clip = audio1;
				audio.Play();
				direction = arrow.eulerAngles.z;
				barPivot.localScale.y = 0.1;
				right = true;
				onBar = true;
				bar.renderer.enabled = true;
				barBackground.renderer.enabled = true;
			}
		}
		else if(Physics.gravity.y > 0)
		{
			arrow.renderer.enabled = true;
			if(right)
			{
				arrow.RotateAround(arrowPivot.position, Vector3.back, 120 * Time.deltaTime);
			}
			else
			{
				arrow.RotateAround(arrowPivot.position, Vector3.forward, 120 * Time.deltaTime);
			}
			if(arrow.eulerAngles.z < 90 && arrow.eulerAngles.z > 0 && right)
			{
				arrow.eulerAngles.z = 91;
				right = false;
			}
			else if(arrow.eulerAngles.z > 270 && arrow.eulerAngles.z < 360 && !right)
			{
				arrow.eulerAngles.z = 269;
				right = true;
			}
			if(Input.GetMouseButtonDown(0) && bounds.Contains(Input.mousePosition) && !Pause.paused)
			{
				onArrow = false;
				audio.clip = audio1;
				audio.Play();
				direction = arrow.eulerAngles.z;
				barPivot.localScale.y = 0.1;
				onBar = true;
				bar.renderer.enabled = true;
				barBackground.renderer.enabled = true;
			}
		}
		
	}
	else if(onBar)
	{
		if(right)
		{
			barPivot.localScale.y += 2.0 * Time.deltaTime;
			if(barPivot.localScale.y > 2.0)
			{
				right = false;
			}
		}
		else
		{
			barPivot.localScale.y -= 2.0 * Time.deltaTime;
			if(barPivot.localScale.y < 0.0)
			{
				right = true;
			}
		}
		if(Input.GetMouseButtonDown(0) && bounds.Contains(Input.mousePosition) && !Pause.paused)
		{
			onBar = false;
			if(barPivot.localScale.y < 0.1)
			{
				barPivot.localScale.y = 0.1;
			}
			power = barPivot.localScale.y;
			audio.clip = audio2;
			audio.Play();
			barBackground.renderer.enabled = false;
			bar.renderer.enabled = false;
			arrow.localPosition.x = 0;
			arrow.renderer.enabled = false;
			Fire();
		}
	}

	if(transform.rigidbody.velocity != Vector3(0.0,0.0,0.0))
	{
		motion = true;
	}
	else if(transform.rigidbody.velocity == Vector3(0.0,0.0,0.0) && motion == true && !onArrow && !onBar)
	{
		motion = false;
		if(Physics.gravity.y < 0)
		{
			arrow.eulerAngles.z = 0;
			arrow.localPosition.y = 1;
			right = true;
		}
		else if(Physics.gravity.y > 0)
		{
			arrow.eulerAngles.z = 180;
			arrow.localPosition.y = -1;
			right = false;
		}
		onArrow = true;
	}
}

function Fire()
{
	Clicks.clicks += 1;
	rigidbody.velocity = Vector3(Mathf.Sin(-direction * Mathf.Deg2Rad) * 7 * power, Mathf.Cos(-direction * Mathf.Deg2Rad) * 7 * power, 0);
	motion = true;
}