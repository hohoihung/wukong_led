input.onButtonPressed(Button.A, function () {
    wuKong.lightIntensity(100)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setLightMode(wuKong.LightMode.OFF)
})
basic.forever(function () {
	
})
