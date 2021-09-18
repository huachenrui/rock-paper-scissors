let hand = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        `)
    } else {
        basic.showLeds(`
            # # . . #
                        # # . # .
                        . . # . .
                        # # . # .
                        # # . . #
        `)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showString("" + ("" + input.temperature()))
})
