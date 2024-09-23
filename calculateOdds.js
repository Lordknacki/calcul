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
        "Arouca": 54
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
