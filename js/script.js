/**
 * Created by levan on 22/12/2015.
 */
//Width, height geheel
var w = 1024;
var h = 768;

//image width & height
var image_w = 200;
var image_h = 200;

//geselecteerd deel
var active = d3.select(null);

//Map projection: welk soort map? -> usa map
var projection = d3.geo.albersUsa()
    .translate([w/3, h/3.5])
    .scale([930]);

var path = d3.geo.path()
    .projection(projection);
var Opacity = d3.scale.linear()
    .range([0.6, 0.9]);
var Scale = d3.scale.linear()
    .range([4, 18]);

//Maak SVG object
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

//Groep om staten in te bewaren
var g = svg.append("g")
    .attr("class","map");

//1: Map aanmaken met alle staten
d3.csv("data/US-states.csv", function(data) {
    //GEOjson data inladen
    d3.json("data/US-geo.json", function(json) {
        //EastofWest + Geojson samen mappen
        for (var i = 0; i < data.length; i++) {
            var dataState = data[i].state;				//Neem de state naam
            var dataValue = parseFloat(data[i].value);	//Neem de data value(ploeg in deze staat of null) + convert
            var dataEASTorWEST = data[i].EASTorWEST; // in welke conference ligt deze staat
            //Zoek de overeenkomstige staat in US-geo.json
            for (var j = 0; j < json.features.length; j++) {
                var jsonState = json.features[j].properties.name;
                if (dataState == jsonState) {
                    //Data value in json kopiëren
                    json.features[j].properties.EASTorWEST = dataEASTorWEST;
                    //Stop
                    break;
                }
            }
        }

        //1 path per GEOjson object maken
        g.selectAll("path")
            .data(json.features).enter()
            .append("path")
            .attr("stroke","white")
            .attr("stroke-width",1.5)
            .attr("d", path)
            .attr("class", function(d) {
                return d.properties.postal;})
            .style("fill", function(d) {
                //Staat inkleuren volgens conference: West:ROOD, East:BLAUW
                var EASTorWEST = d.properties.EASTorWEST;

                if (EASTorWEST) {
                    //If value exists…
                    if (EASTorWEST == "East") {
                        return "#003da6";
                    } else {
                        return "#ed174b";
                    }
                } else {
                    //If value is undefined…
                    return "#CCCCCC";
                }
            });

        //2: NBA teams inladen
        d3.csv("data/NBA-teams.csv", function(data) {
            //Grootte cirkel volgens ranking[4, 18]
            Scale.domain([0, d3.max(data, function(d) { return d.winrate; })]);
            //Opacity volgens ranking[0.3, 0.9]
            Opacity.domain([0, d3.max(data, function(d) { return d.winrate; })]);
            //Fontsize volgens ranking[10, 20]
            var FontSize = d3.scale.linear()
                .domain([15, 1])
                .range([10, 18]);

            //Nodes groep maken
            var nodes = g.selectAll("nodes")
                .data(data)
                .enter()
                .append("g")
                .attr("class", "team")
                .attr("transform", function(d) {
                    return "translate(" + projection([d.lon, d.lat])[0] + "," + projection([d.lon, d.lat])[1] + ")";})
                .on("mouseover", nodeMouseover)
                .on("mouseout", nodeMouseout);


            //één cirkel per team
            nodes.append("circle")
                .attr("class", function(d) { return d.abb })
                .attr("r", function(d){
                    return Scale(d.winrate);})
                .style("fill", function(d){
                    if (d.EASTorWEST == "East") {
                        return "#1bba9a";
                    } else {
                        return "white";
                    }
                })
                .style("opacity", function(d){
                    return Opacity(d.winrate);})
                .style("cursor", "pointer")
                .on("click", teamClick);

            //Team afkorting tekst
            nodes.append("text")
                .attr("class", function(d) {
                    return "text " + d.abb;})
                .attr("dx", function(d){
                    return Scale(d.winrate);})
                .attr("dy", ".3em")
                .attr("font-size", function(d) {
                    return FontSize(d.rank) + "px";})
                .attr("color", "white")
                .style("fill", "white")
                .style("font-weight", "bold")
                .style("cursor", "default")
                .text(function(d) {
                    return d.abb;});
        });
    });
});
/*3: PIE CHARTS -> PLAYER STATISTICS*/
//TeamData voor chart
var teamData = [];
//Teamlijst
var teamList = [];

//Kijk of het in de array zit
function contains(array, obj) {
    var i = array.length;
    while (i--) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}

//neem index van in de array
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

//Delete element
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

//CLICK op team
function teamClick(d) {
    selectedTeamName = d.teamname;
    //als geklikt wordt op zelfde team dat al reeds geselecteerd is
    if (contains(teamList, selectedTeamName)) {
        //cirkelkleur terugzetten
        d3.select(this)
            .style("fill", function(d){
                if (d.EASTorWEST == "East") {
                    return "#1bba9a";
                } else {
                    return "white";
                }
            });

        //Stats van geselecteerde team verwijderen
        for (var i = 0; i < teamData.length; i++) {
            if (selectedTeamName == teamData[i].className) {
                teamData.remove(teamData[i]);
                break;
            }
        }
        //Remove in teamList (anders kan je geen nieuw team selecteren)
        teamList.remove(selectedTeamName);
        //Charts verwijderen indien geen enkel team geselecteerd is
        if (teamList.length == 0) {
            d3.selectAll(".pie-chart").remove();
        }
        //Chart tekenen indien 1 gekozen
        if (teamList.length == 1) {
            createPieChart();
            d3.selectAll(".teamRadar").remove();
        }
    } else {
        //Gebruiker waarschuwen wanneer meer dan 1 team geselecteerd is
        if  (teamList.length > 0) {
            window.alert("Please uncheck chosen team before choosing a new one :-)");
        }
        teamList.push(selectedTeamName);
        active = d3.select(this).style("fill", "purple");
        if (teamList.length == 1) {
            createPieChart();
        }
        if (teamList.length >= 2) {
            //Meer dan 1 team geselecteerd --> pie chart verwijderen
            d3.selectAll(".pie-chart").remove();
        }
    }

    //maak Piechart voor spelers
    function createPieChart() {
        d3.selectAll(".pie-chart").remove();

        var width = 150;
        var height = 500;
        var radius = Math.min(width, height) / 2;
        var innerRadius = 0.3 * radius;

        //Players' data in een team
        teamPlayer = [];
        //teamPlayerName om te gaan displayen
        teamPlayerName = [];

        //Data per speler inladen
        d3.csv("data/players.csv", function(error, playerData) {
            playerData.forEach(function(d) {
                //change into number
                d.PTS = +d.PTS;
                d.AST = +d.AST;
                d.REB = +d.REB;
                d.BLK = +d.BLK;
                d.STL = +d.STL;
                d.TOV = +d.TOV;

                //Selected team data saven
                if (d.team == teamList[teamList.length - 1]) {
                    //stats in de array
                    teamPlayer.push({
                        player: d.player,
                        team: d.team,
                        PTS: d.PTS,
                        PIE: d.PIE,
                        REB: d.REB,
                        AST: d.AST,
                        STL: d.STL,
                        BLK: d.BLK,
                        TOV: d.TOV
                    });
                    teamPlayerName.push(d.player);
                }
            });

            //Volledig percentage van de pie charts
            var maxPlayerPTS = d3.max(playerData, function(d) { return d.PTS; });
            var maxPlayerAST = d3.max(playerData, function(d) { return d.AST; });
            var maxPlayerREB = d3.max(playerData, function(d) { return d.REB; });
            var maxPlayerBLK = d3.max(playerData, function(d) { return d.BLK; });
            var maxPlayerSTL = d3.max(playerData, function(d) { return d.STL; });
            var maxPlayerTOV = d3.max(playerData, function(d) { return d.TOV; });

            var tip = d3.tip()
                .attr("class", "d3-tip pie-chart-tip")
                .html(function(d) { return "<span>" + d.data.player + "</span>"; });

            var outlineArc = d3.svg.arc()
                .innerRadius(innerRadius)
                .outerRadius(radius);

            //6 pie charts tekenen
            for (var i = 0 ; i < 6; i++) {
                var pie = d3.layout.pie().sort(null);
                var arc = d3.svg.arc().innerRadius(innerRadius);
                //center(afkorting stat categorie)
                var shortAttrName = ["PTS", "AST", "REB", "BLK", "STL", "TOV"];
                //Volledige stat naam bij hover
                var fullAttrName = ["Points", "Assists", "Rebounds", "Blokcks", "Steals", "Turnovers"];

                var pieChart = svg.append("g")
                    .attr("class", "pie-chart")
                    .attr("width", width)
                    .attr("height", height)

                    .append("g");

                //Positie van de charts
                pieChart.attr("class", "single-pie-chart").attr("transform", function() {
                    if (i <= 2){
                        return "translate(" + 770 + "," + (110 + i * 160) +")" ;
                    } else {
                        return "translate(" + 930 + "," + (110 + (i - 3) * 160) +")" ;
                    }
                });

                //Words in center (PTS, AST, ...)
                pieChart.append("g:text")
                    .attr("class", "statCat")
                    .attr("dy", ".35em")
                    .attr("fill", "white")
                    .attr("text-anchor", "middle") // text-align: right
                    .text(function() { return shortAttrName[i]; })
                    .append("title")
                    .text(function() { return fullAttrName[i] })
                    .call(tip);

                if (i == 0) {
                    pie.value(function(d) { return d.PTS; });
                    arc.outerRadius(function (d) { return (radius - innerRadius) * d.data.PTS / maxPlayerPTS + innerRadius; });
                }
                if (i == 1) {
                    pie.value(function(d) { return d.AST; });
                    arc.outerRadius(function (d) { return (radius - innerRadius) * d.data.AST / maxPlayerAST + innerRadius; });
                }
                if (i == 2) {
                    pie.value(function(d) { return d.REB; });
                    arc.outerRadius(function (d) { return (radius - innerRadius) * d.data.REB / maxPlayerREB + innerRadius; });
                }
                if (i == 3) {
                    pie.value(function(d) { return d.BLK; });
                    arc.outerRadius(function (d) { return (radius - innerRadius) * d.data.BLK / maxPlayerBLK + innerRadius; })
                }
                if (i == 4) {
                    pie.value(function(d) { return d.STL; });
                    arc.outerRadius(function (d) { return (radius - innerRadius) * d.data.STL / maxPlayerSTL + innerRadius; })
                }
                if (i == 5) {
                    pie.value(function(d) { return d.TOV; });
                    arc.outerRadius(function (d) { return (radius - innerRadius) * d.data.TOV / maxPlayerTOV + innerRadius; });
                }

                var pieColor = d3.scale.linear()
                    .domain([0, 15])
                    .range(["yellow", "blue"])
                    .interpolate(d3.interpolateLab);

                var path = pieChart.selectAll(".solidArc")
                    .data(pie(playerDataset(teamPlayer)))
                    .enter().append("path")
                    .attr("fill", function(d) { return pieColor(teamPlayerName.indexOf(d.data.player)); })
                    .attr("class", "solidArc")
                    .attr("stroke", "gray")
                    .attr("d", arc)
                    .on('mouseover', tip.show)
                    .on('mouseout', tip.hide)
                    .append("title")
                    .text(function(d){ return "Team: " + d.data.team; });

                var outerPath = pieChart.selectAll(".outlineArc")
                    .data(pie(playerDataset(teamPlayer)))
                    .enter().append("path")
                    .attr("fill", "none")
                    .attr("stroke", "white")
                    .attr("class", "outlineArc")
                    .attr("d", outlineArc);
            }
        });

        //return data van de spelers
        function playerDataset(teamPlayer) {
            return teamPlayer.map(function(d) {
                return {
                    player: d.player,
                    team: d.team,
                    PTS: d.PTS,
                    PIE: d.PIE,
                    REB: d.REB,
                    AST: d.AST,
                    STL: d.STL,
                    BLK: d.BLK,
                    TOV: d.TOV
                };
            });
        }
    }
}

//Hover over team --> cirkel, tekst uitvergroten, winstpercentage weergeven & logo tonen
function nodeMouseover(d){
    d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", function(d){
            return 1.5 * Scale(d.winrate); })
        .style("opacity", 1)
        .style("stroke-width", "2px");

    d3.select(this).select("text")
        .transition()
        .duration(200)
        .attr("dx", function(d){
            return 1.5 * Scale(d.winrate);})
        .text(function(d) {
            return d.abb + " (" + d.winrate + "%)";});

    //Logo van het team tonen
    g.append("image")
        .attr("class", d.abb)
        .attr("xlink:href", "images/logo/" + d.abb + "_logo.svg")
        .attr("width", image_w + "px")
        .attr("height", image_h + "px")
        //Zorg ervoor dat logo blijft staan en niet steeds reload bij bewegen muis
        .attr("x", projection([d.lon, d.lat])[0] + 5)
        .attr("y", projection([d.lon, d.lat])[1] + 5);
}

//Terugkeren naar orignele state
function nodeMouseout(d){
    d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", function(d) {
            return Scale(d.winrate); })
        .style("opacity", function(d){
            return Opacity(d.winrate);})
        .style("stroke-width", "1px");

    d3.select(this).select("text")
        .transition()
        .duration(200)
        .attr("dx", function(d){
            return Scale(d.winrate);})
        .text(function(d) {
            return d.abb});

    g.select("image")
        .remove();
}