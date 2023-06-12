
function calculateArea() {
  var side1 = Number(document.getElementById("side1").value);
  var side2 = Number(document.getElementById("side2").value);
  var side3 = Number(document.getElementById("side3").value);

  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    document.getElementById("tableBody").innerHTML = "<tr><td colspan='3'>Треугольник с такими сторонами не существует</td></tr>";
    document.getElementById("resultTable").style.display = "block";
  } else {
    var p = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    document.getElementById("tableBody").innerHTML = "<tr><td>" + area + "</td><td>√p(p-a)(p-b)(p-c)</td><td>" + area + "</td></tr>";
    document.getElementById("resultTable").style.display = "block";
  }
}