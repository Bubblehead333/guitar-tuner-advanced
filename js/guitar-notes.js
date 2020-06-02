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
var A2sharp = new Audio('audio/A1sharp.mp3'); //34

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

function playNote(note){

    if(useSynthesiser == true){
        playSound(getFrequencyFromNote(note));
    } else {
        switch(note){
            case 24:
                C1.load();
                C1.play();
                C1.loop = looping;
                break;
            case 25:
                C1sharp.load();
                C1sharp.play();
                C1sharp.loop = looping;
                break;
            case 26:
                D1.load();
                D1.play();
                D1.loop = looping;
                break;
            case 27:
                D1sharp.load();
                D1sharp.play();
                D1sharp.loop = looping;
                break;
            case 28:
                E1.load();
                E1.play();
                E1.loop = looping;
                break;
            case 29:
                F1.load();
                F1.play();
                F1.loop = looping;
                break;
            case 30:
                F1sharp.load();
                F1sharp.play();
                F1sharp.loop = looping;
                break;
            case 31:
                G1.load();
                G1.play();
                G1.loop = looping;
                break;
            case 32:
                G1sharp.load();
                G1sharp.play();
                G1sharp.loop = looping;
                break;
            case 33:
                A1.load();
                A1.play();
                A1.loop = looping;
                break;
            case 34:
                A1sharp.load();
                A1sharp.play();
                A1sharp.loop = looping;
                break;
            case 35:
                B1.load();
                B1.play();
                B1.loop = looping;
                break;
            case 36:
                C2.load();
                C2.muted = false;
                C2.play();
                C2.loop = looping;
                break;
            case 37:
                C2sharp.load();
                C2sharp.muted = false;
                C2sharp.play();
                C2sharp.loop = looping;
                break;
            case 38:
                D2.load();
                D2.muted = false;
                D2.play();
                D2.loop = looping;
                break;
            case 39:
                D2sharp.load();
                D2sharp.muted = false;
                D2sharp.play();
                D2sharp.loop = looping;
                break;
            case 40:
                E2.load();
                E2.muted = false;
                E2.play();
                E2.loop = looping;
                break;
            case 41:
                F2.load();
                F2.muted = false;
                F2.play();
                F2.loop = looping;
                break;
            case 42:
                F2sharp.load();
                F2sharp.muted = false;
                F2sharp.play();
                F2sharp.loop = looping;
                break;
            case 43:
                G2.load();
                G2.muted = false;
                G2.play();
                G2.loop = looping;
                break;
            case 44:
                G2sharp.load();
                G2sharp.muted = false;
                G2sharp.play();
                G2sharp.loop = looping;
                break;
            case 45:
                A2.load();
                A2.muted = false;
                A2.play();
                A2.loop = looping;
                break;
            case 46:
                A2sharp.load();
                A2sharp.muted = false;
                A2sharp.play();
                A2sharp.loop = looping;
                break;
            case 47:
                B2.load();
                B2.muted = false;
                B2.play();
                B2.loop = looping;
                break;
            case 48:
                C3.load();
                C3.muted = false;
                C3.play();
                C3.loop = looping;
                break;
            case 49:
                C3sharp.load();
                C3sharp.muted = false;
                C3sharp.play();
                C3sharp.loop = looping;
                break;
            case 50:
                D3.load();
                D3.muted = false;
                D3.play();
                D3.loop = looping;
                break;
            case 51:
                D3sharp.load();
                D3sharp.muted = false;
                D3sharp.play();
                D3sharp.loop = looping;
                break;
            case 52:
                E3.load();
                E3.muted = false;
                E3.play();
                E3.loop = looping;
                break;
            case 53:
                F3.load();
                F3.muted = false;
                F3.play();
                F3.loop = looping;
                break;
            case 54:
                F3sharp.load();
                F3sharp.muted = false;
                F3sharp.play();
                F3sharp.loop = looping;
                break;
            case 55:
                G3.load();
                G3.muted = false;
                G3.play();
                G3.loop = looping;
                break;
            case 56:
                G3sharp.load();
                G3sharp.muted = false;
                G3sharp.play();
                G3sharp.loop = looping;
                break;
            case 57:
                A3.load();
                A3.muted = false;
                A3.play();
                A3.loop = looping;
                break;
            case 58:
                A3sharp.load();
                A3sharp.muted = false;
                A3sharp.play();
                A3sharp.loop = looping;
                break;
            case 59:
                B3.load();
                B3.muted = false;
                B3.play();
                B3.loop = looping;
                break;
            case 60:
                C4.load();
                C4.muted = false;
                C4.play();
                C4.loop = looping;
                break;
            case 61:
                C4sharp.load();
                C4sharp.muted = false;
                C4sharp.play();
                C4sharp.loop = looping;
                break;
            case 62:
                D4.load();
                D4.muted = false;
                D4.play();
                D4.loop = looping;
                break;
            case 63:
                D4sharp.load();
                D4sharp.muted = false;
                D4sharp.play();
                D4sharp.loop = looping;
                break;
            case 64:
                E4.load();
                E4.muted = false;
                E4.play();
                E4.loop = looping;
                break;
            case 65:
                F4.load();
                F4.muted = false;
                F4.play();
                F4.loop = looping;
                break;
            case 66:
                F4sharp.load();
                F4sharp.muted = false;
                F4sharp.play();
                F4sharp.loop = looping;
                break;
            case 67:
                G4.load();
                G4.muted = false;
                G4.play();
                G4.loop = looping;
                break;
        }
    }
}


function stopGuitarNotes()
{
    //The following notes do not exist yet
    // C1.muted = true;
    // C1sharp.muted = true;
    // D1.muted = true;
    // D1sharp.muted = true;
    // E1.muted = true;
    // F1.muted = true;
    // F1sharp.muted = true;
    // G1.muted = true;
    // G1sharp.muted = true;
    // A1.muted = true;
    // A1sharp.muted = true;
    // B1.muted = true;
    C2.muted = true;
    C2sharp.muted = true;
    D2.muted = true;
    D2sharp.muted = true;
    E2.muted = true;
    F2.muted = true;
    F2sharp.muted = true;
    G2.muted = true;
    G2sharp.muted = true;
    A2.muted = true;
    A2sharp.muted = true;
    B2.muted = true;
    C3.muted = true;
    C3sharp.muted = true;
    D3.muted = true;
    D3sharp.muted = true;
    E3.muted = true;
    F3.muted = true;
    F3sharp.muted = true;
    G3.muted = true;
    G3sharp.muted = true;
    A3.muted = true;
    A3sharp.muted = true;
    B3.muted = true;
    C4.muted = true;
    C4sharp.muted = true;
    D4.muted = true;
    D4sharp.muted = true;
    E4.muted = true;
    F4.muted = true;
    F4sharp.muted = true;
    G4.muted = true;
}
