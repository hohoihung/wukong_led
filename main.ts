function Blink_LED (list: number[]) {
    for (let index = 0; index < 4; index++) {
        strip.setPixelColor(list[0], neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(list[1], neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.showNumber(list[0])
        basic.showNumber(list[1])
    }
}
function turning_circle_right () {
    wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 50)
    wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 50)
    wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 100)
    wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 100)
}
input.onButtonPressed(Button.A, function () {
    wuKong.lightIntensity(100)
    wuKong.mecanumDrift(wuKong.TurnList.Left)
    list = [0, 3]
    Blink_LED(list)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Diamond)
    wuKong.mecanumRun(wuKong.RunList.stop)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
    list = [0, 3]
    Blink_LED(list)
    basic.pause(1000)
    list = [1, 2]
    Blink_LED(list)
    basic.showIcon(IconNames.Square)
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
    strip.clear()
}
input.onButtonPressed(Button.AB, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    wuKong.mecanumRun(wuKong.RunList.stop)
})
function signalling (seconds: number) {
    strip.clear()
    L = randint(0, 100)
    R = randint(0, 100)
    if (R > L) {
        list = [1, 3]
        Blink_LED(list)
    }
    if (L > R) {
        list = [0, 2]
        Blink_LED(list)
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, L)
        wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, L)
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, R)
        wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, R)
    }
    strip.show()
    basic.pause(seconds)
}
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
let R = 0
let L = 0
let list: number[] = []
let strip: neopixel.Strip = null
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
wuKong.mecanumStop()
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    wuKong.setServoAngel(wuKong.ServoList.S1, 0)
    basic.pause(500)
    wuKong.setServoAngel(wuKong.ServoList.S1, 49)
    basic.pause(500)
    wuKong.setServoAngel(wuKong.ServoList.S1, 106)
    basic.pause(500)
    wuKong.setServoAngel(wuKong.ServoList.S1, 171)
    basic.pause(500)
})
