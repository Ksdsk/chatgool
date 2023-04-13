let reqLevel = {
    0: 0,
    1: 100,
    2: 255,
    3: 475,
    4: 770,
    5: 1150,
    6: 1625,
    7: 2205,
    8: 2900,
    9: 3720,
    10: 4675,
    11: 5775,
    12: 7030,
    13: 8450,
    14: 10045,
    15: 11825,
    16: 13800,
    17: 15980,
    18: 18375,
    19: 20995,
    20: 23850,
    21: 26950,
    22: 30305,
    23: 33925,
    24: 37820,
    25: 42000,
    26: 46475,
    27: 51255,
    28: 56350,
    29: 61770,
    30: 67525,
    31: 73625,
    32: 80080,
    33: 86900,
    34: 94095,
    35: 101675,
    36: 109650,
    37: 118030,
    38: 126825,
    39: 136045,
    40: 145700,
    41: 155800,
    42: 166355,
    43: 177375,
    44: 188870,
    45: 200850
}

function calculate() {
    let level = document.getElementById('level').value;
    let exp = parseInt(document.getElementById('exp').value);
    let expReq = reqLevel[45] - (reqLevel[level - 1] + exp);
    document.getElementById('expcalc').innerHTML = expReq;
    expcalc();
}

function expcalc() {
    let daily = parseInt(document.getElementById('daily').value);
    let expReq = parseInt(document.getElementById('expcalc').innerHTML);
    let dayExp = expReq/daily;
    document.getElementById('daycalc').innerHTML = dayExp;
}