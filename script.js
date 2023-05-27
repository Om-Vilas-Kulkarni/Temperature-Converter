function convert(){
    event.preventDefault();
    var a = document.getElementById('degrees').value;
    var b = document.getElementById('type').value;
    
    if (b == 'Celcius') {
        var d = ((a * 1.8) + 32).toFixed(1);
        var relf = d + " °F";
        temp1.value = relf;

        var e = parseFloat(a);
        var f = (273.15 + e);
        var relf2 = f + " K";
        temp2.value = relf2;
    }

    if (b == 'Fahrenheit') {
        var d = ((a-32)*0.56).toFixed(1);
        var relf = d + " °C";
        temp1.value = relf;

        var e = parseFloat(d);
        var f = (273.15 + e);
        var relf2 = f + " K";
        temp2.value = relf2;
    }

    if (b == 'Kelvin'){
        var d = parseFloat(a);
        var g = (d-273.15);
        var relf = g + " °C";
        temp1.value = relf;

        var h = parseFloat(g);
        var f = ((h * 1.8) + 32).toFixed(1);
        var relf2 = f + " °F";
        temp2.value = relf2;
    }

    
    }
