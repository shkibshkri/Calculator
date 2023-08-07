function calculate(expr)
{
    return eval(expr);
}

function display(inputData)
{
    if(inputData.includes('='))
    {
        let expr = document.getElementById("screenShow").value;
        let finalResult = calculate(expr);
        document.getElementById("screenShow").value = finalResult;
    } else
    {
    document.getElementById("screenShow").value += inputData;
    return inputData;
    }
}

function clearScreen()
{
    document.getElementById("screenShow").value = "";
}