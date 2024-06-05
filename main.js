var answer;
var buffer = []

function start() {
    document.getElementById('dummy').focus()
    buffer = []
    var maxDigits = document.getElementById('maxDigits').value
    var add = document.getElementById('add').checked
    var sub = document.getElementById('sub').checked
    var mul = document.getElementById('mul').checked
    var div = document.getElementById('div').checked
    
    var natural = document.getElementById('natural').checked
    var frac = document.getElementById('frac').checked
    var decimal = document.getElementById('decimal').checked
    var negative = document.getElementById('negative').checked

    var num1 = document.getElementById('num1')
    var op1 = document.getElementById('op1')
    var num2 = document.getElementById('num2')

    document.getElementById('problem').hidden = false

    do {
        var operatorList = []
        if (add) operatorList.push('+')
        if (sub) operatorList.push('-')
        if (mul) operatorList.push('×')
        if (div) operatorList.push('÷')
        var n1 = Math.floor(Math.random() * (Math.pow(10, maxDigits)-2)+1)
        var n2 = Math.floor(Math.random() * (Math.pow(10, maxDigits)-2)+1)
        var o1 = operatorList[Math.floor(Math.random() * operatorList.length)]

        num1.innerText = n1
        op1.innerText = o1
        num2.innerText = n2

        if (o1 == '+') answer = n1 + n2
        if (o1 == '-') answer = n1 - n2
        if (o1 == '×') answer = n1 * n2
        if (o1 == '÷') answer = n1 / n2
    } while (false)
}

function stop() {
    document.getElementById('problem').hidden = true
}

var sum = 0

window.addEventListener("keydown", (e) => {
    console.log(e.key)
    sum = 0
    if (!isNaN(Number(e.key))) buffer.push(Number(e.key));
    if (e.key == '-' || e.key == ',' || e.key == '.') buffer.push('-');
    for (var i=0; i<buffer.length; i++) {
        if (buffer[buffer.length - i - 1] == '-') {
            if (-sum == answer) {
                console.log("Correct Answer")
                start()
            }
            continue;
        }
        sum += buffer[buffer.length - i - 1] * Math.pow(10, i)
        if (sum == answer) {
            console.log("Correct Answer")
            start()
        }
    }
})

function hideInput() {
    document.getElementById('dummy').style = 'background-color: rgba(0,0,0,0); border-color: rgba(0,0,0,0);'
}