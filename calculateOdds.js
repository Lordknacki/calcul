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
        "Brest": 54,
        "Le Havre": 28,
        "Lens": 62,
        "Lille": 50,
        "Lyon": 72,
        "Marseille": 56,
        "Monaco": 65,
        "Montpellier": 48,
        "Nantes": 46,
        "Nice": 49,
        "Paris Saint-Germain": 90,
        "Reims": 32,
        "Rennes": 58,
        "Strasbourg": 36,
        "Toulouse": 37,
        "Auxerre": 72,
        "Angers": 56,
        "Saint-Etienne": 48,
        "Atalanta": 63,
        "Bologna": 44,
        "Cagliari": 36,
        "Empoli": 48,
        "Fiorentina": 59,
        "Genoa": 31,
        "Inter Milan": 81,
        "Juventus": 70,
        "Lazio": 68,
        "Lecce": 30,
        "AC Milan": 77,
        "Monza": 42,
        "Napoli": 89,
        "AS Roma": 64,
        "Torino": 45,
        "Udinese": 39,
        "Verona": 38,
        "Como": 58,
        "Parma": 66,
        "Venezia": 50,
        "Alaves": 0,
        "Athletic Bilbao": 0,
        "Atletico Madrid": 0,
        "Barcelona": 0,
        "Celta Vigo": 0,
        "Espanyol": 0,
        "Getafe": 0,
        "Girona": 0,
        "Las Palmas": 0,
        "Leganes": 0,
        "Mallorca": 0,
        "Osasuna": 0,
        "Rayo Vallecano": 0,
        "Real Betis": 0,
        "Real Madrid": 0,
        "Real Sociedad": 0,
        "Sevilla": 0,
        "Valencia": 0,
        "Valladolid": 0,
        "Villarreal": 0,
        "Arsenal": 0,
        "Aston Villa": 0,
        "Bournemouth": 0,
        "Brentford": 0,
        "Brighton": 0,
        "Burnley": 0,
        "Chelsea": 0,
        "Crystal Palace": 0,
        "Everton": 0,
        "Fulham": 0,
        "Leeds United": 0,
        "Leicester City": 0,
        "Liverpool": 0,
        "Manchester City": 0,
        "Manchester United": 0,
        "Newcastle United": 0,
        "Nottingham Forest": 0,
        "Southampton": 0,
        "Tottenham Hotspur": 0,
        "West Ham United": 0,
        "Wolverhampton Wanderers": 0,
        "Augsburg": 0,
        "Union Berlin": 0,
        "Bochum": 0,
        "Werder Bremen": 0,
        "Darmstadt 98": 0,
        "Borussia Dortmund": 0,
        "Eintracht Frankfurt": 0,
        "Freiburg": 0,
        "Heidenheim": 0,
        "Hoffenheim": 0,
        "Köln": 0,
        "RB Leipzig": 0,
        "Bayer Leverkusen": 0,
        "Mainz 05": 0,
        "Borussia Mönchengladbach": 0,
        "Bayern Munich": 0,
        "Stuttgart": 0,
        "Wolfsburg": 0,
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
