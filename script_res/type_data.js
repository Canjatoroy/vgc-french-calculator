var TYPE_CHART_RBY = {
    Normal: {
        category: 'Physique',
        Normal: 1,
        Plante: 1,
        Feu: 1,
        Eau: 1,
        Électrik: 1,
        Glace: 1,
        Vol: 1,
        Insecte: 1,
        Poison: 1,
        Sol: 1,
        Roche: 0.5,
        Combat: 1,
        Psy: 1,
        Spectre: 0,
        Dragon: 1
    },
    Plante: {
        category: 'Spécial',
        Normal: 1,
        Plante: 0.5,
        Feu: 0.5,
        Eau: 2,
        Électrik: 1,
        Glace: 1,
        Vol: 0.5,
        Insecte: 0.5,
        Poison: 0.5,
        Sol: 2,
        Roche: 2,
        Combat: 1,
        Psy: 1,
        Spectre: 1,
        Dragon: 0.5
    },
    Feu: {
        category: 'Spécial',
        Normal: 1,
        Plante: 2,
        Feu: 0.5,
        Eau: 0.5,
        Électrik: 1,
        Glace: 2,
        Vol: 1,
        Insecte: 2,
        Poison: 1,
        Sol: 1,
        Roche: 0.5,
        Combat: 1,
        Psy: 1,
        Spectre: 1,
        Dragon: 0.5
    },
    Eau: {
        category: 'Spécial',
        Normal: 1,
        Plante: 0.5,
        Feu: 2,
        Eau: 0.5,
        Électrik: 1,
        Glace: 1,
        Vol: 1,
        Insecte: 1,
        Poison: 1,
        Sol: 2,
        Roche: 2,
        Combat: 1,
        Psy: 1,
        Spectre: 1,
        Dragon: 0.5
    },
    Électrik: {
        category: 'Spécial',
        Normal: 1,
        Plante: 0.5,
        Feu: 1,
        Eau: 2,
        Électrik: 0.5,
        Glace: 1,
        Vol: 2,
        Insecte: 1,
        Poison: 1,
        Sol: 0,
        Roche: 1,
        Combat: 1,
        Psy: 1,
        Spectre: 1,
        Dragon: 0.5
    },
    Glace: {
        category: 'Spécial',
        Normal: 1,
        Plante: 2,
        Feu: 1,
        Eau: 0.5,
        Électrik: 1,
        Glace: 0.5,
        Vol: 2,
        Insecte: 1,
        Poison: 1,
        Sol: 2,
        Roche: 1,
        Combat: 1,
        Psy: 1,
        Spectre: 1,
        Dragon: 2
    },
    Vol: {
        category: 'Physique',
        Normal: 1,
        Plante: 2,
        Feu: 1,
        Eau: 1,
        Électrik: 0.5,
        Glace: 1,
        Vol: 1,
        Insecte: 2,
        Poison: 1,
        Sol: 1,
        Roche: 0.5,
        Combat: 2,
        Psy: 1,
        Spectre: 1,
        Dragon: 1
    },
    Insecte: {
        category: 'Physique',
        Normal: 1,
        Plante: 2,
        Feu: 0.5,
        Eau: 1,
        Électrik: 1,
        Glace: 1,
        Vol: 0.5,
        Insecte: 1,
        Poison: 2,
        Sol: 1,
        Roche: 1,
        Combat: 0.5,
        Psy: 2,
        Spectre: 0.5,
        Dragon: 1
    },
    Poison: {
        category: 'Physique',
        Normal: 1,
        Plante: 2,
        Feu: 1,
        Eau: 1,
        Électrik: 1,
        Glace: 1,
        Vol: 1,
        Insecte: 2,
        Poison: 0.5,
        Sol: 0.5,
        Roche: 0.5,
        Combat: 1,
        Psy: 1,
        Spectre: 0.5,
        Dragon: 1
    },
    Sol: {
        category: 'Physique',
        Normal: 1,
        Plante: 0.5,
        Feu: 2,
        Eau: 1,
        Électrik: 2,
        Glace: 1,
        Vol: 0,
        Insecte: 0.5,
        Poison: 2,
        Sol: 1,
        Roche: 2,
        Combat: 1,
        Psy: 1,
        Spectre: 1,
        Dragon: 1
    },
    Roche: {
        category: 'Physique',
        Normal: 1,
        Plante: 1,
        Feu: 2,
        Eau: 1,
        Électrik: 1,
        Glace: 2,
        Vol: 2,
        Insecte: 2,
        Poison: 1,
        Sol: 0.5,
        Roche: 1,
        Combat: 0.5,
        Psy: 1,
        Spectre: 1,
        Dragon: 1
    },
    Combat: {
        category: 'Physique',
        Normal: 2,
        Plante: 1,
        Feu: 1,
        Eau: 1,
        Électrik: 1,
        Glace: 2,
        Vol: 0.5,
        Insecte: 0.5,
        Poison: 0.5,
        Sol: 1,
        Roche: 2,
        Combat: 1,
        Psy: 0.5,
        Spectre: 0,
        Dragon: 1
    },
    Psy: {
        category: 'Spécial',
        Normal: 1,
        Plante: 1,
        Feu: 1,
        Eau: 1,
        Électrik: 1,
        Glace: 1,
        Vol: 1,
        Insecte: 1,
        Poison: 2,
        Sol: 1,
        Roche: 1,
        Combat: 2,
        Psy: 0.5,
        Spectre: 1,
        Dragon: 1
    },
    Spectre: {
        category: 'Physique',
        Normal: 0,
        Plante: 1,
        Feu: 1,
        Eau: 1,
        Électrik: 1,
        Glace: 1,
        Vol: 1,
        Insecte: 1,
        Poison: 1,
        Sol: 1,
        Roche: 1,
        Combat: 1,
        Psy: 0,
        Spectre: 2,
        Dragon: 1
    },
    Dragon: {
        category: 'Spécial',
        Normal: 1,
        Plante: 1,
        Feu: 1,
        Eau: 1,
        Électrik: 1,
        Glace: 1,
        Vol: 1,
        Insecte: 1,
        Poison: 1,
        Sol: 1,
        Roche: 1,
        Combat: 1,
        Psy: 1,
        Spectre: 1,
        Dragon: 2
    }
};

var TYPE_CHART_GSC = $.extend(true, {}, TYPE_CHART_RBY, {
    Normal: {
        Ténèbres: 1,
        Acier: 0.5
    },
    Plante: {
        Ténèbres: 1,
        Acier: 0.5
    },
    Feu: {
        Ténèbres: 1,
        Acier: 2
    },
    Eau: {
        Ténèbres: 1,
        Acier: 1
    },
    Électrik: {
        Ténèbres: 1,
        Acier: 1
    },
    Glace: {
        Feu: 0.5,
        Ténèbres: 1,
        Acier: 0.5
    },
    Vol: {
        Ténèbres: 1,
        Acier: 0.5
    },
    Insecte: {
        Poison: 0.5,
        Ténèbres: 2,
        Acier: 0.5
    },
    Poison: {
        Insecte: 1,
        Ténèbres: 1,
        Acier: 0
    },
    Sol: {
        Ténèbres: 1,
        Acier: 2
    },
    Roche: {
        Ténèbres: 1,
        Acier: 0.5
    },
    Combat: {
        Ténèbres: 2,
        Acier: 2
    },
    Psy: {
        Ténèbres: 0,
        Acier: 0.5
    },
    Spectre: {
        Psy: 2,
        Ténèbres: 0.5,
        Acier: 0.5
    },
    Dragon: {
        Ténèbres: 1,
        Acier: 0.5
    },
    Ténèbres: {
        category: 'Spécial',
        Normal: 1,
        Plante: 1,
        Feu: 1,
        Eau: 1,
        Électrik: 1,
        Glace: 1,
        Vol: 1,
        Insecte: 1,
        Poison: 1,
        Sol: 1,
        Roche: 1,
        Combat: 0.5,
        Psy: 2,
        Spectre: 2,
        Dragon: 1,
        Ténèbres: 0.5,
        Acier: 0.5
    },
    Acier: {
        category: 'Physique',
        Normal: 1,
        Plante: 1,
        Feu: 0.5,
        Eau: 0.5,
        Électrik: 0.5,
        Glace: 2,
        Vol: 1,
        Insecte: 1,
        Poison: 1,
        Sol: 1,
        Roche: 2,
        Combat: 1,
        Psy: 1,
        Spectre: 1,
        Dragon: 1,
        Ténèbres: 1,
        Acier: 0.5
    }
});

var TYPE_CHART_XY = $.extend(true, {}, TYPE_CHART_GSC, {
    Normal: {
        Fée: 1
    },
    Plante: {
        Fée: 1
    },
    Feu: {
        Fée: 1
    },
    Eau: {
        Fée: 1
    },
    Électrik: {
        Fée: 1
    },
    Glace: {
        Fée: 1
    },
    Vol: {
        Fée: 1
    },
    Insecte: {
        Fée: 0.5
    },
    Poison: {
        Fée: 2
    },
    Sol: {
        Fée: 1
    },
    Roche: {
        Fée: 1
    },
    Combat: {
        Fée: 0.5
    },
    Psy: {
        Fée: 1
    },
    Spectre: {
        Acier: 1,
        Fée: 1
    },
    Dragon: {
        Fée: 0
    },
    Ténèbres: {
        Acier: 1,
        FFée: 0.5
    },
    Acier: {
        Fée: 2
    },
    Fée: {
        Normal: 1,
        Plante: 1,
        Feu: 0.5,
        Eau: 1,
        Électrik: 1,
        Glace: 1,
        Vol: 1,
        Insecte: 1,
        Poison: 0.5,
        Sol: 1,
        Roche: 1,
        Combat: 2,
        Psy: 1,
        Spectre: 1,
        Dragon: 2,
        Ténèbres: 2,
        Acier: 0.5,
        Fée: 1
    }
});