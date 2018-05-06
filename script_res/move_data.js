var MOVES_RBY = {
    '(Sans Attaque)': {
        bp: 0,
        type: 'Normal',
        category: 'Physique'
    },
    'Acide': {
        bp: 40,
        type: 'Poison'
    },
    'Étreinte': {
        bp: 15,
        type: 'Normal'
    },
    'Blizzard': {
        bp: 120,
        type: 'Glace',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Plaquage': {
        bp: 85,
        type: 'Normal',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Bulles d O': {
        bp: 65,
        type: 'Eau'
    },
    'Claquoir': {
        bp: 35,
        type: 'Eau'
    },
    'Pince-Masse': { 
        bp: 90,
        type: 'Eau',
        category: 'Physique',
        makesContact: true,
        alwaysCrit: true
    },
    'Tunnel': {
        bp: 100,
        type: 'Sol'
    },
    'Double Pied': {
        bp: 30,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        isTwoHit: true
    },
    'Damoclès': {
        bp: 100,
        type: 'Normal',
        category: 'Physique',
        makesContact: true,
        hasRecoil: true
    },
    'Bec Vrille': {
        bp: 80,
        type: 'Vol',
        category: 'Physique',
        makesContact: true
    },
    'Séisme': {
        bp: 100,
        type: 'Sol',
        category: 'Physique',
        isSpread: true
    },
    'Explosion': {
        bp: 170,
        type: 'Normal',
        category: 'Physique',
        isSpread: true
    },
    'Déflagration': {
        bp: 120,
        type: 'Feu',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Poing de Feu': {
        bp: 75,
        type: 'Feu',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Danse-Flamme': {
        bp: 15,
        type: 'Feu'
    },
    'Lance-Flammes': {
        bp: 95,
        type: 'Feu',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Pied Voltige': {
        bp: 85,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        hasRecoil: true
    },
    'Hydrocanon': {
        bp: 120,
        type: 'Eau',
        category: 'Spécial'
    },
    'Ultralaser': {
        bp: 150,
        type: 'Normal',
        category: 'Spécial'
    },
    'Laser Glace': {
        bp: 95,
        type: 'Glace',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Poing Glace': {
        bp: 75,
        type: 'Glace',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Méga-Sangsue': {
        bp: 40,
        type: 'Plante'
    },
    'Ténèbres': {
        bp: 100,
        type: 'Spectre',
        category: 'Spécial'
    },
    'Dard-Nuée': {
        bp: 14,
        type: 'Insecte',
        category: 'Physique',
        isMultiHit: true
    },
    'Psyko': {
        bp: 90,
        type: 'Psy',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Vive-Attaque': {
        bp: 40,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Tranch Herbe': {
        bp: 55,
        type: 'Plante',
        category: 'Spécial',
        alwaysCrit: true
    },
    'Éboulement': {
        bp: 75,
        type: 'Roche',
        category: 'Physique',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Frappe Atlas': {
        bp: 100,
        type: 'Combat',
        category: 'Physique',
        makesContact: true
    },
    'Destruction': {
        bp: 130,
        type: 'Normal',
        category: 'Physique',
        isSpread: true
    },
    'Piqué': {
        bp: 140,
        type: 'Vol',
        category: 'Physique',
        hasSecondaryEffect: true
    },
    'Tranche': {
        bp: 70,
        type: 'Normal',
        alwaysCrit: true
    },
    'Détritus': {
        bp: 65,
        type: 'Poison'
    },
    'Sacrifice': {
        bp: 80,
        type: 'Combat'
    },
    'Surf': {
        bp: 95,
        type: 'Eau',
        category: 'Spécial',
        isSpread: true
    },
    'Charge': {
        bp: 35,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Fatal-Foudre': {
        bp: 120,
        type: 'Électrik',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Poing Foudre': {
        bp: 75,
        type: 'Électrik',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Tonnerre': {
        bp: 95,
        type: 'Électrik',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Double-Dard': {
        bp: 25,
        type: 'Insecte',
        isTwoHit: true
    },
    'Ligotage': {
        bp: 15,
        type: 'Normal'
    }
};

var MOVES_GSC = $.extend(true, {}, MOVES_RBY, {
    'Aeroblast': {
        bp: 100,
        type: 'Vol',
        category: 'Spécial'
    },
    'Pouvoir Antique': {
        bp: 60,
        type: 'Roche',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Morsure': {
        bp: 60,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Pince-Masse': { alwaysCrit: false },
    'Coup-Croix': {
        bp: 100,
        type: 'Combat',
        category: 'Physique',
        makesContact: true
    },
    'Mâchouille': {
        bp: 80,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Damoclès': { bp: 120 },
    'Dynamo-Poing': {
        bp: 100,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Explosion': { bp: 250 },
    'Vitesse Extrême': {
        bp: 80,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Feinte': {
        bp: 60,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true
    },
    'Fléau': {
        bp: 1,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Roue de Feu': {
        bp: 60,
        type: 'Feu',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Frustration': {
        bp: 102,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Giga-Sangsue': {
        bp: 60,
        type: 'Plante',
        category: 'Spécial'
    },
    'Coup d boule': {
        bp: 70,
        type: 'Normal',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Puissance Cachée Insecte': {
        bp: 70,
        type: 'Insecte',
        category: 'Spécial'
    },
    'Puissance Cachée Ténèbres': {
        bp: 70,
        type: 'Ténèbres',
        category: 'Spécial'
    },
    'Puissance Cachée Dragon': {
        bp: 70,
        type: 'Dragon',
        category: 'Spécial'
    },
    'Puissance Cachée Électrik': {
        bp: 70,
        type: 'Électrik',
        category: 'Spécial'
    },
    'Puissance Cachée Combat': {
        bp: 70,
        type: 'Combat',
        category: 'Spécial'
    },
    'Puissance Cachée Feu': {
        bp: 70,
        type: 'Feu',
        category: 'Spécial'
    },
    'Puissance Cachée Vol': {
        bp: 70,
        type: 'Vol',
        category: 'Spécial'
    },
    'Puissance Cachée Spectre': {
        bp: 70,
        type: 'Spectre',
        category: 'Spécial'
    },
    'Puissance Cachée Plante': {
        bp: 70,
        type: 'Plante',
        category: 'Spécial'
    },
    'Puissance Cachée Sol': {
        bp: 70,
        type: 'Sol',
        category: 'Spécial'
    },
    'Puissance Cachée Glace': {
        bp: 70,
        type: 'Glace',
        category: 'Spécial'
    },
    'Puissance Cachée Poison': {
        bp: 70,
        type: 'Poison',
        category: 'Spécial'
    },
    'Puissance Cachée Psy': {
        bp: 70,
        type: 'Psy',
        category: 'Spécial'
    },
    'Puissance Cachée Roche': {
        bp: 70,
        type: 'Roche',
        category: 'Spécial'
    },
    'Puissance Cachée Acier': {
        bp: 70,
        type: 'Acier',
        category: 'Spécial'
    },
    'Puissance Cachée Eau': {
        bp: 70,
        type: 'Eau',
        category: 'Spécial'
    },
    'Vent Glace': {
        bp: 55,
        type: 'Glace',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Queue de Fer': {
        bp: 100,
        type: 'Acier',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Mach Punch': {
        bp: 40,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        isPunch: true
    },
    'Mégacorne': {
        bp: 120,
        type: 'Insecte',
        category: 'Physique',
        makesContact: true
    },
    'Poursuite': {
        bp: 40,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true
    },
    'Tour Rapide': {
        bp: 20,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Tranch Herbe': { alwaysCrit: false },
    'Retour': {
        bp: 102,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Contre': {
        bp: 1,
        type: 'Combat',
        category: 'Physique',
        makesContact: true
    },
    'Feu Sacré': {
        bp: 100,
        type: 'Feu',
        category: 'Physique',
        hasSecondaryEffect: true
    },
    'Destruction': { bp: 200 },
    'Ball Ombre': {
        bp: 80,
        type: 'Spectre',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Bomb-Beurk': {
        bp: 90,
        type: 'Poison',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Lance-Soleil': {
        bp: 120,
        type: 'Plante',
        category: 'Spécial'
    },
    'Aile d Acier': {
        bp: 70,
        type: 'Acier',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Larcin': {
        bp: 40,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true
    },
    'Elécanon': {
        bp: 100,
        type: 'Électrik',
        category: 'Spécial',
        hasSecondaryEffect: true
    }
});

delete MOVES_GSC['Acide'];
delete MOVES_GSC['Étreinte'];
delete MOVES_GSC['Claquoir'];
delete MOVES_GSC['Tunnel'];
delete MOVES_GSC['Danse-Flamme'];
delete MOVES_GSC['Méga-Sangsue'];
delete MOVES_GSC['Tranche'];
delete MOVES_GSC['Détritus'];
delete MOVES_GSC['Ligotage'];

var MOVES_ADV = $.extend(true, {}, MOVES_GSC, {
    'Aeropique': {
        bp: 60,
        type: 'Vol',
        category: 'Physique',
        makesContact: true
    },
    'Tranch Air': {
        bp: 55,
        type: 'Vol',
        category: 'Spécial',
        isSpread: true
    },
    'Pied Brûleur': {
        bp: 85,
        type: 'Feu',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Osmerang': {
        bp: 50,
        type: 'Sol',
        category: 'Physique',
        isTwoHit: true
    },
    'Rebond': {
        bp: 85,
        type: 'Vol',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Casse-Brique': {
        bp: 75,
        type: 'Combat',
        category: 'Physique',
        makesContact: true
    },
    'Carnareket': {
        bp: 120,
        type: 'Acier',
        category: 'Spécial'
    },
    'Dracogriffe': {
        bp: 80,
        type: 'Dragon',
        category: 'Physique',
        makesContact: true
    },
    'Éruption': {
        bp: 150,
        type: 'Feu',
        category: 'Spécial',
        isSpread: true
    },
    'Extrasenseur': {
        bp: 80,
        type: 'Psy',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Façade': {
        bp: 70,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Bluff': {
        bp: 40,
        type: 'Normal',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Mitra-Poing': {
        bp: 150,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        isPunch: true
    },
    'Canicule': {
        bp: 100,
        type: 'Feu',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Sabotage': {
        bp: 20,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true
    },
    'Lame-Feuille': {
        bp: 70,
        type: 'Plante',
        category: 'Physique',
        makesContact: true
    },
    'Balayage': {
        bp: 1,
        type: 'Combat',
        category: 'Physique',
        makesContact: true
    },
    'Lumi-Éclat': {
        bp: 70,
        type: 'Psy',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Poing Météor': {
        bp: 100,
        type: 'Acier',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Ocroupi': {
        bp: 95,
        type: 'Eau',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Tir de Boue': {
        bp: 55,
        type: 'Sol',
        category: 'Spécial',
        hasSecondaryEffect: true,
    },
    'Surchauffe': {
        bp: 140,
        type: 'Feu',
        category: 'Spécial'
    },
    'Crocs Poison': {
        bp: 50,
        type: 'Poison',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Psycho Boost': {
        bp: 140,
        type: 'Psy',
        category: 'Spécial'
    },
    'Vendetta': {
        bp: 120,
        type: 'Combat',
        category: 'Physique',
        makesContact: true
    },
    'Boule Roc': {
        bp: 25,
        type: 'Roche',
        category: 'Physique',
        isMultiHit: true
    },
    'Tomberoche': {
        bp: 50,
        type: 'Roche',
        category: 'Physique',
        hasSecondaryEffect: true
    },
    'Poing Ombre': {
        bp: 60,
        type: 'Spectre',
        category: 'Physique',
        makesContact: true,
        isPunch: true
    },
    'Onde de Choc': {
        bp: 60,
        type: 'Électrik',
        category: 'Spécial'
    },
    'Rayon Signal': {
        bp: 75,
        type: 'Insecte',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Stratopercut': {
        bp: 85,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        isPunch: true
    },
    'Étincelle': {
        bp: 65,
        type: 'Électrik',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Surpuissance': {
        bp: 120,
        type: 'Combat',
        category: 'Physique',
        makesContact: true
    },
    'Électacle': {
        bp: 120,
        type: 'Électrik',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        hasRecoil: true
    },
    'Vibraqua': {
        bp: 60,
        type: 'Eau',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isPulse: true
    },
    'Giclédo': {
        bp: 150,
        type: 'Eau',
        category: 'Spécial',
        isSpread: true
    },
    'Ball Météo': {
        bp: 50,
        type: 'Normal',
        category: 'Spécial',
        isBullet: true
    }
});

delete MOVES_ADV['Bulles d O'];
delete MOVES_ADV['Sacrifice'];

var MOVES_DPP = $.extend(true, {}, MOVES_ADV, {
    'Lame d Air': {
        bp: 75,
        type: 'Vol',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Aqua Jet': {
        bp: 40,
        type: 'Eau',
        category: 'Physique',
        makesContact: true
    },
    'Hydroqueue': {
        bp: 90,
        type: 'Eau',
        category: 'Physique',
        makesContact: true
    },
    'Assurance': {
        bp: 50,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true
    },
    'Aurasphère': {
        bp: 90,
        type: 'Combat',
        category: 'Spécial',
        isBullet: true,
        isPulse: true
    },
    'Avalanche': {
        bp: 120,
        type: 'Glace',
        category: 'Physique',
        makesContact: true
    },
    'Rapace': {
        bp: 120,
        type: 'Vol',
        category: 'Physique',
        makesContact: true,
        hasRecoil: true
    },
    'Piqûre': {
        bp: 60,
        type: 'Insecte',
        category: 'Physique',
        makesContact: true
    },
    'Bourdon': {
        bp: 90,
        type: 'Insecte',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSound: true
    },
    'Pisto-Poing': {
        bp: 40,
        type: 'Acier',
        category: 'Physique',
        makesContact: true,
        isPunch: true
    },
    'Rayon Chargé': {
        bp: 50,
        type: 'Électrik',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Babil': {
        bp: 60,
        type: 'Vol',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSound: true
    },
    'Close Combat': {
        bp: 120,
        type: 'Combat',
        category: 'Physique',
        makesContact: true
    },
    'Poison-Croix': {
        bp: 70,
        type: 'Poison',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Vibrobscur': {
        bp: 80,
        type: 'Ténèbres',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isPulse: true
    },
    'Coup d Jus': {
        bp: 80,
        type: 'Électrik',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Coup Double': {
        bp: 35,
        type: 'Normal',
        category: 'Physique',
        makesContact: true,
        isTwoHit: true
    },
    'Draco Méteore': {
        bp: 140,
        type: 'Dragon',
        category: 'Spécial'
    },
    'Dracochoc': {
        bp: 90,
        type: 'Dragon',
        category: 'Spécial',
        isPulse: true
    },
    'Dracocharge': {
        bp: 100,
        type: 'Dragon',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Vampipoing': {
        bp: 60,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        isPunch: true
    },
    'Telluriforce': {
        bp: 90,
        type: 'Sol',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Éco-Sphère': {
        bp: 80,
        type: 'Plante',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Crocs Feu': {
        bp: 65,
        type: 'Feu',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Boutefeu': {
        bp: 120,
        type: 'Feu',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        hasRecoil: true
    },
    'Luminocanon': {
        bp: 80,
        type: 'Acier',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Dégommage': {
        bp: 1,
        type: 'Ténèbres',
        category: 'Physique'
    },
    'Vol':{
        bp: 90,
       type: 'Vol',
        category: 'Physique'
    },
    'Exploforce': {
        bp: 120,
        type: 'Combat',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Forte-Paume': {
        bp: 60,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Giga Impact': {
        bp: 150,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Noeud Herbe': {
        bp: 1,
        type: 'Plante',
        category: 'Spécial',
        makesContact: true
    },
    'Détricanon': {
        bp: 120,
        type: 'Poison',
        category: 'Physique',
        hasSecondaryEffect: true
    },
    'Gyroballe': {
        bp: 1,
        type: 'Acier',
        category: 'Physique',
        makesContact: true,
        isBullet: true
    },
    'Marto-Poing': {
        bp: 100,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        isPunch: true
    },
    'Fracass Tête': {
        bp: 150,
        type: 'Roche',
        category: 'Physique',
        makesContact: true,
        hasRecoil: true
    },
    'Pied Voltige': { bp: 100 },
    'Mégaphone': {
        bp: 90,
        type: 'Normal',
        category: 'Spécial',
        isSound: true,
        isSpread: true
    },
    'Crocs Givre': {
        bp: 65,
        type: 'Glace',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Éclats Glace': {
        bp: 40,
        type: 'Glace',
        category: 'Physique'
    },
    'Tête de Fer': {
        bp: 80,
        type: 'Acier',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Jugement': {
        bp: 100,
        type: 'Normal',
        category: 'Spécial'
    },
    'Pied Sauté': {
        bp: 85,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        hasRecoil: true
    },
    'Dernier Recours': {
        bp: 130,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Ébullilave': {
        bp: 80,
        type: 'Feu',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Lame-Feuille': { bp: 90 },
    'Tempête Verte': {
        bp: 140,
        type: 'Plante',
        category: 'Spécial'
    },
    'Vortex Magma': {
        bp: 120,
        type: 'Feu',
        category: 'Spécial'
    },
    'Boue Bomb': {
        bp: 65,
        type: 'Sol',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Don Naturel': {
        bp: 1,
        type: 'Normal',
        category: 'Physique'
    },
    'Force-Nature': {
        bp: 80,
        type: 'Normal',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Tranche-Nuit': {
        bp: 70,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true
    },
    'Colère': {
        bp: 120,
        type: 'Dragon',
        category: 'Physique',
        makesContact: true
    },
    'Représailles': {
        bp: 50,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true
    },
    'Picore': {
        bp: 60,
        type: 'Vol',
        category: 'Physique',
        makesContact: true
    },
    'Direct Toxik': {
        bp: 80,
        type: 'Poison',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Rayon Gemme': {
        bp: 70,
        type: 'Roche',
        category: 'Spécial'
    },
    'Mégafouet': {
        bp: 120,
        type: 'Plante',
        category: 'Physique',
        makesContact: true
    },
    'Coupe Psycho': {
        bp: 70,
        type: 'Psy',
        category: 'Physique'
    },
    'Punition': {
        bp: 60,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true
    },
    'Escalade': {
        bp: 90,
        type: 'Normal',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Éclate-Roc': {
        bp: 40,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Canon Graine': {
        bp: 80,
        type: 'Plante',
        category: 'Physique',
        isBullet: true
    },
    'Fulmigraine': {
        bp: 120,
        type: 'Plante',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Griffe Ombre': {
        bp: 70,
        type: 'Spectre',
        category: 'Physique',
        makesContact: true
    },
    'Revenant': {
        bp: 120,
        type: 'Spectre',
        category: 'Physique',
        makesContact: true
    },
    'Ombre Portée': {
        bp: 40,
        type: 'Spectre',
        category: 'Physique',
        makesContact: true
    },
    'Spatio-Rift': {
        bp: 100,
        type: 'Dragon',
        category: 'Spécial'
    },
    'Lame De Roc': {
        bp: 100,
        type: 'Roche',
        category: 'Physique'
    },
    'Coup Bas': {
        bp: 80,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true
    },
    'Météores': {
        bp: 60,
        type: 'Normal',
        category: 'Spécial',
        isSpread: true
    },
    'Crocs Éclair': {
        bp: 65,
        type: 'Électrik',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Triplattaque': {
        bp: 80,
        type: 'Normal',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Demi-Tour': {
        bp: 70,
        type: 'Insecte',
        category: 'Physique',
        makesContact: true
    },
    'Onde Vide': {
        bp: 40,
        type: 'Combat',
        category: 'Spécial'
    },
    'Réveil Forcé': {
        bp: 60,
        type: 'Combat',
        category: 'Physique',
        makesContact: true
    },
    'Cascade': {
        bp: 80,
        type: 'Eau',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Martobois': {
        bp: 120,
        type: 'Plante',
        category: 'Physique',
        makesContact: true,
        hasRecoil: true
    },
    'Plaie-Croix': {
        bp: 80,
        type: 'Insecte',
        category: 'Physique',
        makesContact: true
    },
    'Psykoud Boul': {
        bp: 80,
        type: 'Psy',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    }
});

delete MOVES_DPP['Tranch Herbe'];
delete MOVES_DPP['Double-Dard'];
delete MOVES_DPP['Élecanon'];

var MOVES_BW = $.extend(true, {}, MOVES_DPP, {
    'Toile Élek': {
        bp: 55,
        type: "Électrik",
        category: "Spécial",
        isSpread: "True",
        hasSecondaryEffect: "True"
    },
    'Bombe Acide': {
        bp: 40,
        type: 'Poison',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Acrobatie': {
        bp: 55,
        type: 'Vol',
        category: 'Physique',
        makesContact: true
    },
    'Appel Attak': {
        bp: 90,
        type: 'Insecte',
        category: 'Physique'
    },
    'Flamme Bleue': {
        bp: 130,
        type: 'Feu',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Charge Foudre': {
        bp: 130,
        type: 'Électrik',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Piétisol': {
        bp: 60,
        type: 'Sol',
        category: 'Physique',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Balle Graine': {
        bp: 25,
        type: 'Plante',
        category: 'Physique',
        isMultiHit: true,
        isBullet: true
    },
    'Projection': {
        bp: 60,
        type: 'Combat',
        category: 'Physique',
        makesContact: true
    },
    'Clear Smog': {
        bp: 50,
        type: 'Poison',
        category: 'Spécial'
    },
    'Carnareket': { bp: 140 },
    'Draco-Queue': {
        bp: 60,
        type: 'Dragon',
        category: 'Physique',
        makesContact: true
    },
    'Vampipoing': { bp: 75 },
    'Tunnelier': {
        bp: 80,
        type: 'Sol',
        category: 'Physique',
        makesContact: true
    },
    'Double Baffe': {
        bp: 40,
        type: 'Dragon',
        category: 'Physique',
        makesContact: true,
        isTwoHit: true
    },
    'Boule Élek': {
        bp: 1,
        type: 'Électrik',
        category: 'Spécial',
        isBullet: true
    },
    'Ruse': {
        bp: 30,
        type: 'Normal',
        category: 'Physique'
    },
    'Danse du Feu': {
        bp: 80,
        type: 'Feu',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Nitrocharge': {
        bp: 50,
        type: 'Feu',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Tricherie': {
        bp: 95,
        type: 'Ténèbres',
        category: 'Physique',
        makesContact: true
    },
    'Éclair Gelé': {
        bp: 140,
        type: 'Glace',
        category: 'Physique',
        hasSecondaryEffect: true
    },
    'Souffle Glacé': {
        bp: 40,
        type: 'Glace',
        category: 'Spécial',
        alwaysCrit: true
    },
    'Éclair Croix': {
        bp: 100,
        type: 'Électrik',
        category: 'Physique'
    },
    'Flamme Croix': {
        bp: 100,
        type: 'Feu',
        category: 'Spécial'
    },
    'Lancécrou': {
        bp: 50,
        type: 'Acier',
        category: 'Physique',
        isTwoHit: true
    },
    'Giga-Sangsue': { bp: 75 },
    'Ère Glaciaire': {
        bp: 65,
        type: 'Glace',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Peignée': {
        bp: 120,
        type: 'Normal',
        category: 'Physique',
        makesContact: true,
        hasRecoil: true
    },
    'Tacle Lourd': {
        bp: 1,
        type: 'Acier',
        category: 'Physique',
        makesContact: true
    },
    'Châtiment': {
        bp: 50,
        type: 'Spectre',
        category: 'Spécial'
    },
    'Pied Voltige': { bp: 130 },
    'Encornebois': {
        bp: 75,
        type: 'Plante',
        category: 'Physique',
        makesContact: true
    },
    'Vent Violent': {
        bp: 120,
        type: 'Vol',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Chute Glace': {
        bp: 85,
        type: 'Glace',
        category: 'Physique',
        hasSecondaryEffect: true
    },
    'Stalagtite': {
        bp: 25,
        type: 'Glace',
        category: 'Physique',
        isMultiHit: true
    },
    'Calcination': {
        bp: 30,
        type: 'Feu',
        category: 'Spécial',
        isSpread: true
    },
    'Feu d Enfer': {
        bp: 100,
        type: 'Feu',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Pied Sauté': { bp: 100 },
    'Dernier Recours': { bp: 140 },
    'Balayette': {
        bp: 60,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Force-Nature': {
        bp: 100,
        type: 'Sol',
        category: 'Physique',
        hasSecondaryEffect: false,
        isSpread: true
    },
    'Explonuit': {
        bp: 85,
        type: 'Ténèbres',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Danse-Fleur': {
        bp: 120,
        type: 'Plante',
        category: 'Spécial',
        makesContact: true
    },
    'Choc Psy': {
        bp: 80,
        type: 'Psy',
        category: 'Spécial',
        dealsPhysiqueDamage: true
    },
    'Frappe Psy': {
        bp: 100,
        type: 'Psy',
        category: 'Spécial',
        dealsPhysiqueDamage: true
    },
     'Tranch Herbe': {
        bp: 55,
        type: 'Plante',
        category: 'Physique',
        isSpread: true
     },
    'Coquilame': {
        bp: 75,
        type: 'Eau',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Relic Song': {
        bp: 75,
        type: 'Normal',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSound: true,
        isSpread: true
    },
    'Vengeance': {
        bp: 70,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Lame Sainte': {
        bp: 90,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        ignoresDefenseBoosts: true
    },
    'Ébullition': {
        bp: 80,
        type: 'Eau',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Incendie': {
        bp: 100,
        type: 'Feu',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Lame Ointe': {
        bp: 85,
        type: 'Combat',
        category: 'Spécial',
        dealsPhysiqueDamage: true
    },
    'Chute Libre': {
        bp: 60,
        type: 'Vol',
        category: 'Physique',
        makesContact: true,
    },
    'Cradovague': {
        bp: 95,
        type: 'Poison',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Anti-Air': {
        bp: 50,
        type: 'Roche',
        category: 'Physique'
    },
    'Aboiement': {
        bp: 55,
        type: 'Ténèbres',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSound: true,
        isSpread: true
    },
    'Force Ajoutée': {
        bp: 20,
        type: 'Psy',
        category: 'Spécial'
    },
    'Yama Arashi': {
        bp: 40,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        alwaysCrit: true
    },
    'Synchropeine': {
        bp: 70,
        type: 'Psy',
        category: 'Spécial',
        isSpread: true
    },
    'Charge': { bp: 50 },
    'Plumo-Queue': {
        bp: 25,
        type: 'Normal',
        category: 'Physique',
        makesContact: true,
        isMultiHit: true
    },
    'Mania': {
        bp: 120,
        type: 'Normal',
        category: 'Physique',
        makesContact: true
    },
    'Coup Victoire': {
        bp: 180,
        type: 'Feu',
        category: 'Physique',
        makesContact: true
    },
    'Change Éclair': {
        bp: 70,
        type: 'Électrik',
        category: 'Spécial'
    },
    'Éclair Fou': {
        bp: 90,
        type: 'Électrik',
        category: 'Physique',
        makesContact: true,
        hasRecoil: true
    }
});

var MOVES_XY = $.extend(true, {}, MOVES_BW, {
    'Tranch Air': { bp: 60 },
    'Cogne': {
        bp: 15,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        isMultiHit: true
    },
    'Assurance': { bp: 60 },
    'Aurasphère': { bp: 80 },
    'Blizzard': { bp: 110 },
    'Bang Sonique': {
        bp: 140,
        type: 'Normal',
        category: 'Spécial',
        isSound: true,
        isSpread: true
    },
    'Babil': { bp: 65 },
    'Pince-Masse': { bp: 100 },
    'Éclat Magique': {
        bp: 80,
        type: 'Fée',
        category: 'Spécial',
        isSpread: true
    },
    'Orage Adamantin': {
        bp: 100,
        type: 'Roche',
        category: 'Physique',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Draco Méteore': { bp: 130 },
    'Draco Ascension': {
        bp: 120,
        type: 'Vol',
        category: 'Physique',
        makesContact: true
    },
    'Dracochoc': { bp: 85 },
    'Vampibaiser': {
        bp: 50,
        type: 'Fée',
        category: 'Spécial',
        makesContact: true,
    },
    'Éco-Sphère': { bp: 90 },
    'Façade': { ignoresBurn: true },
    'Déflagration': { bp: 110 },
    'Lance-Flammes': { bp: 90 },
    'Flying Press': {
        bp: 100,
        type: 'Combat',
        category: 'Physique',
        makesContact: true
    },
    'Lyophilisation': {
        bp: 70,
        type: 'Glace',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Souffle Glacé': { bp: 60 },
    'Canicule': { bp: 95 },
    'Châtiment': { bp: 65 },
    'Puissance Cachée Insecte': { bp: 60 },
    'Puissance Cachée Ténèbres': { bp: 60 },
    'Puissance Cachée Dragon': { bp: 60 },
    'Puissance Cachée Électrik': { bp: 60 },
    'Puissance Cachée Combat': { bp: 60 },
    'Puissance Cachée Feu': { bp: 60 },
    'Puissance Cachée Vol': { bp: 60 },
    'Puissance Cachée Spectre': { bp: 60 },
    'Puissance Cachée Plante': { bp: 60 },
    'Puissance Cachée Sol': { bp: 60 },
    'Puissance Cachée Glace': { bp: 60 },
    'Puissance Cachée Poison': { bp: 60 },
    'Puissance Cachée Psy': { bp: 60 },
    'Puissance Cachée Roche': { bp: 60 },
    'Puissance Cachée Acier': { bp: 60 },
    'Puissance Cachée Eau': { bp: 60 },
    'Vent Violent': { bp: 110 },
    'Hydrocanon': { bp: 110 },
    'Laser Glace': { bp: 90 },
    'Calcination': { bp: 60 },
    'Sabotage': { bp: 65 },
    'Force Chtonienne': {
        bp: 90,
        type: 'Sol',
        category: 'Physique',
        isSpread: true
    },
    'Tempête Verte': { bp: 130 },
    'Light of Ruin': {
        bp: 140,
        type: 'Fée',
        category: 'Spécial',
        hasRecoil: true
    },
    'Balayette': { bp: 65 },
    'Vortex Magma': { bp: 100 },
    'Poing Météor': { bp: 90 },
    'Pouvoir Lunaire': {
        bp: 95,
        type: 'Fée',
        category: 'Spécial',
        hasSecondaryEffect: true
    },
    'Ocroupi': { bp: 90 },
    'Force-Nature': {
        bp: 80,
        type: 'Normal',
        category: 'Spécial',
        hasSecondaryEffect: true,
        isSpread: false
    },
    'Mort-Ailes': {
        bp: 80,
        type: 'Vol',
        category: 'Spécial'
    },
    'Onde Originelle': {
        bp: 110,
        type: 'Eau',
        category: 'Spécial',
        isSpread: true
    },
    'Surchauffe': { bp: 130 },
    'Hantise': {
        bp: 90,
        type: 'Spectre',
        category: 'Physique',
        makesContact: true
    },
    'Dard Nuée': { bp: 25 },
    'Câlinerie': {
        bp: 90,
        type: 'Fée',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Rayon Gemme': { bp: 80 },
    'Poing Boost': {
        bp: 40,
        type: 'Combat',
        category: 'Physique',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Lame Pangéenne': {
        bp: 120,
        type: 'Sol',
        category: 'Physique',
        isSpread: 'true'
    },
    'Tomberoche': { bp: 60 },
    'Glaciation': {
        bp: 0,
        type: 'Glace',
        category: 'Spécial',
        isSpread: 'false',
        isMLG: 'true'
    },
    'Yama Arashi': { bp: 60 },
    'Surf': { bp: 90 },    
    'Synchropeine': { bp: 120 },
    'Larcin': { bp: 60 },
    'Fatal-Foudre': { bp: 110 },
    'Tonnerre': { bp: 90 },
    'Réveil Forcé': { bp: 70 },
    'Sheauriken': {
        bp: 15,
        type: 'Eau',
        category: 'Physique',
        isMultiHit: true
    },
    'Onde Boréale': {
        bp: 65,
        type: 'Glace', 
        category: 'Spécial'
    }
});

var ZMOVES_LOOKUP = {
    'Normal':'Turbo-Charge Bulldozer','Feu':'Pyro-Explosion Cataclysmique','Eau':'Super Tourbillon Abyssal',
    'Électrik':'Fulguro-Lance Gigavolt','Plante':'Pétalexplosion Éblouissante','Spectre':'Appel des Ombres Éternelles',
    'Ténèbres':'Trou Noir des Ombres','Psy':'Psycho-Pulvérisation EX','Combat':'Combo Hyper-Furie',
    'Acier':'Vrille Maximum','Glace':'Laser Cryogénique','Sol':'Éruption Géo-Sismique',
    'Roche':'Apocalypse Gigalithique','Insecte':'Cocon Fatal','Fée':'Impact Choupinova',
    'Vol':'Piqué Supersonique','Dragon':'Chaos Draconique','Poison':'Déluge Causti-Toxique'};


var MOVES_SM = $.extend(true, {}, MOVES_XY, {
    'Sheauriken': {
        category: 'Spécial',
        zp: 100
    },
    'Vampirisme': {
        category: 'Physique',
        type: 'Insecte',
        bp: 80,
        zp: 160
    },
    'Électrikipik': {
        category: 'Physique',
        type: 'Électrik',
        bp: 80,
        zp: 160
    },
    'Rayon Spectral': {
        category: 'Spécial',
        type: 'Spectre',
        bp: 100,
        zp: 180
    },
    'Choc Météore': {
        category: 'Physique',
        type: 'Acier',
        bp: 100,
        zp: 180
    },
    'Clepto-Mânes': {
        category: 'Physique',
        type: 'Spectre',
        bp: 90,
        zp: 175
    },
    'Laser Prisme': {
        category: 'Spécial',
        type: 'Psy',
        bp: 160,
        zp: 200
    },
    'Aqua-Brèche': {
        category: 'Physique',
        type: 'Eau',
        hasSecondaryEffect: true,
        bp: 85,
        zp: 160
    },
    'Vif Roc': {
        category: 'Physique',
        type: 'Roche',
        bp: 40,
        zp: 100
    },
    'Os Ombre': {
        category: 'Physique',
        type: 'Spectre',
        bp: 85,
        zp: 160
    },
    'Trépignement': {
        category: 'Physique',
        type: 'Sol',
        bp: 75,
        zp: 140
    },
    'Psycho-Croc': {
        category: 'Physique',
        type: 'Psy',
        makesContact: true,
        bp: 85,
        zp: 160,
        isBite: true
    },
    'Canon Floral': {
        category: 'Spécial',
        type: 'Fée',
        bp: 130,
        zp: 195
    },
    'Carapiège': {
        category: 'Spécial',
        type: 'Feu',
        bp: 150,
        zp: 200
    },
    'Supernova Originelle': {
        category: 'Spécial',
        type: 'Psy',
        bp: 185,
        isSignatureZ: true,
    },
    'Gare au Ronflex': {
        category: 'Physique',
        type: 'Normal',
        isSignatureZ: true,
        bp: 210
    },
    'Électro-Surf Survolté': {
        category: 'Spécial',
        type: 'Électrik',
        isSignatureZ: true,
        bp: 175
    },
    'Fauche- me des Sept Étoiles': {
        category: 'Physique',
        type: 'Spectre',
        isSignatureZ: true,
        bp: 195
    },
    'Symphonie des Ondines': {
        category: 'Spécial',
        type: 'Eau',isSignatureZ: true,

        bp: 195
    },
    'Dark Body Press': {
        category: 'Physique',
        type: 'Ténèbres',
        isSignatureZ: true,
        bp: 180
    },
    'Fureur des Plumes Spectrales': {
        category: 'Physique',
        type: 'Spectre',
        bp: 180
    },
    'Centrifugifle': {
        category: 'Physique',
        type: 'Ténèbres',
        bp: 60,
        isSpread: true,
        zp: 120
    },
    'Draco-Marteau': {
        category: 'Physique',
        type: 'Dragon',
        bp: 90,
        zp: 175
    },
    'Vibrécaille': {
        category: 'Spécial',
        type: 'Dragon',
        bp: 110,
        zp: 185
    },
    'Bec Canon': {
        category: 'Physique',
        type: 'Vol',
        bp: 100,
        zp: 180
    },
    'Botte Sucrette': {
        category: 'Physique',
        type: 'Plante',
        bp: 70,
        zp: 140
    },
    'Sanction Suprême': {
        category: 'Spécial',
        type: 'Dragon',
        bp: 100,
        isSpread: true,
        zp: 140
    },
    'Danse Éveil':{
        category: 'Spécial',
        type: 'Normal',
        bp: 90,
        zp: 175
    },
    'Estocorne':{
        category: 'Physique',
        type: 'Acier',
        bp: 70,
        zp: 140
    },
    'Coup Varia-Type': {
        category: 'Physique',
        type: 'Normal',
        bp: 90,
        zp: 185
    },
    'Flamme Ultime': {
        category: 'Spécial',
        type: 'Feu',
        bp: 130,
        zp: 195
    },
    'Arrogance': {
        category: 'Physique',
        type: 'Ténèbres',
        bp: 20,
        zp: 160
    },
    'Fouet de Feu': {
        category: 'Physique',
        type: 'Feu',
        bp: 80,
        zp: 160
    },
    'Furie-Bond': {
        category: 'Physique',
        type: 'Insecte',
        bp: 80,
        zp: 160
    },
    'Ancrage': {
        category: 'Physique',
        type: 'Acier',
        bp: 80,
        zp: 160
    },
    'Boule Pollen': {
        category: 'Spécial',
        type: 'Insecte',
        bp: 90,
        zp: 175
    },
    'Exécu-Son': {
        category: 'Physique',
        type: 'Ténèbres',
        bp: 80,
        zp: 160
    },
    'Lame Solaire': {
        category: 'Physique',
        type: 'Plante',
        bp: 125,
        zp: 190
    },
    'Cavalerie Lourde': {
        category: 'Physique',
        type: 'Sol',
        bp: 95,
        zp: 175
    },
    'Marteau de Glace': {
        category: 'Physique',
        type: 'Glace',
        bp: 100,
        zp: 180
    },
    'Escarmouche': {
        category: 'Physique',
        type: 'Insecte',
        bp: '90',
        zp: '175',
    },
    'Aria de l Écume': {
         category: 'Spécial',
         type: 'Eau',
         bp: 90,
         isSpread: true,
         zp: 175
    },
    'Dark Lariat': {
        category: 'Physique',
        type: 'Ténèbres',
        bp: 85,
        zp: 160,
        ignoresDefenseBoosts: true
    },
    'Tisse Ombre': {
        category: 'Physique',
        type: 'Spectre',
        bp: 80,
        zp: 160
    },

            'Caboche-Kaboum': {
                bp: 150,
                zp: 200,
                type: 'Feu',
            category: 'Spécial',
                isSpread: true
            },
            'Plasma Punch': {
                bp: 100,
                zp: 180,
                type: 'Électrik',
                category: 'Physique',
            },
            'Photo-Geyser': {
                bp: 100,
                zp: 180,
                type: 'Psy',
                category: 'Spécial',
            },
            'Apocalypsis Luminis': {
                bp: 200,
                type: 'Psy',
                category: 'Spécial',
           },
            'Hélio-Choc Dévastateur': {
                bp: 200,
                type: 'Acier',
                category: 'Physique',
           },
            'Rayons Séléno-Explosifs': {
                bp: 200,
                type: 'Spectre',
                category: 'Spécial',
           },
            'Patati-Patattrape': {
                bp: 190,
                type: 'Fée',
                category: 'Physique',
            },
            'Hurlement des Roches-Lames': {
                bp: 190,
                type: 'Roche',
                category: 'Physique',
            },
            'Dracophonie Flamboyante': {
                bp: 185,
                type: 'Dragon',
                category: 'Spécial',
                isSpread: true
            },

    'Pikachute Foudroyante': {
        category: 'Physique',
        type: 'Électrik',
        bp: 210
    },
    'Turbo-Charge Bulldozer': {
        type: 'Normal'
    },
    'Pyro-Explosion Cataclysmique': {
        type: 'Feu'
    },
    'Laser Cryogénique': {
        type: 'Glace'
    },
    'Super Tourbillon Abyssal': {
        type: 'Eau'
    },
    'Fulguro-Lance Gigavolt': {
        type: 'Électrik'
    },
    'Combo Hyper-Furie': {
        type: 'Combat'
    },
    'Pétalexplosion Éblouissante': {
        type: 'Plante'
    },
    'Psycho-Pulvérisation EX': {
        type: 'Psy'
    },
    'Cocon Fatal': {
        type: 'Insecte'
    },
    'Déluge Causti-Toxique': {
        type: 'Poison'
    },
    'Piqué Supersonique': {
        type: 'Vol'
    },
    'Chaos Draconique': {
        type: 'Dragon'
    },
    'Apocalypse Gigalithique': {
        type: 'Roche'
    },
    'Éruption Géo-Sismique': {
        type: 'Sol'
    },
    'Vrille Maximum': {
        type: 'Acier'
    },
    'Impact Choupinova': {
        type: 'Fée'
    },
    'Appel des Ombres Éternelles': {
        type: 'Spectre'
    },
    'Trou Noir des Ombres': {
        type: 'Ténèbres'
    },
     'Tranch Herbe':{
        zp: 100
    },
   'Vol':{
        zp: 175
    },
    'Poing de Feu':{
        zp: 140
    },
    'Poing-Glace':{
        zp: 140
    },
    'Poing-Éclair':{
        zp: 140
    },
    'Double-Pied':{
        zp: 100
    },
    'Pied Sauté':{
        zp: 180
    },
    'Coup d’Boule':{
        zp: 140
    },
    'Charge':{
        bp: 40,
        zp: 100
    },
    'Plaquage':{
        zp: 160
    },
    'Mania':{
        zp: 190
    },
    'Damoclès':{
        zp: 190
    },
    'Dard-Nuée':{
        zp: 140
    },
    'Morsure':{
        zp: 120
    },
    'Lance-Flammes':{
        zp: 175
    },
    'Hydrocanon':{
        zp: 185
    },
    'Surf':{
        zp: 175
    },
    'Laser Glace':{
        zp: 175
    },
    'Blizzard':{
        zp: 185
    },
    'Onde Boréal':{
        zp: 120
    },
    'Ultralaser':{
        zp: 200
    },
    'Bec Vrille':{
        zp: 160
    },
    'Balayage':{
        zp: 160
    },
    'Frappe Atlas':{
        zp: 100
    },
    'Lance-Soleil':{
        zp: 190
    },
    'Danse-Fleur':{
        zp: 190
    },
    'Tonnerre':{
        zp: 175
    },
    'Fatal-Foudre':{
        zp: 185
    },
    'Séisme':{
        zp: 180
    },
    'Psyko':{
        zp: 175
    },
    'Vive-Attaque':{
        zp: 100
    },
    'Ombre Nocturne':{
        zp: 100
    },
    'Destruction':{
        zp: 200
    },
    'Déflagration':{
        zp: 185
    },
    'Cascade':{
        zp: 160
    },
    'Météores':{
        zp: 120
    },
    'Pied Voltige':{
        zp: 195
    },
    'Piqué':{
        zp: 200
    },
    'Pince-Masse':{
        zp: 180
    },
    'Explosion':{
        zp: 200
    },
    'Osmerang':{
        zp: 100
    },
    'Éboulement':{
        zp: 140
    },
    'Triplattaque':{
        zp: 160
    },
    'Croc Fatal':{
        type: "Normal",
        category: "Physique",
        zp: 100
    },
    'Larcin':{
        zp: 120
    },
    'Roue de Feu':{
        zp: 120
    },
    'Fléau':{
        zp: 160
    },
    'Aéroblast':{
        zp: 180
    },
    'Contre':{
        zp: 160
    },
    'Mach Punch':{
        zp: 100
    },
    'Feinte':{
        zp: 120
    },
    'Bomb-Beurk':{
        zp: 175
    },
    'Vent Glace':{
        zp: 100
    },
    'Colère':{
        zp: 190
    },
    'Giga-Sangsue':{
        zp: 140
    },
    'Étincelle':{
        zp: 120
    },
    'Aile d Acier':{
        zp: 140
    },
    'Retour':{
        zp: 160
    },
    'Frustration':{
        zp: 160
    },
    'Feu Sacrée':{
        zp: 180
    },
    'Dynamopoing':{
        zp: 180
    },
    'Mégacorne':{
        zp: 190
    },
    'Poursuite':{
        zp: 100
    },
    'Tour Rapide':{
        zp: 100
    },
    'Queue de Fer':{
        zp: 180
    },
    // Puissance Cachée needs to have type set to normal for the Z-move lookup to work.
    // Conversion of regular move to correct type is done in getMoveEffectiveness in damage.js
    'Puissance Cachée Insecte': { zp: 120 },
    'Puissance Cachée Ténèbres': { zp: 120 },
    'Puissance Cachée Dragon': { zp: 120 },
    'Puissance Cachée Électrik': { zp: 120 },
    'Puissance Cachée Combat': { zp: 120 },
    'Puissance Cachée Feu': { zp: 120 },
    'Puissance Cachée Vol': { zp: 120 },
    'Puissance Cachée Spectre': { zp: 120 },
    'Puissance Cachée Plante': { zp: 120 },
    'Puissance Cachée Sol': { zp: 120 },
    'Puissance Cachée Glace': { zp: 120 },
    'Puissance Cachée Poison': { zp: 120 },
    'Puissance Cachée Psy': { zp: 120 },
    'Puissance Cachée Roche': { zp: 120 },
    'Puissance Cachée Acier': { zp: 120 },
    'Puissance Cachée Eau': { zp: 120 },
    'Coup-Croix':{
        zp: 180
    },
    'Mâchouille':{
        zp: 160
    },
    'Vitesse Extrême':{
        zp: 160
    },
    'Pouvoir Antique':{
        zp: 120
    },
    'Ball Ombre':{
        zp: 160
    },
    'Éclate-Roc':{
        zp: 100
    },
    'Bluff':{
        zp: 100
    },
    'Canicule':{
        zp: 175
    },
    'Façade':{
        zp: 140
    },
    'Mitra-Poing':{
        zp: 200
    },
    'Surpuissance':{
        zp: 190
    },
    'Vendetta':{
        zp: 120
    },
    'Casse-Brique':{
        zp: 140
    },
    'Sabotage':{
        zp: 120
    },
    'Effort':{
        type: 'Normal',
        category: 'Physique',
        zp: 160
    },
    'Éruption':{
        zp: 200
    },
    'Cogne':{
        zp: 100
    },
    'Lumi-Éclat':{
        zp: 140
    },
    'Pied Brûleur':{
        zp: 160
    },
    'Mégaphone':{
        zp: 175
    },
    'Crochet Venin':{
        zp: 100
    },
    'Poing Météor':{
        zp: 175
    },
    'Ball Météo':{
        zp: 160
    },
    'Tranch Air':{
        zp: 120
    },
    'Surchauffe':{
        zp: 195
    },
    'Tomberoche':{
        zp: 120
    },
    'Giclédo':{
        zp: 200
    },
    'Rayon Signal':{
        zp: 140
    },
    'Poing Ombre':{
        zp: 120
    },
    'Extrasenseur':{
        zp: 160
    },
    'Stratopercut':{
        zp: 160
    },
    'Glaciation':{
        zp: 180
    },
    'Ocroupi':{
        zp: 175
    },
    'Balle Graine':{
        zp: 140
    },
    'Aéropique':{
        zp: 120
    },
    'Stalagtite':{
        zp: 140
    },
    'Dracogriffe':{
        zp: 160
    },
    'Rebond':{
        zp: 160
    },
    'Électacle':{
        zp: 190
    },
    'Lame-Feuille':{
        zp: 175
    },
    'Boule Roc':{
        zp: 140
    },
    'Onde de Choc':{
        zp: 120
    },
    'Vibraqua':{
        zp: 120
    },
    'Carnareket':{
        zp: 200
    },
    'Psycho Boost':{
        zp: 200
    },
    'Réveil Forcé':{
        zp: 140
    },
    'Marto-Poing':{
        zp: 180
    },
    'Gyroballe':{
        zp: 160
    },
    'Don Naturel':{
        zp: 160
    },
    'Ruse':{
        zp: 100
    },
    'Picore':{
        zp: 120
    },
    'Demi-Tour':{
        zp: 140
    },
    'Close Combat':{
        zp: 190
    },
    'Représailles':{
        zp: 100
    },
    'Assurance':{
        zp: 120
    },
    'Dégommage':{
        zp: 100
    },
    'Punition':{
        zp: 160
    },
    'Coup Bas':{
        bp: 70,
        zp: 140
    },
    'Boutefeu':{
        zp: 190
    },
    'Forte Paume':{
        zp: 120
    },
    'Aurasphère':{
        zp: 160
    },
    'Direct Toxik':{
        zp: 160
    },
    'Vibrobscur':{
        zp: 160
    },
    'Tranche-Nuit':{
        zp: 140
    },
    'Hydroqueue':{
        zp: 175
    },
    'Canon Graine':{
        zp: 160
    },
    'Lame d Air':{
        zp: 140
    },
    'Plaie-Croix':{
        zp: 160
    },
    'Bourdon':{
        zp: 175
    },
    'Dracochoc':{
        zp: 160
    },
    'Dracocharge':{
        zp: 180
    },
    'Rayon Gemme':{
        zp: 160
    },
    'Vampipoing':{
        zp: 140
    },
    'Onde Vide':{
        zp: 100
    },
    'Exploforce':{
        zp: 190
    },
    'Éco-Sphère':{
        zp: 175
    },
    'Rapace':{
        zp: 190
    },
    'Telluriforce':{
        zp: 175
    },
    'Giga Impact':{
        zp: 200
    },
    'Pisto-Poing':{
        zp: 100
    },
    'Avalanche':{
        zp: 120
    },
    'Éclats Glace':{
        zp: 100
    },
    'Griffe Ombre':{
        zp: 140
    },
    'Crocs Éclair':{
        zp: 120
    },
    'Crocs Givre':{
        zp: 120
    },
    'Crocs Feu':{
        zp: 120
    },
    'Ombre Portée':{
        zp: 100
    },
    'Boue-Bombe':{
        zp: 120
    },
    'Coupe Psycho':{
        zp: 140
    },
    'Psykoud Boul':{
        zp: 160
    },
    'Luminocanon':{
        zp: 160
    },
    'Escalade':{
        zp: 175
    },
    'Draco Méteore':{
        zp: 195
    },
    'Coup d’Jus':{
        zp: 160
    },
    'Ébullilave':{
        zp: 160
    },
    'Tempête Verte':{
        zp: 195
    },
    'Mégafouet':{
        zp: 190
    },
    'Poison Croix':{
        zp: 140
    },
    'Détricanon':{
        zp: 190
    },
    'Tête de Fer':{
        zp: 160
    },
    'Lame de Roc':{
        zp: 180
    },
    'Noeud Herbe':{
        zp: 160
    },
    'Babil':{
        zp: 120
    },
    'Jugement':{
        zp: 180
    },
    'Piqûre':{
        zp: 120
    },
    'Rayon Chargé':{
        zp: 100
    },
    'Martobois':{
        zp: 190
    },
    'Aqua-Jet':{
        zp: 100
    },
    'Appel Attak':{
        zp: 175
    },
    'Fracass Tête':{
        zp: 200
    },
    'Coup Double':{
        zp: 140
    },
    'Spatio-Rift':{
        zp: 180
    },
    'Vortex Magma':{
        zp: 180
    },
    'Fulmigraine':{
        zp: 190
    },
    'Revenant':{
        zp: 190
    },
    'Choc Psy':{
        zp: 160
    },
    'Anti-Air':{
        zp: 100
    },
    'Cradovague':{
        zp: 175
    },
    'Tacle Lourd':{
        zp: 160
    },
    'Synchropeine':{
        zp: 190
    },
    'Boule Élek':{
        zp: 160
    },
    'Nitrocharge':{
        zp: 100
    },
    'Balayette':{
        zp: 120
    },
    'Bombe Acide':{
        zp: 100
    },
    'Tricherie':{
        zp: 175
    },
    'Bain de Smog':{
        zp: 100
    },
    'Force Ajoutée':{
        zp: 160
    },
    'Ébullition':{
        zp: 160
    },
    'Châtiment':{
        zp: 160
    },
    'Chute Libre':{
        zp: 120
    },
    'Projection':{
        zp: 120
    },
    'Calcination':{
        zp: 120
    },
    'Acrobatie':{
        zp: 100
    },
    'Vengeance':{
        zp: 140
    },
    'Feu d Enfer':{
        zp: 180
    },
    'Aire d Eau':{
        zp: 160
    },
    'Aire de Feu':{
        zp: 160
    },
    'Aire d Herbe':{
        zp: 160
    },
    'Change Éclair':{
        zp: 140
    },
    'Piétisol':{
        zp: 120
    },
    'Souffle Glacé':{
        zp: 120
    },
    'Draco-Queue':{
        zp: 120
    },
    'Éclair Fou':{
        zp: 175
    },
    'Tunnelier':{
        zp: 160
    },
    'Double Baffe':{
        zp: 100
    },
    'Encornebois':{
        zp: 140
    },
    'Lame Sainte':{
        zp: 175
    },
    'Coquilame':{
        zp: 140
    },
    'Explonuit':{
        zp: 160
    },
    'Frappe Psy':{
        zp: 180
    },
    'Plumo-Queue':{
        zp: 140
    },
    'Vent Violent':{
        zp: 185
    },
    'Peignée':{
        zp: 190
    },
    'Lancécrou':{
        zp: 180
    },
    'Incendie':{
        zp: 180
    },
    'Chant Antique':{
        zp: 140
    },
    'Lame Ointe':{
        zp: 160
    },
    'Ère Glaciaire':{
        zp: 120
    },
    'Flamme Bleue':{
        zp: 195
    },
    'Danse du Feu':{
        zp: 160
    },
    'Éclair Gelé':{
        zp: 200
    },
    'Aboiement':{
        zp: 100
    },
    'Chut Glace':{
        zp: 160
    },
    'Coup Victoire':{
        zp: 220
    },
    'Flamme Croix':{
        zp: 180
    },
    'Éclair Croix':{
        zp: 180
    },
    'Flying Press':{
        zp: 170
    },
    'Hantise':{
        zp: 175
    },
    'Lyophilisation':{
        zp: 140
    },
    'Vampibaiser':{
        zp: 100
    },
    'Câlinerie':{
        zp: 175
    },
    'Pouvoir Lunaire':{
        zp: 175
    },
    'Bang Sonique':{
        zp: 200
    },
    'Orage Adamantin':{
        zp: 180
    },
    'Éclat Magique':{
        zp: 160
    },
    'Frotte-Frimousse':{
        category: 'Physique',
        type: 'Électrik',
        bp: 20,
        zp: 100
    },
    'Poing Boost':{
        zp: 100
    },
    'Mort-Ailes':{
        zp: 160
    },
    'Force Chtonienne':{
        zp: 185
    },
    'Lumière du Néant':{
        zp: 200
    },
    'Onde Originelle':{
        zp: 185
    },
    'Lame Pangéenne':{
        zp: 190
    },
    'Draco Ascension':{
        zp: 190
    }
});
// Loki pue :p <3

