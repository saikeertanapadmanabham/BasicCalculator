function calculator(operator)
{
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch(operator) {
        case '+':
            result = num1 + num2;
          break;
        case '-':
            result = num1 - num2;
          break;
        case '*':
            result = num1 * num2;
          break;
        case '/':
            result = num1 / num2;
          break;
        default:
          result = "Invalid Operator"
      }

    document.getElementById("result").innerHTML= result;

}