#pragma strict




function Update () {
    transform.LookAt(GameObject.FindGameObjectWithTag("Player").transform);

}
