const gauge = 16;
const bust = 112;
const ease = 5;

// body and neck
finalMeasure = bust + ease;  
bodySts = 2 * Math.ceil((gauge * (finalMeasure / 10)) / 2);
neck = 0.4 * finalMeasure;
neckSts = 2 * Math.ceil((gauge * (neck / 10)) / 2);

// shoulder
shoulderSts = Math.round(neckSts * 0.2);

// chest and back
chestSts = Math.round(neckSts * 0.3);

// over shoulders
raglan = Math.ceil((bodySts - (2 * chestSts)) / 4);
increasedTotal = neckSts + (8 * raglan);
sleeveSts = (increasedTotal - bodySts) / 2;
underarm = Math.floor(0.2 * sleeveSts);

console.log(`
Final measure: ${finalMeasure} cm
Body sts: ${bodySts}

CAST ON
Neck: ${neckSts} sts
Shoulder: ${shoulderSts} sts
Chest and back: ${chestSts}

AFTER INCREASES
Total over shoulders: ${increasedTotal} sts after ${raglan} raglan repeats
Sleeves: ${sleeveSts} sts on hold; pick up ${underarm} sts when starting sleeves.
Body: ${bodySts} body sts.
`)