let input = ""
let isCalculate = false

function add_to_display(e) {
    if (isCalculate) {
        isCalculate = false
        document.getElementById("display").value = e
        input = e
    } else {
        document.getElementById("display").value += e
        if (e==="^"){
            add_to_input("**")
        }else {
            add_to_input(e)
        }
    }


}

function add_to_input(e) {
    input += e
}

function clear_input() {
    input = ""
    document.getElementById("display").value = input
}

function calculate() {
    if (avoidConsecutiveOperators(input)) {
        const result = eval(input)
        check_divide_by_zero(result)
        isCalculate = true
        console.log(isCalculate)
    }

}


function check_divide_by_zero(result) {
    if (result === Infinity) {
        document.getElementById("display").value = "Error: Divide by zero!"
    } else {
        document.getElementById("display").value = eval(input)
    }
}

function delete_last() {
    input = input.slice(0, -1)
    document.getElementById("display").value = input
}

function avoidConsecutiveOperators(input) {
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '0', '=', 'c', '^', '(', ')']
    for (let i = 0; i < input.length; i++) {
        if (!digits.includes(input[i])) {
            document.getElementById("display").value = "Error: Text not valid !"
            return false
        }
    }
    return true
}

