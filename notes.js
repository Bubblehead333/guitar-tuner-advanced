/*
I initialise all available notes to be played
 */

//Octave 1
var C2 = new Audio('audio/C1.mp3'); //24
var C2sharp = new Audio('audio/C1sharp.mp3'); //25

var D2 = new Audio('audio/D1.mp3'); //26
var D2sharp = new Audio('audio/D1sharp.mp3'); //27

var E2 = new Audio('audio/E1.mp3'); //28

var F2 = new Audio('audio/F1.mp3'); //29
var F2sharp = new Audio('audio/F1sharp.mp3'); //30

var G2 = new Audio('audio/G1.mp3'); //31
var G2sharp = new Audio('audio/G1sharp.mp3'); //32

var A2 = new Audio('audio/A1.mp3'); //33
var A1sharp = new Audio('audio/A1sharp.mp3'); //34

var B2 = new Audio('audio/B1.mp3'); //35

//Octave 2
var C3 = new Audio('audio/C2.mp3'); //36
var C3sharp = new Audio('audio/C2sharp.mp3'); //37

var D3 = new Audio('audio/D2.mp3'); //38
var D3sharp = new Audio('audio/D2sharp.mp3'); //39

var E3 = new Audio('audio/E2.mp3'); //40

var F3 = new Audio('audio/F2sharp.mp3'); //41
var F3sharp = new Audio('audio/F2sharp.mp3'); //42

var G3 = new Audio('audio/G2.mp3'); //43
var G3sharp = new Audio('audio/G2sharp.mp3'); //44

var A3 = new Audio('audio/A2.mp3'); //45
var A3sharp = new Audio('audio/A2sharp.mp3'); //46

var B3 = new Audio('audio/B2.mp3'); //47

//Octave 3
var C4 = new Audio('audio/C3.mp3'); //48
var C4sharp = new Audio('audio/C3sharp.mp3'); //49

var D4 = new Audio('audio/D3.mp3'); //50
var D4sharp = new Audio('audio/D3sharp.mp3'); //51

var E4 = new Audio('audio/E3.mp3'); //52

var F4 = new Audio('audio/F3.mp3'); //53
var F4sharp = new Audio('audio/F3sharp.mp3'); //54

var G4 = new Audio('audio/G3.mp3'); //55
var G4sharp = new Audio('audio/G3sharp.mp3'); //56

var A4 = new Audio('audio/A3.mp3'); //57
var A4sharp = new Audio('audio/A3sharp.mp3'); //58

var B4 = new Audio('audio/B3.mp3'); //59

//Octave 4
var C5 = new Audio('audio/C4.mp3'); //60
var C5sharp = new Audio('audio/C4sharp.mp3'); //61

var D5 = new Audio('audio/D4.mp3'); //62
var D5sharp = new Audio('audio/D4sharp.mp3'); //63

var E5 = new Audio('audio/E4.mp3'); //64

var F5 = new Audio('audio/F4.mp3'); //65
var F5sharp = new Audio('audio/F4sharp.mp3'); //66

var G5 = new Audio('audio/G4.mp3'); //67
var G5sharp = new Audio('audio/G4sharp.mp3'); //68

var A5 = new Audio('audio/A4.mp3'); //69
var A5sharp = new Audio('audio/A4sharp.mp3'); //70

var B5 = new Audio('audio/B4.mp3'); //71

//Octave 5
var C6 = new Audio('audio/C5.mp3'); //72
var C6sharp = new Audio('audio/C5sharp.mp3'); //73

function getFrequencyFromNote(note)
{
    var frequency = 0.0;
    // note = note + 12; //This is to compensate - the chords should be - 12
    switch(note){
        case 24:
            frequency = 32.70;
            break;
        case 25:
            frequency = 34.65;
            break;
        case 26:
            frequency = 36.71;
            break;
        case 27:
            frequency = 38.89;
            break;
        case 28:
            frequency = 41.2;
            break;
        case 29:
            frequency = 43.65;
            break;
        case 30:
            frequency = 46.25;
            break;
        case 31:
            frequency = 49;
            break;
        case 32:
            frequency = 51.91;
            break;
        case 33:
            frequency = 55;
            break;
        case 34:
            frequency = 58.27;
            break;
        case 35:
            frequency = 61.74;
            break;
        case 36:
            frequency = 65.41;
            break;
        case 37:
            frequency = 69.30;
            break;
        case 38:
            frequency = 73.42;
            break;
        case 39:
            frequency = 77.78;
            break;
        case 40:
            frequency = 82.41;
            break;
        case 41:
            frequency = 87.31;
            break;
        case 42:
            frequency = 92.50;
            break;
        case 43:
            frequency = 98;
            break;
        case 44:
            frequency = 103.83;
            break;
        case 45:
            frequency = 110;
            break;
        case 46:
            frequency = 116.54;
            break;
        case 47:
            frequency = 123.47;
            break;
        case 48:
            frequency = 130.81;
            break;
        case 49:
            frequency = 138.59;
            break;
        case 50:
            frequency = 146.83;
            break;
        case 51:
            frequency = 155.56;
            break;
        case 52:
            frequency = 164.83;
            break;
        case 53:
            frequency = 174.61;
            break;
        case 54:
            frequency = 185;
            break;
        case 55:
            frequency = 196;
            break;
        case 56:
            frequency = 207.65;
            break;
        case 57:
            frequency = 220;
            break;
        case 58:
            frequency = 233.08;
            break;
        case 59:
            frequency = 246.94;
            break;
        case 60:
            frequency = 261.63;
            break;
        case 61:
            frequency = 277.18;
            break;
        case 62:
            frequency = 293.66;
            break;
        case 63:
            frequency = 311.13;
            break;
        case 64:
            frequency = 329.63;
            break;
        case 65:
            frequency = 349.23;
            break;
        case 66:
            frequency = 369.99;
            break;
        case 67:
            frequency = 392;
            break;
        case 68:
            frequency = 415.3;
            break;
        case 69:
            frequency = 440;
            break;
        case 70:
            frequency = 466.16;
            break;
    }
    return frequency;
}
