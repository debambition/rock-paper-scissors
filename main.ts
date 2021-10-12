input.onPinPressed(TouchPin.P0, function () {
    MyChoice = 0
    radio.sendNumber(0)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5 || MyChoice == 5) {
        basic.clearScreen()
    } else {
        basic.showString("" + (receivedNumber))
        basic.pause(1000)
        if (MyChoice == receivedNumber) {
            basic.showString("D")
            radio.sendString("D")
        } else {
            if (MyChoice - receivedNumber == 1 || MyChoice - receivedNumber == -2) {
                basic.showString("W")
                radio.sendString("L")
            } else {
                basic.showString("L")
                radio.sendString("W")
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    MyChoice = 5
    radio.sendNumber(5)
})
input.onPinPressed(TouchPin.P2, function () {
    MyChoice = 2
    radio.sendNumber(2)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onPinPressed(TouchPin.P1, function () {
    MyChoice = 1
    radio.sendNumber(1)
})
let MyChoice = 0
radio.setGroup(1)
MyChoice = 5
