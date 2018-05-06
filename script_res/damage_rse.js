function CALCULATE_ALL_MOVES_ADV(p1, p2, field) {
    checkAirLock(p1, field);
    checkAirLock(p2, field);
    checkForecast(p1, field.getWeather());
    checkForecast(p2, field.getWeather());
    checkIntimidate(p1, p2);
    checkIntimidate(p2, p1);
    var side1 = field.getSide(1);
    var side2 = field.getSide(0);
    var results = [[],[]];
    for (var i = 0; i < 4; i++) {
        results[0][i] = CALCULATE_DAMAGE_ADV(p1, p2, p1.moves[i], side1);
        results[1][i] = CALCULATE_DAMAGE_ADV(p2, p1, p2.moves[i], side2);
    }
    return results;
}

function CALCULATE_DAMAGE_ADV(attacker, defender, move, field) {
    var description = {
        "attackerName": attacker.name,
        "moveName": move.name,
        "defenderName": defender.name
    };
    
    if (move.bp === 0) {
        return {"damage":[0], "description":buildDescription(description)};
    }
    
    if (move.name === "Ball Météo") {
        move.type = field.weather === "Soleil" ? "Feu"
                : field.weather === "Pluie" ? "Eau"
                : field.weather === "Sable" ? "Roche"
                : field.weather === "Grêle" ? "Glace"
                : "Normal";
        description.weather = field.weather;
        description.moveType = move.type;
        description.moveBP = move.bp;
    }
    
    var typeEffect1 = getMoveEffectiveness(move, defender.type1, field.isForesight);
    var typeEffect2 = defender.type2 ? getMoveEffectiveness(move, defender.type2, field.isForesight) : 1;
    var typeEffectiveness = typeEffect1 * typeEffect2;

    if (typeEffectiveness === 0) {
        return {"damage":[0], "description":buildDescription(description)};
    }
    
    if ((defender.ability.indexOf("Torche") !== -1 && move.type === "Feu") ||
            (defender.ability === "Lévitation" && move.type === "Sol") ||
            (defender.ability === "Absorb Volt" && move.type === "Électrik") ||
            (defender.ability === "Absorb Eau" && move.type === "Eau") ||
            (defender.ability === "Garde Mystik" && typeEffectiveness <= 1) ||
            (defender.ability === "Anti-Bruit" && move.isSound)) {
        description.defenderAbility = defender.ability;
        return {"damage":[0], "description":buildDescription(description)};
    }
    
    var lv = attacker.level;
    if (move.name === "Frappe Atlas" || move.name === "Ombre Nocturne") {
        return {"damage":[lv], "description":buildDescription(description)};
    }
    
    if (move.hits > 1) {
        description.hits = move.hits;
    }

    var bp;
    switch (move.name) {
        case "Fléau":
        case "Contre":
            var p = Math.floor(48 * attacker.curHP / attacker.maxHP);
            bp = p <= 1 ? 200 : p <= 4 ? 150 : p <= 9 ? 100 : p <= 16 ? 80 : p <= 32 ? 40 : 20;
            description.moveBP = bp;
            break;
        case "Éruption":
        case "Giclédo":
            bp = Math.max(1, Math.floor(150 * attacker.curHP / attacker.maxHP));
            description.moveBP = bp;
            break;
        case "Balayage":
            var w = defender.weight;
            bp = w >= 200 ? 120 : w >= 100 ? 100 : w >= 50 ? 80 : w >= 25 ? 60 : w >= 10 ? 40 : 20;
            description.moveBP = bp;
            break;
        default:
            bp = move.bp;
    }
    
    var isPhysical = typeChart[move.type].category === "Physique";
    var attackStat = isPhysical ? AT : SA;
    var defenseStat = isPhysical ? DF : SD;
    var at = attacker.rawStats[attackStat];
    var df = defender.rawStats[defenseStat];
    
    if (isPhysical && (attacker.ability === "Coloforce" || attacker.ability === "Force Pure")) {
        at *= 2;
        description.attackerAbility = attacker.ability;
    }
    
    if (getItemBoostType(attacker.item) === move.type) {
        at = Math.floor(at * 1.1);
        description.attackerItem = attacker.item;
    } else if ((isPhysical && attacker.item === "Bandeau Choix") ||
            (!isPhysical && attacker.item === "Rosée Âme" && (attacker.name === "Latios" || attacker.name === "Latias"))) {
        at = Math.floor(at * 1.5);
        description.attackerItem = attacker.item;
    } else if ((!isPhysical && attacker.item === "Dent Océan" && attacker.name === "Coquiperl") ||
            (!isPhysical && attacker.item === "Balle Lumière" && attacker.name === "Pikachu") ||
            (isPhysical && attacker.item === "Masse Os" && (attacker.name === "Osselait" || attacker.name === "Ossatueur"))) {
        at *= 2;
        description.attackerItem = attacker.item;
    }
    
    if ((!isPhysical && defender.item === "Rosée Âme" && (defender.name === "Latios" || defender.name === "Latias")) ||
            (isPhysical && defender.item === "Poudre Métal" && defender.name === "Métamorph")) {
        df = Math.floor(df * 1.5);
        description.defenderItem = defender.item;
    } else if (!isPhysical && defender.item === "Écaille Océan" && defender.name === "Coquiperl") {
        df *= 2;
        description.defenderItem = defender.item;
    }
    
    if (defender.ability === "Isograisse" && (move.type === "Feu" || move.type === "Glace")) {
        at = Math.floor(at / 2);
        description.defenderAbility = defender.ability;
    } else if (isPhysical && defender.ability === "Écaille Spéciale" && defender.status !== "Bonne santé") {
        df = Math.floor(df * 1.5);
        description.defenderAbility = defender.ability;
    }
    
    if (isPhysical && (attacker.ability === "Agitation" || (attacker.ability === "Cran" && attacker.status !== "Bonne santé"))) {
        at = Math.floor(at * 1.5);
        description.attackerAbility = attacker.ability;
    } else if (attacker.curHP <= attacker.maxHP / 3 &&
            ((attacker.ability === "Engrais" && move.type === "Plante") ||
            (attacker.ability === "Brasier" && move.type === "Feu") ||
            (attacker.ability === "Torrent" && move.type === "Eau") ||
            (attacker.ability === "Essaim" && move.type === "Insecte"))) {
        bp = Math.floor(bp * 1.5);
        description.attackerAbility = attacker.ability;
    }
    
    if (move.name === "Explosion" || move.name === "Destruction") {
        df = Math.floor(df / 2);
    }
    
    var isCritical = move.isCrit && ["Armurbaston", "Coque Armure"].indexOf(defender.ability) === -1;
    
    var attackBoost = attacker.boosts[attackStat];
    var defenseBoost = defender.boosts[defenseStat];
    if (attackBoost > 0 || (!isCritical && attackBoost < 0)) {
        at = getModifiedStat(at, attackBoost);
        description.attackBoost = attackBoost;
    }
    if (defenseBoost < 0 || (!isCritical && defenseBoost > 0)) {
        df = getModifiedStat(df, defenseBoost);
        description.defenseBoost = defenseBoost;
    }
    
    var baseDamage = Math.floor(Math.floor(Math.floor(2 * lv / 5 + 2) * at * bp / df) / 50);
    
    if (attacker.status === "Brûlé" && isPhysical && attacker.ability !== "Cran") {
        baseDamage = Math.floor(baseDamage / 2);
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
        // some sources say 3/4, some say 2/3, some say 1/2...using 3/4 for now since that's what DPP+ use
        baseDamage = Math.floor(baseDamage * 3/4);
    }
    
    if ((field.weather === "Soleil" && move.type === "Feu") || (field.weather === "Pluie" && move.type === "Eau")) {
        baseDamage = Math.floor(baseDamage * 1.5);
        description.weather = field.weather;
    } else if ((field.weather === "Sun" && move.type === "Eau") || (field.weather === "Pluie" && move.type === "Feu") ||
            (move.name === "Lance-Soleil" && ["Pluie", "Sable", "Grêle"].indexOf(field.weather) !== -1)) {
        baseDamage = Math.floor(baseDamage / 2);
        description.weather = field.weather;
    }

    if (attacker.ability === "Torche (activé)" && move.type === "Feu") {
        baseDamage = Math.floor(baseDamage * 1.5);
        description.attackerAbility = "Torche";
    }
    
    baseDamage = Math.max(1, baseDamage) + 2;
    
    if (isCritical) {
        baseDamage *= 2;
        description.isCritical = true;
    }
    
    if (move.name === "Ball Météo" && field.weather !== "") {
        baseDamage *= 2;
        description.moveBP = move.bp * 2;
    }
    
    if (field.isHelpingHand) {
        baseDamage = Math.floor(baseDamage * 1.5);
        description.isHelpingHand = true;
    }
    
    if (move.type === attacker.type1 || move.type === attacker.type2) {
        baseDamage = Math.floor(baseDamage * 1.5);
    }
    
    baseDamage = Math.floor(baseDamage * typeEffectiveness);
    
    var damage = [];
    for (var i = 85; i <= 100; i++) {
        damage[i-85] = Math.max(1, Math.floor(baseDamage * i / 100));
    }
    return {"damage":damage, "description":buildDescription(description)};
}