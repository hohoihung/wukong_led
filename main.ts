input.onButtonPressed(Button.A, function () {
    wuKong.lightIntensity(100)
    wuKong.mecanumDrift(wuKong.TurnList.Left)
})
input.onGesture(Gesture.TiltLeft, function () {
    wuKong.mecanumDrift(wuKong.TurnList.Left)
})
input.onGesture(Gesture.ScreenDown, function () {
    wuKong.mecanumRun(wuKong.RunList.stop)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    wuKong.mecanumRun(wuKong.RunList.stop)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        wuKong.lightIntensity(57)
        basic.pause(1000)
        wuKong.setLightMode(wuKong.LightMode.OFF)
        basic.pause(1000)
        wuKong.mecanumSpin(wuKong.TurnList.Left)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    wuKong.mecanumDrift(wuKong.TurnList.Right)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    wuKong.mecanumRun(wuKong.RunList.Front)
    for (let index = 0; index < 8; index++) {
        wuKong.lightIntensity(30)
        basic.pause(200)
        wuKong.setLightMode(wuKong.LightMode.OFF)
        basic.pause(200)
        wuKong.mecanumSpin(wuKong.TurnList.Left)
    }
})
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
wuKong.mecanumStop()
basic.forever(function () {
	
})
