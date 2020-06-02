 /*
This script contains a few guitar tunings, each string is set to a frequency
to be played. This is very primartive, a better idea would be to assign a
frequency to each note across a keyboard, and then the tuning retrieved the
note using a MIDI standard or identifier (TODO)
 */

function changeTuning(){
    var tuning = document.getElementById("tune-select").value;

    switch(tuning){
        case 'standard':
            // document.getElementById("active-tuning").innerHTML = "Standard";
            document.getElementById("string1").innerHTML = "E";
            string1 = 40;
            string1FQ = 164.8;
            document.getElementById("string2").innerHTML = "A";
            string2 = 45;
            string2FQ = 220.0;
            document.getElementById("string3").innerHTML = "D";
            string3 = 50;
            string3FQ = 293.7;
            document.getElementById("string4").innerHTML = "G";
            string4 = 55;
            string4FQ = 392.0;
            document.getElementById("string5").innerHTML = "B";
            string5 = 59;
            string5FQ = 493.9;
            document.getElementById("string6").innerHTML = "E";
            string6 = 64;
            string6FQ = 659.3;
            break;
        case 'drop-d':
            // document.getElementById("active-tuning").innerHTML = "Drop-D";
            document.getElementById("string1").innerHTML = "D";
            string1 = 38;
            string1FQ = 146.8;
            document.getElementById("string2").innerHTML = "A";
            string2 = 45;
            string2FQ = 220.0;
            document.getElementById("string3").innerHTML = "D";
            string3 = 50;
            string3FQ = 293.7;
            document.getElementById("string4").innerHTML = "G";
            string4 = 55;
            string4FQ = 392.0;
            document.getElementById("string5").innerHTML = "B";
            string5 = 59;
            string5FQ = 493.9;
            document.getElementById("string6").innerHTML = "E";
            string6 = 64;
            string6FQ = 659.3;
            break;
        case 'drop-c':
            // document.getElementById("active-tuning").innerHTML = "Drop-C";
            document.getElementById("string1").innerHTML = "C";
            string1 = 36;
            string1FQ = 130.8;
            document.getElementById("string2").innerHTML = "G";
            string2 = 43;
            string2FQ = 196.0;
            document.getElementById("string3").innerHTML = "C";
            string3 = 48;
            string3FQ = 261.6;
            document.getElementById("string4").innerHTML = "F";
            string4 = 52;
            string4FQ = 349.2;
            document.getElementById("string5").innerHTML = "A";
            string5 = 57;
            string5FQ = 440.0;
            document.getElementById("string6").innerHTML = "D";
            string6 = 62;
            string6FQ = 587.3;
            break;
        case 'half-step-down':
            // document.getElementById("active-tuning").innerHTML = "Half Step Down";
            document.getElementById("string1").innerHTML = "Eb";
            string1 = 39;
            string1FQ = 155.6;
            document.getElementById("string2").innerHTML = "Ab";
            string2 = 44;
            string2FQ = 207.7;
            document.getElementById("string3").innerHTML = "Db";
            string3 = 49;
            string3FQ = 277.2;
            document.getElementById("string4").innerHTML = "Gb";
            string4 = 54;
            string4FQ = 370.0;
            document.getElementById("string5").innerHTML = "Bb";
            string5 = 58;
            string5FQ = 466.2;
            document.getElementById("string6").innerHTML = "Eb";
            string6 = 63;
            string6FQ = 622.3;
            break;
        // case 'open-c':
        //     // document.getElementById("active-tuning").innerHTML = "Open C";
        //     document.getElementById("string1").innerHTML = "C";
        //     string1 = 130.8;
        //     document.getElementById("string2").innerHTML = "G";
        //     string2 = 196.0;
        //     document.getElementById("string3").innerHTML = "C";
        //     string3 = 261.6;
        //     document.getElementById("string4").innerHTML = "G";
        //     string4 = 392.0;
        //     document.getElementById("string5").innerHTML = "C";
        //     string5 = 523.3;
        //     document.getElementById("string6").innerHTML = "E";
        //     string6 = 659.3;
        //     break;
    }
}
