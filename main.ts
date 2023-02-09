function turning_circle_right () {
    wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 50)
    wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 50)
    wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 100)
    wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 100)
}
input.onButtonPressed(Button.A, function () {
    wuKong.lightIntensity(100)
    wuKong.mecanumDrift(wuKong.TurnList.Left)
})
input.onGesture(Gesture.TiltLeft, function () {
    wuKong.mecanumDrift(wuKong.TurnList.Left)
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.ScreenUp, function () {
    wuKong.mecanumRun(wuKong.RunList.stop)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.ScreenDown, function () {
    wuKong.mecanumRun(wuKong.RunList.stop)
    basic.showIcon(IconNames.No)
})
function turning_circle_left () {
    wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 50)
    wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, 50)
    wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 100)
    wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, 100)
}
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
    }
    wuKong.mecanumSpin(wuKong.TurnList.Left)
})
function car_dance_2 () {
    wuKong.mecanumDrift(wuKong.TurnList.Left)
    wuKong.mecanumRun(wuKong.RunList.stop)
    wuKong.mecanumSpin(wuKong.TurnList.Left)
    wuKong.mecanumRun(wuKong.RunList.stop)
    wuKong.mecanumDrift(wuKong.TurnList.Right)
    wuKong.mecanumRun(wuKong.RunList.stop)
    wuKong.mecanumSpin(wuKong.TurnList.Right)
    wuKong.mecanumRun(wuKong.RunList.stop)
    turning_circle_left()
    wuKong.mecanumRun(wuKong.RunList.stop)
    turning_circle_right()
}
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
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
        basic.showIcon(IconNames.SmallHeart)
    }
})
function car_dance_1 () {
    wuKong.mecanumDrift(wuKong.TurnList.Left)
    wuKong.mecanumRun(wuKong.RunList.stop)
    wuKong.mecanumSpin(wuKong.TurnList.Left)
    wuKong.mecanumRun(wuKong.RunList.stop)
    wuKong.mecanumDrift(wuKong.TurnList.Right)
    wuKong.mecanumRun(wuKong.RunList.stop)
    wuKong.mecanumSpin(wuKong.TurnList.Right)
    wuKong.mecanumRun(wuKong.RunList.stop)
}
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
wuKong.mecanumStop()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
