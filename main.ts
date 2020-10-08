// Created by: Mikayla Barthelette
// Created on: Oct 2020
// 
// This program allows us to calculate the perimeter and area of a trapezoid
game.splash("Let's calculate the area and perimeter of a trapezoid.")
let Base_1 = game.askForNumber("Enter the measurement of base 1 (cm):")
let Base_2 = game.askForNumber("Enter the measurement of base 2 (cm):")
let Height = game.askForNumber("Enter the measurement of height (cm):")
let Diagonal = game.askForNumber("Enter the measurement of the diagonal line (cm):")
let Perimeter = Base_1 + (Base_2 + (Height + Diagonal))
game.splash("The perimeter of a trapezoid dimensions:" + Base_1 + " cm by " + Base_2 + " cm by " + Height + " cm by " + Diagonal + " cm is " + convertToText(Perimeter) + "cm")
let first_area = Base_1 + Base_2
game.splash("The first area of a trapezoid dimensions:" + Base_1 + "cm plus " + Base_2 + "cm is " + first_area + "cm")
let second_area = first_area / 2
game.splash("The area of a trapezoid is: " + first_area + " cm divided by " + " 2 " + " cm is " + second_area + "cm")
let Area = second_area * Height
game.splash("The area of the trapezoid is: " + second_area + " cm by " + Height + " cm is " + Area + " cm ")
game.splash("Done")
