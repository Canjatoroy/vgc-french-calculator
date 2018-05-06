function CALCULATE_ALL_MOVES_BW(p1, p2, field) {
    checkAirLock(p1, field);
    checkAirLock(p2, field);
    checkForecast(p1, field.getWeather());
    checkForecast(p2, field.getWeather());
    checkKlutz(p1);
    checkKlutz(p2);
    p1.stats[DF] = getModifiedStat(p1.rawStats[DF], p1.boosts[DF]);
    p1.stats[SD] = getModifiedStat(p1.rawStats[SD], p1.boosts[SD]);
    p1.stats[SP] = getFinalSpeed(p1, field.getWeather());
    p2.stats[DF] = getModifiedStat(p2.rawStats[DF], p2.boosts[DF]);
    p2.stats[SD] = getModifiedStat(p2.rawStats[SD], p2.boosts[SD]);
    p2.stats[SP] = getFinalSpeed(p2, field.getWeather());
    checkIntimidate(p1, p2);
    checkIntimidate(p2, p1);
    checkEvo(p1, p2);
    checkDownload(p1, p2);
    checkDownload(p2, p1);
    p1.stats[AT] = getModifiedStat(p1.rawStats[AT], p1.boosts[AT]);
    p1.stats[SA] = getModifiedStat(p1.rawStats[SA], p1.boosts[SA]);
    p2.stats[AT] = getModifiedStat(p2.rawStats[AT], p2.boosts[AT]);
    p2.stats[SA] = getModifiedStat(p2.rawStats[SA], p2.boosts[SA]);
    var side1 = field.getSide(1);
    var side2 = field.getSide(0);
    checkInfiltrator(p1, side1);
    checkInfiltrator(p2, side2);
    var results = [[],[]];
    for (var i = 0; i < 4; i++) {
        results[0][i] = getDamageResult(p1, p2, p1.moves[i], side1);
        results[1][i] = getDamageResult(p2, p1, p2.moves[i], side2);
    }
    return results;
}

function getDamageResult(attacker, defender, move, field) {
    var moveDescName = move.name;
    var isQuarteredByProtect = false;
    if(move.isSignatureZ){
        move.isZ = true;
         if(field.isProtect){
          isQuarteredByProtect = true;
          }
        }
        if(move.isZ && !move.isSignatureZ){
        var tempMove = move;
         if (move.name === "Force-Nature") {
            move.zp = (field.terrain === "Électrifié" || field.terrain === "Herbu" || field.terrain === "Psy" || field.terrain === "Brumeux") ? 175 : 160;
            move.type = field.terrain === "Électrifié" ? "Électrik" : field.terrain === "Herbu" ? "Plante" : field.terrain === "Brumeux" ? "Fée" : move.type = field.terrain === "Psy" ? "Psy" : "Normal";
        }
        //turning it into a generic single-target Z-move
        move = moves[ZMOVES_LOOKUP[tempMove.type]];
        move.bp = tempMove.zp;
        move.name = "Z-"+tempMove.name;
        move.isZ = true;
        move.category = tempMove.category;
        if (move.name.includes("Puissance Cachée")){
            move.type = "Normal";
        }
        else move.type = tempMove.type;
        move.isCrit = tempMove.isCrit;
        move.hits = 1;
        moveDescName = ZMOVES_LOOKUP[tempMove.type] + " (" + tempMove.zp + " BP)";
        if(field.isProtect){
            isQuarteredByProtect = true;
        }
    }
    var description = {
        "attackerName": attacker.name,
        "moveName": moveDescName,
        "defenderName": defender.name
    };
    if (move.bp === 0) {
        return {"damage":[0], "description":buildDescription(description)};
    }
    
    var defAbility = defender.ability;
    if (["Brise Moule", "Téra-Voltage", "TurboBrasier"].indexOf(attacker.ability) !== -1) {
        defAbility = "";
        description.attackerAbility = attacker.ability;
    }
    else if(move.name === "Rayon Spectral" || move.name === "Choc Météore")
        defAbility = ""; //works as a mold breaker
    
    var isCritical = move.isCrit && ["Armurbaston", "Coque Armure"].indexOf(defAbility) === -1;
    
    if (move.name === "Ball Météo") {
        move.type = field.weather.indexOf("Soleil") > -1 ? "Feu"
                : field.weather.indexOf("Pluie") > -1 ? "Eau"
                : field.weather === "Sable" ? "Roche"
                : field.weather === "Grêle" ? "Glace"
                : "Normal";
        description.weather = field.weather;
        description.moveType = move.type;
    } else if (move.name === "Jugement" && attacker.item.indexOf("Plaque") !== -1) {
        move.type = getItemBoostType(attacker.item);
    } else if (move.name === "Don Naturel" && attacker.item.indexOf("Baie") !== -1) {
        var gift = getNaturalGift(attacker.item);
        move.type = gift.t;
        move.bp = gift.p;
        description.attackerItem = attacker.item;
        description.moveBP = move.bp;
        description.moveType = move.type;
    } else if (move.name === "Force-Nature") {
move.type = field.terrain === "Électrifié" ? "Électrik" : field.terrain === "Herbu" ? "Plante" : field.terrain === "Brumeux" ? "Fée" : move.type = field.terrain === "Psy" ? "Psy" : "Normal";    }
    
    var isAerilate = attacker.ability === "Peau Céleste" && move.type === "Normal";
    var isPixilate = attacker.ability === "Peau Féérique" && move.type === "Normal";
    var isRefrigerate = attacker.ability === "Peau Gelée" && move.type === "Normal";
    var isGalvanize = attacker.ability === "Peau Électrique" && move.type === "Normal";
    if(!move.isZ){ //Z-Moves don't receive -ate type changes
        if (isAerilate) {
            move.type = "Vol";
        } else if (isPixilate) {
            move.type = "Fée";
        } else if (isRefrigerate) {
            move.type = "Glace";
        } else if(isGalvanize) {
            move.type = "Électrik";
        } else if (attacker.ability === "Normalise") {
            move.type = "Normal";
            description.attackerAbility = attacker.ability;
        } else if(attacker.ability === "Hydrata-Son" && move.isSound){
            move.type = "Eau"
            description.attackerAbility = attacker.ability;
        } 
    }
    
    var typeEffect1 = getMoveEffectiveness(move, defender.type1, attacker.ability === "Querelleur" || field.isForesight, field.isGravity);
    var typeEffect2 = defender.type2 ? getMoveEffectiveness(move, defender.type2, attacker.ability === "Querelleur" || field.isForesight, field.isGravity) : 1;
    var typeEffectiveness = typeEffect1 * typeEffect2;
    
    if (typeEffectiveness === 0) {
        return {"damage":[0], "description":buildDescription(description)};
    }
    if ((defAbility === "Garde Mystik" && typeEffectiveness <= 1) ||
            (move.type === "Plante" && defAbility === "Herbivore") ||
            (move.type === "Feu" && defAbility.indexOf("Torche") !== -1) ||
            (move.type === "Eau" && ["Peau Sèche", "Lavabo", "Absorb Eau"].indexOf(defAbility) !== -1) ||
            (move.type === "Électrik" && ["Paratonnerre", "Paratonnerre", "Motorisé", "Absorb Volt"].indexOf(defAbility) !== -1) ||
            (move.type === "Sol" && !field.isGravity && defAbility === "Lévitation") ||
            (move.isBullet && defAbility === "Pare-Balles") ||
            (move.isSound && defAbility === "Anti-Bruit")) {
        description.defenderAbility = defAbility;
        return {"damage":[0], "description":buildDescription(description)};
    }
    if (move.type === "Sol" && !field.isGravity && defender.item === "Ballon") {
        description.defenderItem = defender.item;
        return {"damage":[0], "description":buildDescription(description)};
    }
    if ((field.weather === "Terre Finale" && move.type === "Eau") || (field.weather === "Mer Primaire" && move.type === "Feu")) {
        return {"damage":[0], "description":buildDescription(description)};
    }
    if (move.name === "Chute Libre" &&
        ([defender.type1, defender.type2].indexOf("Vol") !== -1 ||
            defender.weight >= 200.0 || field.isGravity)) {
        return {"damage":[0], "description":buildDescription(description)};
    }
    if (move.name === "Synchropeine" &&
            [defender.type1, defender.type2].indexOf(attacker.type1) === -1 && [defender.type1, defender.type2].indexOf(attacker.type2) === -1) {
        return {"damage": [0], "description": buildDescription(description)};
    }
    
    description.HPEVs = defender.HPEVs + " PV";
    
    if (move.name === "Frappe Atlas" || move.name === "Ombre Nocturne") {
        var lv = attacker.level;
        if (attacker.ability === "Amour Filial") {
            lv *= 2;
        }
        return {"damage":[lv], "description":buildDescription(description)};
    }
    
    if (move.hits > 1) {
        description.hits = move.hits;
    }
    var turnOrder = attacker.stats[SP] > defender.stats[SP] ? "FIRST" : "LAST";
    
    ////////////////////////////////
    ////////// BASE POWER //////////
    ////////////////////////////////
    var basePower;
    switch (move.name) {
        case "Représailles":
            basePower = turnOrder === "LAST" ? 100 : 50;
            description.moveBP = basePower;
            break;
        case "Boule Élek":
            var r = Math.floor(attacker.stats[SP] / defender.stats[SP]);
            basePower = r >= 4 ? 150 : r >= 3 ? 120 : r >= 2 ? 80 : 60;
            description.moveBP = basePower;
            break;
        case "Gyroball":
            basePower = Math.min(150, Math.floor(25 * defender.stats[SP] / attacker.stats[SP]));
            description.moveBP = basePower;
            break;
        case "Punition":
            basePower = Math.min(200, 60 + 20 * countBoosts(defender.boosts));
            description.moveBP = basePower;
            break;
        case "Balayage":
        case "Noeud Herbe":
            var w = defender.weight;
            basePower = w >= 200 ? 120 : w >= 100 ? 100 : w >= 50 ? 80 : w >= 25 ? 60 : w >= 10 ? 40 : 20;
            description.moveBP = basePower;
            break;
        case "Châtiment":
            basePower = move.bp * (defender.status !== "Bonne santé" ? 2 : 1);
            description.moveBP = basePower;
            break;
        case "Tacle Lourd":
        case "Tacle Feu":
            var wr = attacker.weight / defender.weight;
            basePower = wr >= 5 ? 120 : wr >= 4 ? 100 : wr >= 3 ? 80 : wr >= 2 ? 60 : 40;
            description.moveBP = basePower;
            break;
        case "Force Ajoutée":
            basePower = 20 + 20 * countBoosts(attacker.boosts);
            description.moveBP = basePower;
            break;
        case "Acrobatie":
            basePower = attacker.item === "Joyau Vol" || attacker.item === "" ? 110 : 55;
            description.moveBP = basePower;
            break;
        case "Réveil Forcé":
            basePower = move.bp * (defender.status === "Endormi" ? 2 : 1);
            description.moveBP = basePower;
            break;
        case "Ball Météo":
            basePower = field.weather !== "" ? 100 : 50;
            description.moveBP = basePower;
            break;
        case "Dégommage":
            basePower = getFlingPower(attacker.item);
            description.moveBP = basePower;
            description.attackerItem = attacker.item;
            break;
        case "Éruption":
        case "Giclédo":
            basePower = Math.max(1, Math.floor(150 * attacker.curHP / attacker.maxHP));
            description.moveBP = basePower;
            break;
        case "Fléau":
        case "Contre":
            var p = Math.floor(48 * attacker.curHP / attacker.maxHP);
            basePower = p <= 1 ? 200 : p <= 4 ? 150 : p <= 9 ? 100 : p <= 16 ? 80 : p <= 32 ? 40 : 20;
            description.moveBP = basePower;
            break;
        case "Piétisol":
        case "Séisme":
            basePower = (field.terrain === "Herbu") ? move.bp / 2 : move.bp;
            description.terrain = field.terrain;
            break;
        case "Force-Nature":
			basePower = (field.terrain === "Électrik" || field.terrain === "Herbu" || field.terrain === "Psy") ? 90 : (field.terrain === "Brumeux") ? 95 : 80;        
		break;
        default:
        	basePower = move.bp;
    }
    
    var bpMods = [];
    if ((attacker.ability === "Technicien" && basePower <= 60) ||
            (attacker.ability === "Rage Brûlure" && attacker.status === "Brûlé" && move.category === "Spécial") ||
            (attacker.ability === "Rage Poison" && (attacker.status === "Empoisonné" || attacker.status === "Gravement empoisonné") &&
                    move.category === "Physique")) {
        bpMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    } else if (attacker.ability === "Analyste" && turnOrder !== "FIRST") {
        bpMods.push(0x14CD);
        description.attackerAbility = attacker.ability;
    } else if (attacker.ability === "Force Sable" && field.weather === "Sable" && ["Roche","Sol","Acier"].indexOf(move.type) !== -1) {
        bpMods.push(0x14CD);
        description.attackerAbility = attacker.ability;
        description.weather = field.weather;
    } else if ((attacker.ability === "Téméraire" && move.hasRecoil) ||
            (attacker.ability === "Poing de Fer" && move.isPunch)) {
        bpMods.push(0x1333);
        description.attackerAbility = attacker.ability;
    }
    
    
    if (field.isBattery && move.category === "Spécial") {
        bpMods.push(0x14CD);
        description.isBattery = true;
    }

    if (defAbility === "Ignifuge" && move.type === "Feu") {
        bpMods.push(0x800);
        description.defenderAbility = defAbility;
    } else if (defAbility === "Peau Sèche" && move.type === "Feu") {
        bpMods.push(0x1400);
        description.defenderAbility = defAbility;
    }
    
    if (attacker.ability === "Sans Limite" && move.hasSecondaryEffect) {
        bpMods.push(0x14CD);
        description.attackerAbility = attacker.ability;
    }
    
    if (getItemBoostType(attacker.item) === move.type) {
        bpMods.push(0x1333);
        description.attackerItem = attacker.item;
    } else if ((attacker.item === "Bandeau Muscle" && move.category === "Physique") ||
            (attacker.item === "Lunettes Sages" && move.category === "Spécial")) {
        bpMods.push(0x1199);
        description.attackerItem = attacker.item;
    } else if (((attacker.item === "Orbe Adamant" && attacker.name === "Dialga") ||
            (attacker.item === "Orbe Perlé" && attacker.name === "Palkia") ||
            (attacker.item === "Orbe Platiné" && attacker.name === "Giratina-O")) &&
            (move.type === attacker.type1 || move.type === attacker.type2)) {
        bpMods.push(0x1333);
        description.attackerItem = attacker.item;
    } else if (attacker.item === move.type + " Joyau") {
        bpMods.push(gen >= 6 ? 0x14CD : 0x1800);
        description.attackerItem = attacker.item;
    }
    
    if ((move.name === "Façade" && ["Brûlé","Paralisé","Empoisonné","Gravement empoisonné"].indexOf(attacker.status) !== -1) ||
            (move.name === "Saumure" && defender.curHP <= defender.maxHP / 2) ||
            (move.name === "Choc Venin" && (defender.status === "Empoisonné" || defender.status === "Gravement empoisonné"))) {
        bpMods.push(0x2000);
        description.moveBP = move.bp * 2;
    } else if ((move.name === "Lance-Soleil" || move.name == "Lance-Soleil") && ["Pluie","Sable","Grêle","Mer Primaire"].indexOf(field.weather) !== -1) {
        bpMods.push(0x800);
        description.moveBP = move.bp / 2;
        description.weather = field.weather;
    } else if (gen >= 6 && move.name === "Sabotage" && !(defender.item === "" ||
            (defender.name === "Giratina-O" && defender.item === "Orbe Platiné") ||
            (defender.name.indexOf("Arceus") !== -1 && defender.item.indexOf("Plaque") !== -1))) {
        bpMods.push(0x1800);
        description.moveBP = move.bp * 1.5;
    }
    
    if (field.isHelpingHand) {
        bpMods.push(0x1800);
        description.isHelpingHand = true;
    }
    
    if (!move.isZ && (isAerilate || isPixilate || isRefrigerate || isGalvanize)) {
        bpMods.push(0x14CD);
        description.attackerAbility = attacker.ability;
    } else if ((attacker.ability === "Méga Blaster" && move.isPulse) ||
            (attacker.ability === "Prognathe" && move.isBite)) {
        bpMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    } else if (attacker.ability === "Griffe Dure" && move.makesContact) { //boosts by 1.3x for contact moves, apparently
        bpMods.push(0x14CD);
        description.attackerAbility = attacker.ability;
    } else if(defender.ability === "Boule de Poils" && move.makesContact){
        bpMods.push(0x800);
    }
    

    var isAttackerAura = (attacker.ability === (move.type + " Aura")) || (attacker.ability == "Aura Ténébreuse" && move.type == "Ténèbres"); //Special handling of Dark Aura
    var isDefenderAura = defAbility === (move.type + " Aura") || (attacker.ability == "Aura Ténébreuse" && move.type == "Ténèbres"); //Special handling of Dark Aura
    var auraActive = ($("input:checkbox[id='" + move.type + "Aura']:checked").val() != undefined) || (($("input:checkbox[value='Aura Ténébreuse']:checked").val() != undefined) && (move.type == "Ténèbres")); //Special handling of Dark Aura
    var auraBreak = ($("input:checkbox[id='Aura Inversée']:checked").val() != undefined)
    if (auraActive) {
        if (auraBreak) {
            bpMods.push(0x0C00);
            description.attackerAbility = attacker.ability;
            description.defenderAbility = defAbility;
        } else {
            bpMods.push(0x1547);
            if (isAttackerAura) {
                description.attackerAbility = attacker.ability;
            }
            if (isDefenderAura) {
                description.defenderAbility = defAbility;
            }
        }
    }
    
    if(move.type === "Acier" && attacker.ability === "Expert Acier"){
        bpMods.push(0x1800);
    }
    
    basePower = Math.max(1, pokeRound(basePower * chainMods(bpMods) / 0x1000));
    basePower = attacker.isChild ? basePower / 4 : basePower;
    
    ////////////////////////////////
    ////////// (SP)ATTACK //////////
    ////////////////////////////////
	var necrozmaMove = move.name == "Photo-Geyser" || move.name == "Apocalypsis Luminis";
    var attack;
    var attackSource = move.name === "Tricherie" ? defender : attacker;
    var attackStat = move.category === "Physique" ? AT : SA;
    var usesPhysicalAttackStat = move.category === "Physique" || (necrozmaMove && attacker.stats[AT] >= attacker.stats[SA]);
    var attackStat = usesPhysicalAttackStat ? AT : SA;
    description.attackEVs = attacker.evs[attackStat] +
            (NATURES[attacker.nature][0] === attackStat ? "+" : NATURES[attacker.nature][1] === attackStat ? "-" : "") + " " +
            toSmogonStat(attackStat);
    if (attackSource.boosts[attackStat] === 0 || (isCritical && attackSource.boosts[attackStat] < 0)) {
        attack = attackSource.rawStats[attackStat];
    } else if (defAbility === "Inconscient") {
        attack = attackSource.rawStats[attackStat];
        description.defenderAbility = defAbility;
    } else {
        attack = attackSource.stats[attackStat];
        description.attackBoost = attackSource.boosts[attackStat];
    }
    
    // unlike all other attack modifiers, Hustle gets applied directly
    if (attacker.ability === "Agitation" && move.category === "Physique") {
        attack = pokeRound(attack * 3/2);
        description.attackerAbility = attacker.ability;
    }
    
    var atMods = [];
    if ((defAbility === "Isograisse" && (move.type === "Feu" || move.type === "Glace")) || (defAbility === "Aquabulle" && move.type === "Feu")) {
        atMods.push(0x800);
        description.defenderAbility = defAbility;
    }
    if (defAbility === "Boule de Poils" && move.type === "Feu") {
        atMods.push(0x2000);
        description.defenderAbility = defAbility;
    }

    
    if ((attacker.ability === "Cran" && attacker.status !== "Bonne santé" && move.category === "Physique") ||
            (attacker.ability === "Engrais" && attacker.curHP <= attacker.maxHP / 3 && move.type === "Plante") ||
            (attacker.ability === "Brasier" && attacker.curHP <= attacker.maxHP / 3 && move.type === "Feu") ||
            (attacker.ability === "Torrent" && attacker.curHP <= attacker.maxHP / 3 && move.type === "Eau") ||
            (attacker.ability === "Essaim" && attacker.curHP <= attacker.maxHP / 3 && move.type === "Insecte")) {
        atMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    } else if (attacker.ability === "Torche (activé)" && move.type === "Feu") {
        atMods.push(0x1800);
        description.attackerAbility = "Torche";
    } else if ((attacker.ability === "Force Soleil" && field.weather.indexOf("Soleil") > -1 && move.category === "Spécial") ||
            (attacker.ability === "Don Floral" && field.weather.indexOf("Soleil") > -1 && move.category === "Physique")) {
        atMods.push(0x1800);
        description.attackerAbility = attacker.ability;
        description.weather = field.weather;
    } else if ((attacker.ability === "Défaitiste" && attacker.curHP <= attacker.maxHP / 2) ||
            (attacker.ability === "Début Calme" && move.category === "Physique")) {
        atMods.push(0x800);
        description.attackerAbility = attacker.ability;
    } else if ((attacker.ability === "Aquabulle" && move.type === "Eau") ||
        ((attacker.ability === "Coloforce" || attacker.ability === "Force Pure") && move.category === "Physique")) {
        atMods.push(0x2000);
        description.attackerAbility = attacker.ability;
    }
    
    if ((attacker.item === "Masse Os" && (attacker.name === "Osselait" || attacker.name === "Ossatueur" || attacker.name === "Ossatueur d'Alola") && move.category === "Physique") ||
            (attacker.item === "Dent Océan" && attacker.name === "Coquiperl" && move.category === "Spécial") ||
            (attacker.item === "Balle Lumière" && attacker.name === "Pikachu")) {
        atMods.push(0x2000);
        description.attackerItem = attacker.item;
    } else if ((attacker.item === "Rosée Âme" && (attacker.name === "Latios" || attacker.name === "Latias") && move.category === "Spécial") ||
            (attacker.item === "Bandeau Choix" && move.category === "Physique") ||
            (attacker.item === "Lunettes Choix" && move.category === "Spécial")) {
        atMods.push(0x1800);
        description.attackerItem = attacker.item;
    }
    
    attack = Math.max(1, pokeRound(attack * chainMods(atMods) / 0x1000));
    
    ////////////////////////////////
    ///////// (SP)DEFENSE //////////
    ////////////////////////////////
    var defense;
    var hitsPhysical = move.category === "Physique" || move.dealsPhysicalDamage;
    var defenseStat = hitsPhysical ? DF : SD;
    description.defenseEVs = defender.evs[defenseStat] +
            (NATURES[defender.nature][0] === defenseStat ? "+" : NATURES[defender.nature][1] === defenseStat ? "-" : "") + " " +
            toSmogonStat(defenseStat);
    if (defender.boosts[defenseStat] === 0 || (isCritical && defender.boosts[defenseStat] > 0) || move.ignoresDefenseBoosts) {
        defense = defender.rawStats[defenseStat];
    } else if (attacker.ability === "Inconscient") {
        defense = defender.rawStats[defenseStat];
        description.attackerAbility = attacker.ability;
    } else {
        defense = defender.stats[defenseStat];
        description.defenseBoost = defender.boosts[defenseStat];
    }
    
    // unlike all other defense modifiers, Sandstorm SpD boost gets applied directly
    if (field.weather === "Sable" && (defender.type1 === "Roche" || defender.type2 === "Roche") && !hitsPhysical) {
        defense = pokeRound(defense * 3/2);
        description.weather = field.weather;
    }
    
    var dfMods = [];
    if (defAbility === "Écaille Spéciale" && defender.status !== "Bonne santé" && hitsPhysical) {
        dfMods.push(0x1800);
        description.defenderAbility = defAbility;
    } else if (defAbility === "Don Floral" && field.weather.indexOf("Soleil") > -1 && !hitsPhysical) {
        dfMods.push(0x1800);
        description.defenderAbility = defAbility;
        description.weather = field.weather;
    }
    
    if ((defender.item === "Écaille Océan" && defender.name === "Coquiperl" && !hitsPhysical) ||
            (defender.item === "Poudre Métal" && defender.name === "Métamorph") ||
            (defender.item === "Rosée Âme" && (defender.name === "Latios" || defender.name === "Latias") && !hitsPhysical) ||
            (defender.item === "Veste de Combat" && !hitsPhysical) || defender.item === "Évoluroc") {
        dfMods.push(0x1800);
        description.defenderItem = defender.item;
    }
    
    defense = Math.max(1, pokeRound(defense * chainMods(dfMods) / 0x1000));
    
    ////////////////////////////////
    //////////// DAMAGE ////////////
    ////////////////////////////////
    var baseDamage = Math.floor(Math.floor((Math.floor((2 * attacker.level) / 5 + 2) * basePower * attack) / defense) / 50 + 2);
    if (field.format !== "Solo" && move.isSpread) {
        baseDamage = pokeRound(baseDamage * 0xC00 / 0x1000);
    }
    if ((field.weather.indexOf("Soleil") > -1 && move.type === "Feu") || (field.weather.indexOf("Pluie") > -1 && move.type === "Eau")) {
        baseDamage = pokeRound(baseDamage * 0x1800 / 0x1000);
        description.weather = field.weather;
    } else if ((field.weather === "Soleil" && move.type === "Eau") || (field.weather === "Pluie" && move.type === "Feu") ||
               (field.weather === "Souffle Delta" && (defender.type1 === "Vol" || defender.type2 === "Vol") &&
               typeChart[move.type]["Vol"] > 1)) {
        baseDamage = pokeRound(baseDamage * 0x800 / 0x1000);
        description.weather = field.weather;
    }
    if (field.isGravity || (attacker.type1 !== "Vol" && attacker.type2 !== "Vol" &&
                attacker.item !== "Ballon" && attacker.ability !== "Lévitation")) {
        if (field.terrain === "Électrifié" && move.type === "Électrik") {
            baseDamage = pokeRound(baseDamage * 0x1800 / 0x1000);
            description.terrain = field.terrain;
        } else if (field.terrain === "Herbu" && move.type == "Plante") {
            baseDamage = pokeRound(baseDamage * 0x1800 / 0x1000);
            description.terrain = field.terrain;
        }else if (field.terrain === "Psy" && move.type == "Psy") {
            baseDamage = pokeRound(baseDamage * 0x1800 / 0x1000);
            description.terrain = field.terrain;
        }
    }
    if (field.isGravity || (defender.type1 !== "Vol" && defender.type2 !== "Vol" &&
            defender.item !== "Ballon" && defender.ability !== "Lévitation")) {
        if (field.terrain === "Brumeux" && move.type === "Dragon") {
            baseDamage = pokeRound(baseDamage * 0x800 / 0x1000);
            description.terrain = field.terrain;
        }
    }
    if (isCritical) {
        baseDamage = Math.floor(baseDamage * (gen >= 6 ? 1.5 : 2));
        description.isCritical = isCritical;
    }
    // the random factor is applied between the crit mod and the stab mod, so don't apply anything below this until we're inside the loop
    var stabMod = 0x1000;
    if (move.type === attacker.type1 || move.type === attacker.type2) {
        if (attacker.ability === "Adaptabilité") {
            stabMod = 0x2000;
            description.attackerAbility = attacker.ability;
        } else {
            stabMod = 0x1800;
        }
    } else if (attacker.ability === "Protéen") {
        stabMod = 0x1800;
        description.attackerAbility = attacker.ability;
    }
    var applyBurn = (attacker.status === "Brûlé" && move.category === "Physique" && attacker.ability !== "Cran" && !move.ignoresBurn);
    description.isBurned = applyBurn;
    var finalMods = [];
    if (field.isReflect && move.category === "Physique" && !isCritical) {
        finalMods.push(field.format !== "Solo" ? 0xA8F : 0x800);
        description.isReflect = true;
    } else if (field.isLightScreen && move.category === "Spécial" && !isCritical) {
        finalMods.push(field.format !== "Solo" ? 0xA8F : 0x800);
        description.isLightScreen = true;
    }
    if ((defAbility === "Multiécaille" || defAbility == "Spectro-Bouclier") && defender.curHP === defender.maxHP) {
        finalMods.push(0x800);
        description.defenderAbility = defAbility;
    }
    if (attacker.ability === "Lentiteintée" && typeEffectiveness < 1) {
        finalMods.push(0x2000);
        description.attackerAbility = attacker.ability;
    }
    if (field.isFriendGuard) {
        finalMods.push(0xC00);
        description.isFriendGuard = true;
    }
    if (attacker.ability === "Sniper" && isCritical) {
        finalMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    }
    if ((defAbility === "Solide Roc" || defAbility === "Filtre" || defAbility === "Prisme-Armure") && typeEffectiveness > 1) {
        finalMods.push(0xC00);
        description.defenderAbility = defAbility;
    }
    if (attacker.item === "Ceinture Pro" && typeEffectiveness > 1) {
        finalMods.push(0x1333);
        description.attackerItem = attacker.item;
    } else if (attacker.item === "Orbe Vie") {
        finalMods.push(0x14CC);
        description.attackerItem = attacker.item;
    }
    if (getBerryResistType(defender.item) === move.type && (typeEffectiveness > 1 || move.type === "Normal") &&
            attacker.ability !== "Tension") {
        finalMods.push(0x800);
        description.defenderItem = defender.item;
    }
    if (defAbility === "Toison Épaisse" && hitsPhysical){
        finalMods.push(0x800);
        description.defenderAbility = defAbility;
    }
       if(isQuarteredByProtect){
        finalMods.push(0x400);
        description.isQuarteredByProtect = true;
    }
    var finalMod = chainMods(finalMods);
    
    var damage = [], pbDamage = [];
    var child, childDamage, j;
    if (attacker.ability === "Amour Filial" && move.hits === 1 && (field.format === "Solo" || !move.isSpread)) {
        child = JSON.parse(JSON.stringify(attacker));
        child.ability = '';
        child.isChild = true;
        if (move.name === 'Poing Boost') {
            child.boosts[AT]++;
            child.stats[AT] = getModifiedStat(child.rawStats[AT], child.boosts[AT]);
        }
        childDamage = getDamageResult(child, defender, move, field).damage;
        description.attackerAbility = attacker.ability;
    }
    for (var i = 0; i < 16; i++) {
        damage[i] = Math.floor(baseDamage * (85 + i) / 100);
        damage[i] = pokeRound(damage[i] * stabMod / 0x1000);
        damage[i] = Math.floor(damage[i] * typeEffectiveness);
        if (applyBurn) {
            damage[i] = Math.floor(damage[i] / 2);
        }
        damage[i] = Math.max(1, damage[i]);
        damage[i] = pokeRound(damage[i] * finalMod / 0x1000);
        if (attacker.ability === "Amour Filial" && move.hits === 1 && (field.format === "Solo" || !move.isSpread)) {
            for (j = 0; j < 16; j++) {
                pbDamage[(16 * i) + j] = damage[i] + childDamage[j];
            }
        }
    }
    // REturn a bit more info if this is a Parental Bond usage.
    if (pbDamage.length) {
        return {
            "damage": pbDamage.sort(numericSort),
            "parentDamage": damage,
            "childDamage": childDamage,
            "description": buildDescription(description)
        };
    }
    return {"damage": pbDamage.length ? pbDamage.sort(numericSort) : damage, "description": buildDescription(description)};
}

function numericSort(a, b) {
    return a - b;
}

function buildDescription(description) {
    var output = "";
    if (description.attackBoost) {
        if (description.attackBoost > 0) {
            output += "+";
        }
        output += description.attackBoost + " ";
    }
    output = appendIfSet(output, description.attackEVs);
    output = appendIfSet(output, description.attackerItem);
    output = appendIfSet(output, description.attackerAbility);
    
    if (description.isBurned) {
        output += "brûlé ";
    }
    output += description.attackerName + " ";
    if (description.isHelpingHand) {
        output += "Coup d'Main ";
    }
    if (description.isBattery) {
        output += "Batterie ";
    }
    output += description.moveName + " ";
    if (description.moveBP && description.moveType) {
        output += "(" + description.moveBP + " BP " + description.moveType + ") ";
    } else if (description.moveBP) {
        output += "(" + description.moveBP + " BP) ";
    } else if (description.moveType) {
        output += "(" + description.moveType + ") ";
    }
    if (description.hits) {
        output += "(" + description.hits + " coups) ";
    }
    output += "vs. ";
    if (description.defenseBoost) {
        if (description.defenseBoost > 0) {
            output += "+";
        }
        output += description.defenseBoost + " ";
    }
    output = appendIfSet(output, description.HPEVs);
    if (description.defenseEVs) {
        output += " / " + description.defenseEVs + " ";
    }
    output = appendIfSet(output, description.defenderItem);
    output = appendIfSet(output, description.defenderAbility);
    output += description.defenderName;
    if (description.weather) {
        output += " in " + description.weather;
    } else if (description.terrain) {
        output += " in " + description.terrain + " Champs";
    }
    if (description.isReflect) {
        output += " pendant la Protection";
    } else if (description.isLightScreen) {
        output += " pendant le Mur Lumière";
    }
    if (description.isCritical) {
        output += " avec un C-Critique";
    }
    if (description.isFriendGuard) {
        output += " avec la Garde Amie";
    }
    if(description.isQuarteredByProtect) {
        output += " avec Abri";
    }
    return output;
}

function appendIfSet(str, toAppend) {
    if (toAppend) {
        return str + toAppend + " ";
    }
    return str;
}

function toSmogonStat(stat) {
    return stat === AT ? "Atk"
            : stat === DF ? "Def"
            : stat === SA ? "SpA"
            : stat === SD ? "SpD"
            : stat === SP ? "Spe"
            : "wtf";
}

function chainMods(mods) {
    var M = 0x1000;
    for(var i = 0; i < mods.length; i++) {
        if(mods[i] !== 0x1000) {
            M = ((M * mods[i]) + 0x800) >> 12;
        }
    }
    return M;
}

function getMoveEffectiveness(move, type, isGhostRevealed, isGravity) {
    if (isGhostRevealed && type === "Spectre" && (move.type === "Normal" || move.type === "Combat")) {
        return 1;
    } else if (isGravity && type === "Vol" && move.type === "Sol") {
        return 1;
    } else if (move.name === "Lyophilisation" && type === "Eau") {
        return 2;
    } else if (move.name === "Flying Press") {
        return typeChart["Combat"][type] * typeChart["Vol"][type];
    } else {
               return typeChart[move.type][type];
    }
}

function getModifiedStat(stat, mod) {
    return mod > 0 ? Math.floor(stat * (2 + mod) / 2)
            : mod < 0 ? Math.floor(stat * 2 / (2 - mod))
            : stat;
}

function getFinalSpeed(pokemon, weather) {
    var speed = getModifiedStat(pokemon.rawStats[SP], pokemon.boosts[SP]);
    if (pokemon.item === "Mouchoir Choix") {
        speed = Math.floor(speed * 1.5);
    } else if (pokemon.item === "Bracelet Macho" || pokemon.item === "Balle Fer") {
        speed = Math.floor(speed / 2);
    }
    if ((pokemon.ability === "Chlorophylle" && weather.indexOf("Soleil") > -1) ||
            (pokemon.ability === "Baigne Sable" && weather === "Sable") ||
            (pokemon.ability === "Glissade" && weather.indexOf("Pluie") > -1)) {
        speed *= 2;
    }
    return speed;
}

function checkAirLock(pokemon, field) {
    if (pokemon.ability === "Air Lock" || pokemon.ability === "Ciel Gris") {
        field.clearWeather();
    }
}
function checkForecast(pokemon, weather) {
    if (pokemon.ability === "Météo" && pokemon.name === "Morphéo") {
        if (weather.indexOf("Soleil") > -1) {
            pokemon.type1 = "Feu";
        } else if (weather.indexOf("Pluie") > -1) {
            pokemon.type1 = "Eau";
        } else if (weather === "Grêle") {
            pokemon.type1 = "Glace";
        } else {
            pokemon.type1 = "Normal";
        }
        pokemon.type2 = "";
    }
}
function checkKlutz(pokemon) {
    if (pokemon.ability === "Maladresse") {
        pokemon.item = "";
    }
}
function checkIntimidate(source, target) {
    if (source.ability === "Intimidation") {
        if (target.ability === "Contestation" || target.ability === "Acharné") {
            target.boosts[AT] = Math.min(6, target.boosts[AT] + 1);
        } else if (["Corps Sain", "Écran Fumée", "Hyper Cutter", "Métalo-Garde"].indexOf(target.ability) !== -1) {
            // no effect
        } else if (target.ability === "Solo") {
            target.boosts[AT] = Math.max(-6, target.boosts[AT] - 2);
        } else {
            target.boosts[AT] = Math.max(-6, target.boosts[AT] - 1);
        }
    }
}
function checkEvo(p1, p2){
    if($('#evoL').prop("checked")){
        p1.boosts[AT] = Math.min(6, p1.boosts[AT] + 2);
        p1.boosts[DF] = Math.min(6, p1.boosts[DF] + 2);
       p1.boosts[SA] = Math.min(6, p1.boosts[SA] + 2);
        p1.boosts[SD] = Math.min(6, p1.boosts[SD] + 2);
        p1.boosts[SP] = Math.min(6, p1.boosts[SP] + 2);
    }
    if($('#evoR').prop("checked")){
        p2.boosts[AT] = Math.min(6, p2.boosts[AT] + 2);
        p2.boosts[DF] = Math.min(6, p2.boosts[DF] + 2);
        p2.boosts[SA] = Math.min(6, p2.boosts[SA] + 2);
        p2.boosts[SD] = Math.min(6, p2.boosts[SD] + 2);
        p2.boosts[SP] = Math.min(6, p2.boosts[SP] + 2);
    }

}

function checkDownload(source, target) {
    if (source.ability === "Télécharge") {
        if (target.stats[SD] <= target.stats[DF]) {
            source.boosts[SA] = Math.min(6, source.boosts[SA] + 1);
        } else {
            source.boosts[AT] = Math.min(6, source.boosts[AT] + 1);
        }
    }
}
function checkInfiltrator(attacker, affectedSide) {
    if (attacker.ability === "Infiltration") {
        affectedSide.isReflect = false;
        affectedSide.isLightScreen = false;
    }
}

function countBoosts(boosts) {
    var sum = 0;
    for (var i = 0; i < STATS.length; i++) {
        if (boosts[STATS[i]] > 0) {
            sum += boosts[STATS[i]];
        }
    }
    return sum;
}

// GameFreak rounds DOWN on .5
function pokeRound(num) {
    return (num % 1 > 0.5) ? Math.ceil(num) : Math.floor(num);
}
