var nn = "heart";
var h = 59;
var w = 42.5;
var eInch;

    eInch = h % 12;
    h = h / 12;
    w = w * 2.20462;

    if (confirm("Press a button")) {
        console.log(nn);
        console.log(parseInt(h) + `'` + parseInt(eInch) + `"`);
        console.log(w + " lbs");
    }
    else {
        console.log("User does not wish to share his/her information."); 
    }
    