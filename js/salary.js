/**
 * Created by levan on 11/01/2016.
 */
var margin = {top: 20, right: 20, bottom: 0, left: 180},
    width = 960 - margin.left - margin.right,
    height = 1100 - margin.top - margin.bottom;
positionGraph = $("div.graph").position();

var maxTeamSalary = 0;
//Adhv de data elk team ophalen
data.forEach(function(team) {
    team.totalSalary = 0;
    //Sorteren volgens salaris
    team.players.sort(function(a, b) { return a.salary - b.salary; });

    team.players.forEach(function(player) {
        player.x = team.totalSalary;
        player.team = team.name;
        //Totale team salaris aanpassen: toevoegen van individueel salaris elke speler
        team.totalSalary += player.salary;
    });
});

//Veld waarin grafiek moet werken definiëren + kleurenpallet
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.ordinal().rangeRoundBands([0, height], .1);
var color = d3.scale.ordinal().range(["#531ff4", "#c483b0", "#e0b189", "#e8c07a", "#f5e056", "#ffff00"]);

draw();
//Grafiek opmaken
function draw() {
    x.domain([0, 105000000]);
    y.domain(data.map(function(team) { return team.name; }));

    var xAxis = d3.svg.axis().scale(x)
        .orient("top")
        .tickValues([0, 20000000, 40000000, 60000000, 80000000, 100000000])
        .tickFormat(d3.format("s"));

    var yAxis = d3.svg.axis().scale(y)
        .orient("left");

    var svg = d3.select(".graph")
        .append("svg")
        .attr("id", "#chart")
        .attr("viewBox", "0 0 960 1100")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //Tekst info per speler
    var tip = svg.append("g")
        .attr("class", "tip")
        .style("display", "none");

    tipText = tip.append("text");

    svg.append("g")
        .attr("class", "grid")
        .style("fill", "white")
        .attr("transform", "translate(0," + margin.top + ")")
        .call(xAxis.tickSize(-height))
        .selectAll(".tick")
        .data(x.ticks(), function(d) { return d; });

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(0," + margin.top + ")")
        .style("fill", "white")
        .style("margin-left", "10px")
        .call(yAxis);

    var team = svg.selectAll(".team")
        .data(data)
        .enter().append("g")
        .style("fill", "white")
        .attr("class", "g")
        .attr("transform", function(team) { return "translate(0," + (margin.top + y(team.name) + y.rangeBand() / 4) + ")"; });

    //Per team --> voor elke speler rect tekenen en kleuren adhv salaris
    team.selectAll("rect")
        .data(function(team) { return team.players; })
        .enter()
        .append("rect")
        .attr("fill", function(player) {
            if (player.salary < 1000000) {
                return color(1);
            }
            else if (player.salary < 5000000) {
                return color(2);
            }
            else if (player.salary < 10000000) {
                return color(3);
            }
            else if (player.salary < 15000000) {
                return color(4);
            }
            else if (player.salary < 20000000) {
                return color(5);
            }
            else {
                return color(6);
            }
        })
        .attr("y", function(player) { return 0; })
        .attr("height", y.rangeBand() / 2)
        .attr("x", function(player) { return x(player.x); })
        .attr("width", function(player) { return x(player.salary); });

    //Bij hoveren over rect de spelersnaam tonen (tip)
    team.selectAll("rect")
        .on("mouseover", function(player) {
            tip.style("display", null);

            var format = d3.format(",.");
            tipText.text(player.name + ", $" + format(player.salary));
            var tipTextWidth = tipText.node().getBBox().width;

            var xPos = x(player.x) + (x(player.salary) / 2) - (tipTextWidth / 2);
            var yPos = y(player.team) + margin.top + 3;

            tip.attr("transform", "translate(" + xPos + "," + yPos + ")");
            d3.select(this).attr("stroke", "#666").attr("stroke-width", 1);
        })
        .on("mouseout", function(player) {
            tip.style("display", "none");
            tip.style("fill", "white");
            d3.select(this).attr("stroke", null);
        });

    var legend = svg.selectAll(".legend")
        .data(color.domain().slice())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(-50," + (200 + i * 20) + ")"; });

    //rects v/d legende volgens kleurenpallet
    legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    //tekst naast de rects in de legende
    legend.append("text")
        .style("fill", "white")
        .attr("x", width - 20)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) {
            switch (d) {
                case 1: return "under 1 million";
                case 2: return "1 to 5 millions";
                case 3: return "5 to 10 millions";
                case 4: return "10 to 15 millions";
                case 5: return "15 to 20 millions";
                default: return "over 20 millions";
            }
        });
}

//responsive grafiek
var aspect = width / height,
    chart = d3.select('#chart');
d3.select(window)
    .on("resize", function() {
        var targetWidth = chart.node().getBoundingClientRect().width;
        chart.attr("width", targetWidth);
        chart.attr("height", targetWidth / aspect);
    });
