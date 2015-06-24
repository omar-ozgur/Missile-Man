#pragma strict

static var play = false;

function Awake()
{
	DontDestroyOnLoad(this.gameObject);
}

function FixedUpdate()
{
	if(play)
	{
		audio.Play();
		play = false;
	}
}