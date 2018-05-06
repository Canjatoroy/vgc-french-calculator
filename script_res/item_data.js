var ITEMS_GSC = [
    'Baie',
    'Jus de Baie',
    'Ceinture Noire',
    'Lunettes Noires',
    'Charbon',
    'Croc Dragon',
    'Baie Dorée',
    'Pierre Dure',
    'Roche Royale',
    'Restes',
    'Balle Lumière',
    'Aimant',
    'Peau Métal',
    'Poudre Métal',
    'Graine Miracle',
    'Eau Mystique',
    'Glace Éternelle',
    'Ruban Rose',
    'Pic Venin',
    'Ruban à Pois',
    'Bec Pointu',
    'Poudre Argentée',
    'Sable Doux',
    'Rune Sort',
    'Bâton',
    'Masse Os',
    'Cuiller Tordue'
];

var ITEMS_ADV = ITEMS_GSC.concat([
    'Bandeau Choix',
    'Écaille Océan',
    'Dent Océan',
    'Baie Oran',
    'Mouchoir Soie',
    'Baie Sitrus',
    'Rosée Âme'
]);

ITEMS_ADV.splice(ITEMS_ADV.indexOf('Baie'), 1);
ITEMS_ADV.splice(ITEMS_ADV.indexOf('Baie Dorée'), 1);
ITEMS_ADV.splice(ITEMS_ADV.indexOf('Ruban Rose'), 1);
ITEMS_ADV.splice(ITEMS_ADV.indexOf('Ruban à Pois'), 1);

var ITEMS_DPP = ITEMS_ADV.concat([
    'Orbe Adamant',
    'Baie Abriko',
    'Baie Babiri',
    'Baie Myrte',
    'Boue Noire',
    'Baie Charti',
    'Baie Maron',
    'Baie Zalis',
    'Mouchoir Choix',
    'Lunettes Choix',
    'Baie Pomroz',
    'Baie Cobaba',
    'Baie Lampou',
    'Baie Chérim',
    'Plaque Draco',
    'Plaque Ombre',
    'Baie Durin',
    'Plaque Terre',
    'Baie Enigma',
    'Ceinture Pro',
    'Plaque Poing',
    'Orbe Flamme',
    'Plaque Flamme',
    'Baie Lingan',
    'Orbe Platiné',
    'Baie Fraigo',
    'Plaque Glace',
    'Plaque Insecte',
    'Balle Fer',
    'Plaque Fer',
    'Baie Jaboca',
    'Baie Sédra',
    'Baie Kébia',
    'Ralentiqueue',
    'Baie Lansat',
    'Baie Mepo',
    'Baie Lichii',
    'Orbe Vie',
    'Baie Prine',
    'Orbe Perlé',
    'Bracelet Macho',
    'Plaque Herbe',
    'Baie Micle',
    'Plaque Esprit',
    'Bandeau Muscle',
    'Baie Chocco',
    'Encens Bizarre',
    'Baie Pocpoc',
    'Baie Yapap',
    'Baie Pitaye',
    'Baie Fraive',
    'Croc Rasoir',
    'Baie Ratam',
    'Encens Roc',
    'Encens Fleur',
    'Baie Pommo',
    'Baie Sailak',
    'Baie Jouca',
    'Encens Mer',
    'Plaque Ciel',
    'Plaque Hydro',
    'Plaque Fantôme',
    'Baie Frista',
    'Plaque Roc',
    'Baie Panga',
    'Orbe Toxique',
    'Plaque Toxik',
    'Baie Parma',
    'Baie Stekpa',
    'Encens Vague',
    'Lunettes Sages',
    'Baie Nanone',
    'Plaque Volt'
]);

var ITEMS_BW = ITEMS_DPP.concat([
    'Ballon',
    'Joyau Insecte',
    'Joyau Ténèbre',
    'Joyau Dragon',
    'Joyau Électr',
    'Évoluroc',
    'Joyau Combat',
    'Joyau Feu',
    'Joyau Vol',
    'Joyau Spectre',
    'Joyau Plante',
    'Joyau Sol',
    'Joyau Glace',
    'Joyau Normal',
    'Joyau Poison',
    'Joyau Psy',
    'Joyau Roche',
    'Joyau Acier',
    'Joyau Eau'
]);

var ITEMS_XY = ITEMS_BW.concat([
    'Veste de Combat',
    'Baie Éka',
    'Baie Rangma',
    'Plaque Pixie',
    'Baie Selro',
    'Lunettes Filtre'
]);

ITEMS_XY.splice(ITEMS_XY.indexOf('Lunettes Noires'), 1, 'Lunettes Noires');
ITEMS_XY.splice(ITEMS_XY.indexOf('Écaille Océan'), 1, 'Écaille Océan');
ITEMS_XY.splice(ITEMS_XY.indexOf('Dent Océan'), 1, 'Dent Océan');
ITEMS_XY.splice(ITEMS_XY.indexOf('Glace Éternelle'), 1, 'Glace Éternelle');
ITEMS_XY.splice(ITEMS_XY.indexOf('Poudre Argentée'), 1, 'Poudre Argentée');
ITEMS_XY.splice(ITEMS_XY.indexOf('Cuiller Tordue'), 1, 'Cuiller Tordue');
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Insect'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Ténèbres'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Dragon'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Électrik'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Combat'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Feu'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Vol'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Spectre'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Plante'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Sol'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Glace'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Poison'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Psy'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Roche'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Acier'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Joyau Eau'), 1);
ITEMS_XY.splice(ITEMS_XY.indexOf('Rosée Âme'), 1);


var ITEMS_SM = ITEMS_XY.concat([
    'Baie Figuy'
]);

function getItemBoostType(item) {
    switch (item) {
        case 'Plaque Draco':
        case 'Croc Dragon':
            return 'Dragon';
        case 'Plaque Ombre':
        case 'Lunettes Noires':
        case 'LunettesNoires':
            return 'Ténèbres';
        case 'Plaque Terre':
        case 'Sable Doux':
            return 'Sol';
        case 'Plaque Poing':
        case 'Ceinture Noire':
            return 'Combat';
        case 'Plaque Flamme':
        case 'Charbon':
            return 'Feu';
        case 'Plaque Glace':
        case 'Glace Éternelle':
        case 'Glace-Éternelle':
            return 'Glace';
        case 'Plaque Insecte':
        case 'Poudre Argentée':
            return 'Insecte';
        case 'Plaque Fer':
        case 'Peau Métal':
        case 'Peau-Métal':
            return 'Acier';
        case 'Plaque Herbe':
        case 'Encens Fleur':
        case 'Graine Miracle':
            return 'Plante';
        case 'Plaque Esprit':
        case 'Encens Bizarre':
        case 'Cuiller Tordue':
        case 'Cuiller-Tordue':
            return 'Psy';
        case 'Plaque Pixie':
            return 'Fée';
        case 'Plaque Ciel':
        case 'Bec Pointu':
            return 'Vol';
        case 'Plaque Hydro':
        case 'Encens Mer':
        case 'Encens Vague':
        case 'Eau Mystique':
            return 'Eau';
        case 'Plaque Fantôme':
        case 'Rune Sort':
            return 'Spectre';
        case 'Plaque Roc':
        case 'Encens Roc':
        case 'Pierre Dure':
            return 'Roche';
        case 'Plaque Toxik':
        case 'Pic Venin':
            return 'Poison';
        case 'Plaque Volt':
        case 'Aimant':
            return 'Électrik';
        case 'Mouchoir Soie':
        case 'Ruban Rose':
        case 'Ruban à Pois':
            return 'Normal';
        default:
            return '';
    }
}

function getBerryResistType(berry) {
    switch (berry) {
        case 'Baie Zalis':
            return 'Normal';
        case 'Baie Chocco':
            return 'Feu';
        case 'Baie Pocpoc':
            return 'Eau';
        case 'Baie Parma':
            return 'Électrik';
        case 'Baie Ratam':
            return 'Plante';
        case 'Baie Nanone':
            return 'Glace';
        case 'Baie Pomroz':
            return 'Combat';
        case 'Baie Kébia':
            return 'Poison';
        case 'Baie Jouca':
            return 'Sol';
        case 'Baie Cobaba':
            return 'Vol';
        case 'Baie Yapap':
            return 'Psy';
        case 'Baie Panga':
            return 'Insecte';
        case 'Baie Charti':
            return 'Roche';
        case 'Baie Sédra':
            return 'Spectre';
        case 'Baie Fraigo':
            return 'Dragon';
        case 'Baie Lampou':
            return 'Ténèbres';
        case 'Baie Babiri':
            return 'Acier';
        case 'Baie Selro':
            return 'Fée';
        default:
            return '';
    }
}

function getFlingPower(item) {
    return item === 'Balle Fer' ? 130
        : item === 'Pierre Dure' ? 100
        : item.indexOf('Plaque') !== -1 || ['Dent Océan','Masse Os'].indexOf(item) !== -1 ? 90
        : ['Veste de Combat','Vulné-Assurance'].indexOf(item) !== -1 ? 80
        : ['Pic Venin','Croc Dragon'].indexOf(item) !== -1 ? 70
        : ['Orbe Adamant','Orbe Perlé','Bracelet Macho','Bâton'].indexOf(item) !== -1 ? 60
        : item === 'Bec Pointu' ? 50
        : item === 'Évoluroc' ? 40
        : ['Ceinture Noire','Boue Noire','Lunettes Noires','Charbon','Écaille Océan','Orbe Flamme',"Roche Royale",
            'Orbe Vie','Balle Lumière','Aimant','Peau Métal','Graine Miracle','Eau Mystique','Glace Éternelle',
            'Croc Rasoir','Rosée Âme','Rune Sort','Orbe Toxique','Cuiller Tordue'].indexOf(item) !== -1 ? 30
        : 10;
}

function getNaturalGift(item) {
    var gift = {
        'Baie Abriko' : {'t':'Sol','p':100},
        'Baie Babiri' : {'t':'Acier','p':80},
        'Baie Myrte' : {'t':'Électrik','p':100},
        'Baie Charti' : {'t':'Roche','p':80},
        'Baie Maron' : {'t':'Eau','p':80},
        'Baie Zalis' : {'t':'Normal','p':80},
        'Baie Pomroz' : {'t':'Combat','p':80},
        'Baie Cobaba' : {'t':'Vol','p':80},
        'Baie Lampou' : {'t':'Ténèbres','p':80},
        'Baie Chérim' : {'t':'Spectre','p':100},
        'Baie Durin' : {'t':'Eau','p':100},
        'Baie Enigma' : {'t':'Insecte','p':100},
        'Baie Lingan' : {'t':'Glace','p':100},
        'Baie Fraigo' : {'t':'Dragon','p':80},
        'Baie Jaboca' : {'t':'Dragon','p':100},
        'Baie Sédra' : {'t':'Specre','p':80},
        'Baie Kébia' : {'t':'Poison','p':80},
        'Baie Éka' : {'t':'Fée','p':100},
        'Baie Lansat' : {'t':'Vol','p':100},
        'Baie Mepo' : {'t':'Combat','p':80},
        'Baie Lichii' : {'t':'Plante','p':100},
        'Baie Prine' : {'t':'Vol','p':80},
        'Baie Rangma' : {'t':'Ténèbres','p':100},
        'Baie Micle' : {'t':'Roche','p':100},
        'Baie Chocco' : {'t':'Feu','p':80},
        'Baie Oran' : {'t':'Poison','p':80},
        'Baie Pocpoc' : {'t':'Eau','p':80},
        'Baie Yapap' : {'t':'Psy','p':80},
        'Baie Pitaye' : {'t':'Poison','p':100},
        'Baie Fraive' : {'t':'Plante','p':80},
        'Baie Ratam' : {'t':'Plante','p':80},
        'Baie Selro' : {'t':'Fée','p':80},
        'Baie Pommo' : {'t':'Ténèbres','p':100},
        'Baie Sailak' : {'t':'Combat','p':100},
        'Baie Jouca' : {'t':'Sol','p':80},
        'Baie Sitrus' : {'t':'Psy','p':80},
        'Baie Frista' : {'t':'Psy','p':100},
        'Baie Panga' : {'t':'Insecte','p':80},
        'Baie Parma' : {'t':'Électrik','p':80},
        'Baie Stekpa' : {'t':'Feu','p':100},
        'Baie Nanone' : {'t':'Glace','p':80}
    }[item];
    if (gift) {
        if (gen < 6) {
            gift.p -= 20;
        }
        return gift;
    }
    return {'t':'Normal','p':1};


}