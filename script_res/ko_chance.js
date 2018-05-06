function getKOChanceText(damage, move, defender, field, isBadDreams) {
    if (isNaN(damage[0])) {
       return 'si quelque chose ne fonctionne pas, merci de contacter Lokidari';
    }
    if (damage[damage.length-1] === 0) {
        if (field.weather === "Terre Finale" && move.type === "Eau") {
            return 'Le soleil brille si intensément que toute attaque de type eau sévapore';
        } else if (field.weather === "Mer Primaire" && move.type === "Feu") {
            return 'La pluie battante empêche toute attaque de type feu';
        }
        return 'Éssayez plutôt de viser la corne';
    }
    var hasSitrus = defender.item === 'Baie Sitrus';
    var hasFigy = defender.item === 'Baie Figuy';
    var gluttony = defender.ability === "Gloutonnerie";
    if ((damage.length !== 256 || (!hasSitrus && !hasFigy)) && damage[0] >= defender.curHP) {
        return 'KO garanti';
    } else if (damage.length === 256 && hasSitrus && damage[0] >= defender.curHP + Math.floor(defender.maxHP / 4)) {
        return 'KO garanti';
    } else if (damage.length === 256 && hasFigy && damage[0] >= defender.curHP + Math.floor(defender.maxHP / 2)) {
        return 'KO garanti';
    }

    var hazards = 0;
    var hazardText = [];
    if (field.isSR && defender.ability !== 'Garde Magik') {
        var effectiveness = typeChart['Roche'][defender.type1] * (defender.type2 ? typeChart['Roche'][defender.type2] : 1);
        hazards += Math.floor(effectiveness * defender.maxHP / 8);
        hazardText.push('Piège de Roc');
    }
    if ([defender.type1, defender.type2].indexOf('Vol') === -1 &&
            ['Garde Magik', 'Lévitation'].indexOf(defender.ability) === -1 && defender.item !== 'Ballon') {
        if (field.spikes === 1) {
            hazards += Math.floor(defender.maxHP / 8);
            if (gen === 2) {
                hazardText.push('Picots');
            } else {
                hazardText.push('1 rangée de picots');
            }
        } else if (field.spikes === 2) {
            hazards += Math.floor(defender.maxHP / 6);
            hazardText.push('2 rangées de picots');
        } else if (field.spikes === 3) {
            hazards += Math.floor(defender.maxHP / 4);
            hazardText.push('3 rangées de picots');
        }
    }
    if (isNaN(hazards)) {
        hazards = 0;
    }

    var eot = 0;
    var eotText = [];
    if (field.weather === 'Soleil') {
        if (defender.ability === 'Peau Sèche' || defender.ability === 'Force Soleil') {
            eot -= Math.floor(defender.maxHP / 8);
            eotText.push('les dégâts de '+ defender.ability);
        }
    } else if (field.weather === 'Pluie') {
        if (defender.ability === 'Peau Sèche') {
            eot += Math.floor(defender.maxHP / 8);
            eotText.push('la regénération de Peau Sèche');
        } else if (defender.ability === 'Cuvette') {
            eot += Math.floor(defender.maxHP / 16);
            eotText.push('la regénération de Cuvette');
        }
    } else if (field.weather === 'Sable') {
        if (['Roche', 'Sol', 'Acier'].indexOf(defender.type1) === -1 &&
                ['Roche', 'Sol', 'Acier'].indexOf(defender.type2) === -1 &&
                ['Garde Magik', 'Envelocape', 'Force Sable', 'Baigne Sable', 'Voile Sable'].indexOf(defender.ability) === -1 &&
                defender.item !== 'Lunettes Filtre') {
            eot -= Math.floor(defender.maxHP / 16);
            eotText.push('les dégâts de Sable');
        }
    } else if (field.weather === 'Grêle') {
        if (defender.ability === 'Corps Gel') {
            eot += Math.floor(defender.maxHP / 16);
            eotText.push('regénération de Corps Gel');
        } else if (defender.type1 !== '' && defender.type2 !== 'Glace' &&
                ['Garde Magik', 'Envelocape', 'Rideau Neige'].indexOf(defender.ability) === -1 &&
                defender.item !== 'Lunettes Filtre') {
            eot -= Math.floor(defender.maxHP / 16);
            eotText.push('les dégâts de Grêle');
        }
    }
    if (defender.item === 'Restes') {
        eot += Math.floor(defender.maxHP / 16);
        eotText.push('la regénération de Restes');
    } else if (defender.item === 'Boue Noire') {
        if (defender.type1 === 'Poison' || defender.type2 === 'Poison') {
            eot += Math.floor(defender.maxHP / 16);
            eotText.push('la regénération de Boue Noire');
        } else if (defender.ability !== 'Garde Magik' && defender.ability !== 'Maladresse') {
            eot -= Math.floor(defender.maxHP / 8);
            eotText.push('les dégâts de Boue Noire');
        }
    }
    if (field.terrain === "Herbu") {
        if (field.isGravity || (defender.type1 !== "Vol" && defender.type2 !== "Vol" &&
                defender.item !== "Ballon" && defender.ability !== "Lévitation")) {
            eot += Math.floor(defender.maxHP / 16);
            eotText.push('la regénération de Champ Herbu');
        }
    }
    var toxicCounter = 0;
    if (defender.status === 'Empoisonné') {
        if (defender.ability === 'Soin Poison') {
            eot += Math.floor(defender.maxHP / 8);
            eotText.push('Soin Poison');
        } else if (defender.ability !== 'Garde Magik') {
            eot -= Math.floor(defender.maxHP / 8);
            eotText.push('les dégâts de Poison');
        }
    } else if (defender.status === 'Grâvement empoisonné') {
        if (defender.ability === 'Soin Poison') {
            eot += Math.floor(defender.maxHP / 8);
            eotText.push('Soin Poison');
        } else if (defender.ability !== 'Garde Magik') {
            eotText.push('les dégâts de Poison Grave');
            toxicCounter = defender.toxicCounter;
        }
    } else if (defender.status === 'Brûlé') {
        if (defender.ability === 'Ignifuge') {
            eot -= Math.floor(defender.maxHP / 16);
            eotText.push('les dégâts de Brûlure réduits');
        } else if (defender.ability !== 'Garde Magik') {
            eot -= Math.floor(defender.maxHP / 8);
            eotText.push('les dégâts de Brûlure');
        }
    } else if (defender.status === 'Endormi' && isBadDreams && defender.ability !== 'Garde Magik') {
        eot -= Math.floor(defender.maxHP / 8);
        eotText.push('Mauvais rêves');
    }

    // multi-hit moves have too many possibilities for brute-forcing to work, so reduce it to an approximate distribution
    var qualifier = '';
    if (move.hits > 1) {
        qualifier = 'approx. ';
        damage = squashMultihit(damage, move.hits);
    }

    var multihit = damage.length === 256 || move.hits > 1;
    var c = getKOChance(damage, multihit, defender.curHP - hazards, 0, 1, defender.maxHP, toxicCounter, hasSitrus, hasFigy, gluttony);
    var afterText = hazardText.length > 0 ? ' après ' + serializeText(hazardText) : '';
    if (c === 1) {
        return 'KO garanti' + afterText;
    } else if (c > 0) {
        return qualifier + Math.round(c * 1000) / 10 + '% chances de KO' + afterText;
    }

    if (hasSitrus && move.name !== 'Sabotage') {
        eotText.push('avoir mangé la Baie Sitrus');
    }

    if (hasFigy && move.name !== 'Sabotage') {
        if(gluttony) eotText.push('Gloutonnerie sur Baie Figuy');
        else eotText.push('avoir mangé la Baie Figuy');
    }
    afterText = hazardText.length > 0 || eotText.length > 0 ? ' après ' + serializeText(hazardText.concat(eotText)) : '';
    var i;
    for (i = 2; i <= 4; i++) {
        c = getKOChance(damage, multihit, defender.curHP - hazards, eot, i, defender.maxHP, toxicCounter, hasSitrus, hasFigy, gluttony);
        if (c === 1) {
            return 'garanti ' + i + 'HKO' + afterText;
        } else if (c > 0) {
            var pct = Math.round(c * 1000) / 10;
            var chance = pct ? qualifier + pct + '%' : 'Miniscule';
            return chance + ' chance de ' + i + 'HKO' + afterText;
        }
    }

    for (i = 5; i <= 9; i++) {
        if (predictTotal(damage[0], eot, i, toxicCounter, defender.curHP - hazards, defender.maxHP, hasSitrus, hasFigy, gluttony) >= defender.curHP - hazards) {
            return 'garanti ' + i + 'HKO' + afterText;
        } else if (predictTotal(damage[damage.length-1], eot, i, toxicCounter, defender.curHP - hazards, defender.maxHP, hasSitrus, hasFigy, gluttony) >= defender.curHP - hazards) {
            return 'possible ' + i + 'HKO' + afterText;
        }
    }

    return 'probablement la capacité la plus mauvaise';
}

function getKOChance(damage, multihit, hp, eot, hits, maxHP, toxicCounter, hasSitrus, hasFigy, gluttony) {
    var n = damage.length;
    var minDamage = damage[0];
    var maxDamage = damage[n-1];
    var i;
    if (hits === 1) {
        if ((!multihit || !hasSitrus) && maxDamage < hp) {
            return 0;
        } else if (multihit && hasSitrus && maxDamage < hp + Math.floor(maxHP / 4)) {
            return 0;
        } else if (multihit && hasFigy && maxDamage < hp + Math.floor(maxHP / 2)) {
            return 0;
        }
        for (i = 0; i < n; i++) {
            if ((!multihit || (!hasSitrus && !hasFigy)) && damage[i] >= hp) {
                return (n-i)/n;
            } else if (multihit && hasSitrus && damage[i] >= hp + Math.floor(maxHP / 4)) {
                return (n-i)/n;
            } else if (multihit && hasFigy && damage[i] >= hp + Math.floor(maxHP / 2)) {
                return (n-i)/n;
            }
        }
    }
    /*
    if (predictTotal(maxDamage, eot, hits, toxicCounter, hp, maxHP, hasSitrus, hasFigy, gluttony) < hp) {
        return 0;
    } else if (predictTotal(minDamage, eot, hits, toxicCounter, hp, maxHP, hasSitrus, hasFigy, gluttony) >= hp) {
        return 1;
    }*/
    var toxicDamage = 0;
    if (toxicCounter > 0) {
        toxicDamage = Math.floor(toxicCounter * maxHP / 16);
        toxicCounter++;
    }
    var sum = 0;
    var lastC = 0;
    for (i = 0; i < n; i++) {
        if ((hp - damage[i] <= maxHP / 2) && hasSitrus) {
            hp += Math.floor(maxHP / 4);
            hasSitrus = false;
        }
        else if (((hp - damage[i] <= maxHP / 4) && hasFigy && !gluttony) || ((hp - damage[i] <= maxHP / 2) && hasFigy && gluttony)) {
            hp += Math.floor(maxHP / 2);
            hasFigy = false;
        }
        var c;
        if (i === 0 || damage[i] !== damage[i-1]) {
            c = getKOChance(damage, multihit, hp - damage[i] + eot - toxicDamage, eot, hits - 1, maxHP, toxicCounter, hasSitrus, hasFigy, gluttony);
        } else {
            c = lastC;
        }
        if (c === 1) {
            sum += (n-i);
            break;
        } else {
            sum += c;
        }
        lastC = c;
    }
    return sum/n;
}

function predictTotal(damage, eot, hits, toxicCounter, hp, maxHP, hasSitrus, hasFigy, gluttony) {
    var total = 0;
    for (var i = 0; i < hits; i++) {
        total += damage;
        if ((hp - total <= maxHP / 2) && hasSitrus) {
            total -= Math.floor(maxHP / 4);
            hasSitrus = false;
        }
        else if (((hp - total <= maxHP / 4) && hasFigy && !gluttony) || ((hp - total <= maxHP / 2) && hasFigy && gluttony)) {
            hp += Math.floor(maxHP / 2);
            hasFigy = false;
        }
        if (i < hits - 1) {
            total -= eot;
            if (toxicCounter > 0) {
                total += Math.floor((toxicCounter + i) * maxHP / 16);
            }
        }
    }
    return total;
}

function squashMultihit(d, hits) {
    if (d.length === 1) {
        return [d[0] * hits];
    } else if (gen === 1) {
        var r = [];
        for (var i = 0; i < d.length; i++) {
            r[i] = d[i] * hits;
        }
        return r;
    } else if (d.length === 16) {
        switch (hits) {
            case 2:
                return [
                    2*d[0], d[2]+d[3], d[4]+d[4], d[4]+d[5],
                    d[5]+d[6], d[6]+d[6], d[6]+d[7], d[7]+d[7],
                    d[8]+d[8], d[8]+d[9], d[9]+d[9], d[9]+d[10],
                    d[10]+d[11], d[11]+d[11], d[12]+d[13], 2*d[15]
                ];
            case 3:
                return [
                    3*d[0], d[3]+d[3]+d[4], d[4]+d[4]+d[5], d[5]+d[5]+d[6],
                    d[5]+d[6]+d[6], d[6]+d[6]+d[7], d[6]+d[7]+d[7], d[7]+d[7]+d[8],
                    d[7]+d[8]+d[8], d[8]+d[8]+d[9], d[8]+d[9]+d[9], d[9]+d[9]+d[10],
                    d[9]+d[10]+d[10], d[10]+d[11]+d[11], d[11]+d[12]+d[12], 3*d[15]
                ];
            case 4:
                return [
                    4*d[0], 4*d[4], d[4]+d[5]+d[5]+d[5], d[5]+d[5]+d[6]+d[6],
                    4*d[6], d[6]+d[6]+d[7]+d[7], 4*d[7], d[7]+d[7]+d[7]+d[8],
                    d[7]+d[8]+d[8]+d[8], 4*d[8], d[8]+d[8]+d[9]+d[9], 4*d[9],
                    d[9]+d[9]+d[10]+d[10], d[10]+d[10]+d[10]+d[11], 4*d[11], 4*d[15]
                ];
            case 5:
                return [
                    5*d[0], d[4]+d[4]+d[4]+d[5]+d[5], d[5]+d[5]+d[5]+d[5]+d[6], d[5]+d[6]+d[6]+d[6]+d[6],
                    d[6]+d[6]+d[6]+d[6]+d[7], d[6]+d[6]+d[7]+d[7]+d[7], 5*d[7], d[7]+d[7]+d[7]+d[8]+d[8],
                    d[7]+d[7]+d[8]+d[8]+d[8], 5*d[8], d[8]+d[8]+d[8]+d[9]+d[9], d[8]+d[9]+d[9]+d[9]+d[9],
                    d[9]+d[9]+d[9]+d[9]+d[10], d[9]+d[10]+d[10]+d[10]+d[10], d[10]+d[10]+d[11]+d[11]+d[11], 5*d[15]
                ];
            default:
                console.log("nbre de coups inattendus :" + hits);
                return d;
        }
    } else if (d.length === 39) {
        switch (hits) {
            case 2:
                return [
                    2*d[0], 2*d[7], 2*d[10], 2*d[12],
                    2*d[14], d[15]+d[16], 2*d[17], d[18]+d[19],
                    d[19]+d[20], 2*d[21], d[22]+d[23], 2*d[24],
                    2*d[26], 2*d[28], 2*d[31], 2*d[38]
                ];
            case 3:
                return [
                    3*d[0], 3*d[9], 3*d[12], 3*d[13],
                    3*d[15], 3*d[16], 3*d[17], 3*d[18],
                    3*d[20], 3*d[21], 3*d[22], 3*d[23],
                    3*d[25], 3*d[26], 3*d[29], 3*d[38]
                ];
            case 4:
                return [
                    4*d[0], 2*d[10]+2*d[11], 4*d[13], 4*d[14],
                    2*d[15]+2*d[16], 2*d[16]+2*d[17], 2*d[17]+2*d[18], 2*d[18]+2*d[19],
                    2*d[19]+2*d[20], 2*d[20]+2*d[21], 2*d[21]+2*d[22], 2*d[22]+2*d[23],
                    4*d[24], 4*d[25], 2*d[27]+2*d[28], 4*d[38]
                ];
            case 5:
                return [
                    5*d[0], 5*d[11], 5*d[13], 5*d[15],
                    5*d[16], 5*d[17], 5*d[18], 5*d[19],
                    5*d[19], 5*d[20], 5*d[21], 5*d[22],
                    5*d[23], 5*d[25], 5*d[27], 5*d[38]
                ];
            default:
                console.log("nbre de coups inattendus :" + hits);
                return d;
        }
    } else {
        console.log("nbre de valeurs de dégâts inattendues" + d.length);
        return d;
    }
}

function serializeText(arr) {
    if (arr.length === 0) {
        return '';
    } else if (arr.length === 1) {
        return arr[0];
    } else if (arr.length === 2) {
        return arr[0] + " et " + arr[1];
    } else {
        var text = '';
        for (var i = 0; i < arr.length-1; i++) {
            text += arr[i] + ', ';
        }
        return text + 'et ' + arr[arr.length-1];
    }
}

function Josa(originalString, josa) {
    var dissolvedString = originalString.charCodeAt(originalString.length - 1) - 44032;

    if (0 == originalString.length) {
        return '';
    }

    if (0 > dissolvedString || 11171 < dissolvedString) {
        return originalString;
    }

    if (0 == dissolvedString % 28) {
        return originalString + getJosa(josa, false);
    } else {
        return originalString + getJosa(josa, true);
    }
}

function getJosa(josa, hasBatchim) {
    if (josa == 'et' || josa == 'avec') {
        return (hasBatchim ? 'et ' : 'avec ');
    } else {
        return '**';
    }
}