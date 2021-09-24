var sum = 0;
var count = 0;

function clearIt()
{
  sum = 0;
  count = 0;
  document.getElementById("output").innerHTML = " ";
}
function add(x)
{
  sum = sum + x;
  count = count + 1;
  printRes();
}
function printRes()
{
  document.getElementById("output").innerHTML = "Sum: " + sum + "<br>" + "Count: " + count;
}
