var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
function addmanc1() {
        a++;
        document.getElementById('vmanc1').value = a;
};
function submanc1() {
    if(a !== 0 & a > 0) {
        a--;
        document.getElementById('vmanc1').value = a;
    }
};
function addfacemaskc1() {
    b++;
    document.getElementById('vfacemaskc1').value = b;
};
function subfacemaskc1() {
    if(b !== 0 & b > 0) {
        b--;
        document.getElementById('vfacemaskc1').value = b;
    }
};
function addenergyc1() {
    c++;
    document.getElementById('venergyc1').value = c;
};
function subenergyc1() {
    if(c !== 0 & c > 0) {
        c--;
        document.getElementById('venergyc1').value = c;
    }
};
function addmanc2() {
    d++;
    document.getElementById('vmanc2').value = d;
};
function submanc2() {
    if(d !== 0 & d > 0) {
        d--;
        document.getElementById('vmanc2').value = d;
    }
};
function addfacemaskc2() {
    e++;
    document.getElementById('vfacemaskc2').value = e;
};
function subfacemaskc2() {
    if(e !== 0 & e > 0) {
        e--;
        document.getElementById('vfacemaskc2').value = e;
    }
};
function addenergyc2() {
    f++;
    document.getElementById('venergyc2').value = f;
};
function subenergyc2() {
    if(f !== 0 & f > 0) {
        f--;
        document.getElementById('venergyc2').value = f;
    }
};
function addmanc3() {
    g++;
    document.getElementById('vmanc3').value = g;
};
function submanc3() {
    if(g !== 0 & g > 0) {
        g--;
        document.getElementById('vmanc3').value = g;
    }
};
function addfacemaskc3() {
    h++;
    document.getElementById('vfacemaskc3').value = h;
};
function subfacemaskc3() {
    if(h !== 0 & h > 0) {
        h--;
        document.getElementById('vfacemaskc3').value = h;
    }
};
function addenergyc3() {
    i++;
    document.getElementById('venergyc3').value = i;
};
function subenergyc3() {
    if(i !== 0 & i > 0) {
        i--;
        document.getElementById('venergyc3').value = i;
    }
};
function allresultr1() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellraa = cell1 + cell2 + cell3;
    document.getElementById("total").innerHTML = allcellraa;
}
function allresultr2() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrss = cell1 - cell2 - cell3;
    document.getElementById("total").innerHTML = allcellrss;
}
function allresultr3() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrmm = cell1 * cell2 * cell3;
    document.getElementById("total").innerHTML = allcellrmm;
}
function allresultr4() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrdd = cell1 / cell2 / cell3;
    document.getElementById("total").innerHTML = allcellrdd;
}
function allresultr5() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf - ri;
    var allcellras = cell1 + cell2 - cell3;
    document.getElementById("total").innerHTML = allcellras;
}
function allresultr6() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellram = cell1 + cell2 * cell3;
    document.getElementById("total").innerHTML = allcellram;
}
function allresultr7() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrad = cell1 + cell2 / cell3;
    document.getElementById("total").innerHTML = allcellrad;
}
function allresultr8() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrsa = cell1 - cell2 + cell3;
    document.getElementById("total").innerHTML = allcellrsa;
}
function allresultr9() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrma = cell1 * cell2 + cell3;
    document.getElementById("total").innerHTML = allcellrma;
}
function allresultr10() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrda = cell1 / cell2 + cell3;
    document.getElementById("total").innerHTML = allcellrda;
}
function allresultr11() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrsm = cell1 - cell2 * cell3;
    document.getElementById("total").innerHTML = allcellrsm;
}
function allresultr12() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrsd = cell1 - cell2 / cell3;
    document.getElementById("total").innerHTML = allcellrsd;
}
function allresultr13() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrms = cell1 * cell2 - cell3;
    document.getElementById("total").innerHTML = allcellrms;
}
function allresultr14() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrds = cell1 / cell2 - cell3;
    document.getElementById("total").innerHTML = allcellrds;
}
function allresultr15() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrmd = cell1 * cell2 / cell3;
    document.getElementById("total").innerHTML = allcellrmd;
}
function allresultr16() {
    var ra = document.getElementById("vmanc1").value * 5;
    var rd = document.getElementById("vfacemaskc1").value * 3;
    var rg = document.getElementById("venergyc1").value * 6;
    var cell1 = ra + rd + rg;
    var rb = document.getElementById("vmanc2").value * 5;
    var re = document.getElementById("vfacemaskc2").value * 3;
    var rh = document.getElementById("venergyc2").value * 6;
    var cell2 = rb + re + rh;
    var rc = document.getElementById("vmanc3").value * 5;
    var rf = document.getElementById("vfacemaskc3").value * 3;
    var ri = document.getElementById("venergyc3").value * 6;
    var cell3 = rc + rf + ri;
    var allcellrdm = cell1 / cell2 * cell3;
    document.getElementById("total").innerHTML = allcellrdm;
}