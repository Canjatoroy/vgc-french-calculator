function CALCULATE_ALL_MOVES_DPP(p1, p2, field) {
    checkAirLock(p1, field);
    checkAirLock(p2, field);
    checkForecast(p1, field.getWeather());
    checkForecast(p2, field.getWeather());
    checkKlutz(p1);
    checkKlutz(p2);
    checkIntimidate(p1, p2);
    checkIntimidate(p2, p1);
    checkDownload(p1, p2);
    checkDownload(p2, p1);
    p1.stats[SP] = getFinalSpeed(p1, field.getWeather());
    p2.stats[SP] = getFinalSpeed(p2, field.getWeather());
    var side1 = field.getSide(1);
    var side2 = field.getSide(0);
    var results = [[],[]];
    for (var i = 0; i < 4; i++) {
        results[0][i] = CALCULATE_DAMAGE_DPP(p1, p2, p1.moves[i], side1);
        results[1][i] = CALCULATE_DAMAGE_DPP(p2, p1, p2.moves[i], side2);
    }
    return results;
}

function CALCULATE_DAMAGE_DPP(attacker, defender, move, field) {
    var description = {
        "attackerName": attacker.name,
        "moveName": move.name,
        "defenderName": defender.name
    };
    
    if (move.bp === 0) {
        return {"damage":[0], "description":buildDescription(description)};
    }
    
    var defAbility = defender.ability;
    if (attacker.ability === "Brise Moule") {
        defAbility = "";
        description.attackerAbility = attacker.ability;
    }
    
    var isCritical = move.isCrit && ["Armurbaston", "Coque Armure"].indexOf(defAbility) === -1;
    
    if (move.name === "Ball Météo") {
        if (field.weather === "Soleil") {
            move.type = "Feu";
            move.bp *= 2;
        } else if (field.weather === "Pluie") {
            move.type = "Eau";
            move.bp *= 2;
        } else if (field.weather === "Sable") {
            move.type = "Roche";
            move.bp *= 2;
        } else if (field.weather === "Grêle") {
            move.type = "Glace";
            move.bp *= 2;
        } else {
            move.type = "Normal";
        }
        description.weather = field.weather;
        description.moveType = move.type;
        description.moveBP = basePower;
    } else if (move.name === "Jugement" && attacker.item.indexOf("Plaque") !== -1) {
        move.type = getItemBoostType(attacker.item);
    } else if (move.name === "Don Naturel" && attacker.item.indexOf("Baie") !== -1) {
        var gift = getNaturalGift(attacker.item);
        move.type = gift.t;
        move.bp = gift.p;
        description.attackerItem = attacker.item;
        description.moveBP = move.bp;
        description.moveType = move.type;
    }
    
    if (attacker.ability === "Normalise") {
        move.type = "Normal";
        description.attackerAbility = attacker.ability;
    }
    
    var typeEffect1 = getMoveEffectiveness(move, defender.type1, attacker.ability === "Querelleur" || field.isForesight, field.isGravity);
    var typeEffect2 = defender.type2 ? getMoveEffectiveness(move, defender.type2, attacker.ability === "Querelleur" || field.isForesight, field.isGravity) : 1;
    var typeEffectiveness = typeEffect1 * typeEffect2;
    
    if (typeEffectiveness === 0) {
        return {"damage":[0], "description":buildDescription(description)};
    }
    if ((defAbility === "Garde Mystik" && typeEffectiveness <= 1) ||
            (move.type === "Feu" && defAbility.indexOf("Torche") !== -1) ||
            (move.type === "Eau" && ["Peau Sèche", "Absorb Eau"].indexOf(defAbility) !== -1) ||
            (move.type === "Électrik" && ["Motorisé", "Absorb Volt"].indexOf(defAbility) !== -1) ||
            (move.type === "Ground" && !field.isGravity && defAbility === "Lévitation") ||
            (move.isSound && defAbility === "Anti-Bruit")) {
        description.defenderAbility = defAbility;
        return {"damage":[0], "description":buildDescription(description)};
    }
    
    description.HPEVs = defender.HPEVs + " HP";
    
    if (move.name === "Frappe Atlas" || move.name === "Ombre Nocturne") {
        return {"damage":[attacker.level], "description":buildDescription(description)};
    }
    
    if (move.hits > 1) {
        description.hits = move.hits;
    }
    var turnOrder = attacker.stats[SP] > defender.stats[SP] ? "FIRST" : "LAST";
    
    ////////////////////////////////
    ////////// BASE POWER //////////
    ////////////////////////////////
    switch (move.name) {
        case "Saumure":
            if (defender.curHP <= (defender.maxHP / 2)) {
                move.bp *= 2;
                description.moveBP = move.bp;
            }
            break;
        case "Éruption":
        case "Giclédo":
            move.bp = Math.max(1, Math.floor(move.bp * attacker.curHP / attacker.maxHP));
            description.moveBP = move.bp;
            break;
        case "Facade":
            if (["Paralysé", "Empoisonné", "Grâvement empoisonné", "Brûlé"].indexOf(attacker.status) !== -1) {
                move.bp *= 2;
                description.moveBP = move.bp;
            }
            break;
        case "Fléau":
        case "Contre":
            var p = Math.floor(48 * attacker.curHP / attacker.maxHP);
            move.bp = p <= 1 ? 200 : p <= 4 ? 150 : p <= 9 ? 100 : p <= 16 ? 80 : p <= 32 ? 40 : 20;
            description.moveBP = move.bp;
            break;
        case "Dégommage":
            move.bp = getFlingPower(attacker.item);
            description.moveBP = move.bp;
            description.attackerItem = attacker.item;
            break;
        case "Noeud Herbe":
        case "Balayage":
            var w = defender.weight;
            move.bp = w >= 200 ? 120 : w >= 100 ? 100 : w >= 50 ? 80 : w >= 25 ? 60 : w >= 10 ? 40 : 20;
            description.moveBP = move.bp;
            break;
        case "Gyroballe":
            move.bp = Math.min(150, Math.floor(25 * defender.stats[SP] / attacker.stats[SP]));
            description.moveBP = move.bp;
            break;
        case "Représailles":
            if (turnOrder !== "FIRST") {
                move.bp *= 2;
                description.moveBP = move.bp;
            }
            break;
        case "Punition":
            var boostCount = countBoosts(defender.boosts);
            if (boostCount > 0) {
                move.bp = Math.min(200, move.bp + 20 * boostCount);
                description.moveBP = move.bp;
            }
            break;
        case "Réveil Forcé":
            if (defender.status === "Endormi") {
                move.bp *= 2;
                description.moveBP = move.bp;
            }
            break;
    }
    
    var basePower = move.bp;

    if (field.isHelpingHand) {
        basePower = Math.floor(basePower * 1.5);
        description.isHelpingHand = true;
    }
    
    var isPhysical = move.category === "Physique";
    if ((attacker.item === "Bandeau Muscle" && isPhysical) || (attacker.item === "Lunettes Sages" && !isPhysical)) {
        basePower = Math.floor(basePower * 1.1);
        description.attackerItem = attacker.item;
    } else if (getItemBoostType(attacker.item) === move.type ||
            (((attacker.item === "Orbe Adamant" && attacker.name === "Dialga") ||
            (attacker.item === "Orbe Perlé" && attacker.name === "Palkia") ||
            (attacker.item === "Orbe Platine" && attacker.name === "Giratina-O")) &&
            (move.type === attacker.type1 || move.type === attacker.type2))) {
        basePower = Math.floor(basePower * 1.2);
        description.attackerItem = attacker.item;
    }
    
    if ((attacker.ability === "Téméraire" && mowve.hasRecoil) ||
            (attacker.ability === "Poing de Fer" && move.isPunch)) {
        basePower = Math.floor(basePower * 1.2);
        description.attackerAbility = attacker.ability;
    } else if ((attacker.curHP <= attacker.maxHP / 3 &&
            ((attacker.ability === "Engrais" && move.type === "Plante") ||
            (attacker.ability === "Brasier" && move.type === "Feu") ||
            (attacker.ability === "Torrent" && move.type === "Eau") ||
            (attacker.ability === "Essaim" && move.type === "Insecte"))) ||
            (attacker.ability === "Technicien" && move.bp <= 60)) {
        basePower = Math.floor(basePower * 1.5);
        description.attackerAbility = attacker.ability;
    }
    
    if ((defAbility === "Isograisse" && (move.type === "Feu" || move.type === "Glace")) ||
            (defAbility === "Ignifuge" && move.type === "Feu")) {
        basePower = Math.floor(basePower * 0.5);
        description.defenderAbility = defAbility;
    } else if (defAbility === "Peau Sèche" && move.type === "Feu") {
        basePower = Math.floor(basePower * 1.25);
        description.defenderAbility = defAbility;
    }
    
    ////////////////////////////////
    ////////// (SP)ATTACK //////////
    ////////////////////////////////
    var attackStat = isPhysical ? AT : SA;
    description.attackEVs = attacker.evs[attackStat] +
            (NATURES[attacker.nature][0] === attackStat ? "+" : NATURES[attacker.nature][1] === attackStat ? "-" : "") + " " +
            toSmogonStat(attackStat);
    var attack;
    var attackBoost = attacker.boosts[attackStat];
    var rawAttack = attacker.rawStats[attackStat];
    if (attackBoost === 0 || (isCritical && attackBoost < 0)) {
        attack = rawAttack;
    } else if (defAbility === "Inconscient") {
        attack = rawAttack;
        description.defenderAbility = defAbility;
    } else if (attacker.ability === "Simple") {
        attack = getSimpleModifiedStat(rawAttack, attackBoost);
        description.attackerAbility = attacker.ability;
        description.attackBoost = attackBoost;
    } else {
        attack = getModifiedStat(rawAttack, attackBoost);
        description.attackBoost = attackBoost;
    }
    
    if (isPhysical && (attacker.ability === "Force Pure" || attacker.ability === "Coloforce")) {
        attack *= 2;
        description.attackerAbility = attacker.ability;
    } else if (field.weather === "Soleil" && (isPhysical ? attacker.ability === "Don Floral" : attacker.ability === "Force Soleil")) {
        attack = Math.floor(attack * 1.5);
        description.attackerAbility = attacker.ability;
        description.weather = field.weather;
    } else if (isPhysical && (attacker.ability === "Agitation" || (attacker.ability === "Cran" && attacker.status !== "Bonne santé"))) {
        attack = Math.floor(attack * 1.5);
        description.attackerAbility = attacker.ability;
    }
    
    if ((isPhysical ? attacker.item === "Bandeau Choix" : attacker.item === "Lunettes Choix") ||
            (attacker.item === "Rosée Âme" && (attacker.name === "Latios" || attacker.name === "Latias") && !isPhysical)) {
        attack = Math.floor(attack * 1.5);
        description.attackerItem = attacker.item;
    } else if ((attacker.item === "Balle Lumière" && attacker.name === "Pikachu") ||
            (attacker.item === "Masse Os" && (attacker.name === "Osselait" || attacker.name === "Ossatueur") && isPhysical) ||
            (attacker.item === "Dent Océan" && attacker.name === "Coquiperl" && !isPhysical)) {
        attack *= 2;
        description.attackerItem = attacker.item;
    }
    
    ////////////////////////////////
    ///////// (SP)DEFENSE //////////
    ////////////////////////////////
    var defenseStat = isPhysical ? DF : SD;
    description.defenseEVs = defender.evs[defenseStat] +
            (NATURES[defender.nature][0] === defenseStat ? "+" : NATURES[defender.nature][1] === defenseStat ? "-" : "") + " " +
            toSmogonStat(defenseStat);
    var defense;
    var defenseBoost = defender.boosts[defenseStat];
    var rawDefense = defender.rawStats[defenseStat];
    if (defenseBoost === 0 || (isCritical && defenseBoost > 0)) {
        defense = rawDefense;
    } else if (attacker.ability === "Inconscient") {
        defense = rawDefense;
        description.attackerAbility = attacker.ability;
    } else if (defAbility === "Simple") {
        defense = getSimpleModifiedStat(rawDefense, defenseBoost);
        description.defenderAbility = defAbility;
        description.defenseBoost = defenseBoost;
    } else {
        defense = getModifiedStat(rawDefense, defenseBoost);
        description.defenseBoost = defenseBoost;
    }
    
    if (defAbility === "Écaille Spéciale" && defender.status !== "Bonne santé" && isPhysical) {
        defense = Math.floor(defense * 1.5);
        description.defenderAbility = defAbility;
    } else if (defAbility === "Don Floral" && field.weather === "Soleil" && !isPhysical) {
        defense = Math.floor(defense * 1.5);
        description.defenderAbility = defAbility;
        description.weather = field.weather;
    }
    
    if ((defender.item === "Rosée Âme" && (defender.name === "Latios" || defender.name === "Latias") && !isPhysical) ||
            (defender.item === "Poudre Métal" && defender.name === "Métamorph")) {
        defense = Math.floor(defense * 1.5);
        description.defenderItem = defender.item;
    } else if (defender.item === "Écaille Océan" && defender.name === "Coquiperl" && !isPhysical) {
        defense *= 2;
        description.defenderItem = defender.item;
    }
    
    if (field.weather === "Sable" && (defender.type1 === "Roche" || defender.type2 === "Roche") && !isPhysical) {
        defense = Math.floor(defense * 1.5);
        description.weather = field.weather;
    }
    
    if (move.name === "Explosion" || move.name === "Destruction") {
        defense = Math.floor(defense * 0.5);
    }
    
    if (defense < 1) {
        defense = 1;
    }
    
    ////////////////////////////////
    //////////// DAMAGE ////////////
    ////////////////////////////////
    var baseDamage = Math.floor(Math.floor(Math.floor(2 * attacker.level / 5 + 2) * basePower * attack / 50) / defense);
    
    if (attacker.status === "Brûlé" && isPhysical && attacker.ability !== "Cran") {
        baseDamage = Math.floor(baseDamage * 0.5);
        description.isBurned = true;
    }
    
    if (!isCritical) {
        var screenMultiplier = field.format !== "Solo" ? (2/3) : (1/2);
        if (isPhysical && field.isReflect) {
            baseDamage = Math.floor(baseDamage * screenMultiplier); 
            description.isReflect = true;
        } else if (!isPhysical && field.isLightScreen) {
            baseDamage = Math.floor(baseDamage * screenMultiplier); 
            description.isLightScreen = true;
        }
    }
    
    if (field.format !== "Solo" && move.isSpread) {
        baseDamage = Math.floor(baseDamage * 3/4);
    }
    
    if ((field.weather === "Soleil" && move.type === "Feu") || (field.weather === "Pluie" && move.type === "Eau")) {
        baseDamage = Math.floor(baseDamage * 1.5);
        description.weather = field.weather;
    } else if ((field.weather === "Soleil" && move.type === "Eau") || (field.weather === "Pluie" && move.type === "Feu") ||
            (["Pluie", "Sable", "Grêle"].indexOf(field.weather) !== -1 && move.name === "Lance-Soleil")) {
        baseDamage = Math.floor(baseDamage * 0.5);
        description.weather = field.weather;
    }
    
    if (attacker.ability === "Torche (activé)" && move.type === "Feu") {
        baseDamage = Math.floor(baseDamage * 1.5);
        description.attackerAbility = "Torche";
    }
    
    baseDamage += 2;
    
    if (isCritical) {
        if (attacker.ability === "Sniper") {
            baseDamage *= 3;
            description.attackerAbility = attacker.ability;
        } else {
            baseDamage *= 2;
        }
        description.isCritical = isCritical;
    }
    
    if (attacker.item === "Orbe Vie") {
        baseDamage = Math.floor(baseDamage * 1.3);
        description.attackerItem = attacker.item;
    }
    
    // the random factor is applied between the LO mod and the STAB mod, so don't apply anything below this until we're inside the loop
    var stabMod = 1;
    if (move.type === attacker.type1 || move.type === attacker.type2) {
        if (attacker.ability === "Adaptabilité") {
            stabMod = 2;
            description.attackerAbility = attacker.ability;
        } else {
            stabMod = 1.5;
        }
    }
    
    var filterMod = 1;
    if ((defAbility === "Filtre" || defAbility === "Solide Roc") && typeEffectiveness > 1) {
        filterMod = 0.75;
        description.defenderAbility = defAbility;
    }
    var ebeltMod = 1;
    if (attacker.item === "Ceinture Pro" && typeEffectiveness > 1) {
        ebeltMod = 1.2;
        description.attackerItem = attacker.item;
    }
    var tintedMod = 1;
    if (attacker.ability === "Lentiteintée" && typeEffectiveness < 1) {
        tintedMod = 2;
        description.attackerAbility = attacker.ability;
    }
    var berryMod = 1;
    if (getBerryResistType(defender.item) === move.type && (typeEffectiveness > 1 || move.type === "Normal")) {
        berryMod = 0.5;
        description.defenderItem = defender.item;
    }
    
    var damage = [];
    for (var i = 0; i < 16; i++) {
        damage[i] = Math.floor(baseDamage * (85 + i) / 100);
        damage[i] = Math.floor(damage[i] * stabMod);
        damage[i] = Math.floor(damage[i] * typeEffect1);
        damage[i] = Math.floor(damage[i] * typeEffect2);
        damage[i] = Math.floor(damage[i] * filterMod);
        damage[i] = Math.floor(damage[i] * ebeltMod);
        damage[i] = Math.floor(damage[i] * tintedMod);
        damage[i] = Math.floor(damage[i] * berryMod);
        damage[i] = Math.max(1, damage[i]);
    }
    return {"damage":damage, "description":buildDescription(description)};
}

function getSimpleModifiedStat(stat, mod) {
    var simpleMod = Math.min(6, Math.max(-6, mod * 2));
    return simpleMod > 0 ? Math.floor(stat * (2 + simpleMod) / 2)
            : simpleMod < 0 ? Math.floor(stat * 2 / (2 - simpleMod))
            : stat;
}