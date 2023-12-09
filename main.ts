function right () {
    for (let index = 0; index < 5; index++) {
        led.plot(4 - x, 0)
        x += -1
        basic.pause(100)
    }
}
function down () {
    for (let index = 0; index < 5; index++) {
        led.plot(4, 4 - y)
        y += -1
        basic.pause(100)
    }
}
let y = 0
let x = 0
x = 4
y = 4
right()
down()
basic.forever(function () {
	
})
