document.addEventListener('DOMContentLoaded', function() {
    const teamGoals = {
        "FC Porto": 63,
        "SL Benfica": 77,
        "SC Braga": 71,
        "Sporting CP": 96,
        "Rio Ave FC": 38,
        "FC Famalicão": 37,
        "Vitória SC": 52,
        "Moreirense FC": 36,
        "Santa Clara": 48,
        "Gil Vicente FC": 42,
        "Estoril Praia": 49,
        "Portimonense": 39,
        "Boavista FC": 39,
        "Nacional": 66,
        "Farense": 46,
        "Arouca": 54,
        "AVS": 50,
        "PSG": 81,
        "Monaco": 68,
        "Brest": 53,
        "Lille": 52,
        "Noce": 40,        
        "Marseille": 52,
        "Rennes": 53,
        "Lyon": 49,
        "Lens": 45,
        "Reims": 42,
        "Toulouse": 42,
        "Montpellier": 43,
        "Strasbourg": 38,
        "Nantes": 30,
        "Le Havre": 34,
        "Saint-Etienne": 48,
        "Angers": 56,
        "Auxerre": 72,
        "Alaves": 36,
        "Athletic Bilbao": 47,
        "Atletico Madrid": 70,
        "Barcelona": 79,
        "Celta Vigo": 46,
        "Espanyol": 50,
        "Getafe": 42,
        "Girona": 85,
        "Las Palmas": 33,
        "Leganes": 40,
        "Mallorca": 33,
        "Osasuna": 45,
        "Rayo Vallecano": 29,
        "Real Betis": 48,
        "Real Madrid": 87,
        "Real Sociedad": 51,
        "Sevilla": 48,
        "Valencia": 40,
        "Valladolid": 36,
        "Villarreal": 65,
        "Manchester City": 96,
        "Arsenal": 91,
        "Liverpool": 86,
        "Aston Villa": 76,
        "Tottenham": 74,
        "Chelsea": 77,
        "Newcastle": 85,
        "Manchester United": 57,
        "West Ham": 60,
        "Crystal Palace": 57,
        "Brighton": 55,
        "Bournemouth": 54,
        "Fulham": 55,
        "Wolverhampton": 50,
        "Everton": 40,
        "Brentford": 56,
        "Nottingham": 49,
        "Luton": 52,
        "Burnley": 41,
        "Sheffield United": 35,
        "Leverkusen": 89,
        "Stuttgart": 78,
        "Bayern Munich": 94,
        "Leipzig": 77,
        "Dortmund": 68,
        "Francfort": 51,
        "Hoffenheim": 66,
        "Heidenheim": 50,
        "Brême": 48,
        "Fribourg": 45,
        "Augsbourg": 50,
        "Wolfsbourg": 41,
        "Mayence": 39,
        "M'gladbach": 56,
        "Union Berlin": 33,
        "Bochum": 42,
        "Cologne": 28,
        "Darmstadt": 30,
        "Atalanta": 63,
        "Bologna": 44,
        "Cagliari": 36,
        "Empoli": 48,
        "Fiorentina": 59,
        "Frosinone": 33,
        "Genoa": 31,
        "Inter Milan": 81,
        "Juventus": 70,
        "Lazio": 68,
        "Lecce": 30,
        "AC Milan": 77,
        "Monza": 42,
        "Napoli": 89,
        "AS Roma": 64,
        "Salernitana": 35,
        "Sassuolo": 52,
        "Torino": 45,
        "Udinese": 39,
        "Verona": 38,

    };    
    function getGoalsPerMatch(goals) {
        return (goals / 34).toFixed(2);
    }

    function factorial(n) {
        return n ? n * factorial(n - 1) : 1;
    }

    function poissonProbability(lambda, k) {
        return Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k);
    }

    window.calculateOdds = function() {
        var homeTeam = document.getElementById('homeTeam').value;
        var awayTeam = document.getElementById('awayTeam').value;
        var lambda = parseFloat(getGoalsPerMatch(teamGoals[homeTeam]));
        var mu = parseFloat(getGoalsPerMatch(teamGoals[awayTeam]));

        var probHome = poissonProbability(lambda, 4);
        var probAway = poissonProbability(mu, 2);
        var prob42 = probHome * probAway;
        var odds42 = prob42 > 0 ? (1 / prob42).toFixed(2) : 'Infini';

        document.getElementById('result').innerHTML = 'Probabilité du score 4-2 pour ' + homeTeam + ' contre ' + awayTeam + ' : ' + (prob42 * 100).toFixed(2) + '%' +
            '<br>Cotes pour un score de 4-2 : ' + odds42;
    }
});
