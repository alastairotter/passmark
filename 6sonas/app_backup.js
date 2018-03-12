// defaults

var width = 220,
    height = 220,
    marginLeft = 10,
    marginTop = 10,
    marginBottom = 10,
    margin = {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20
    },
    outerR = width / 2 - 5,
    innerR = 10;


var data = [{
        slice: 30,
        value: 75,
        topic: "Economy/economic policy"
    },
    {
        slice: 30,
        value: 54,
        topic: "Jobs/youth unemployment"
    },
    {
        slice: 30,
        value: 78,
        topic: "Social cohesion/nation building"
    },
    {
        slice: 30,
        value: 35,
        topic: "Corruption"
    },
    {
        slice: 30,
        value: 88,
        topic: "Education"
    },
    {
        slice: 30,
        value: 67,
        topic: "Govt/public service/service delivery"
    },
    {
        slice: 30,
        value: 45,
        topic: "Mining sector"
    },
    {
        slice: 30,
        value: 87,
        topic: "State-owned enterprises"
    },
    {
        slice: 30,
        value: 35,
        topic: "Agriculture/rural development/land redistribution"
    },
    {
        slice: 30,
        value: 88,
        topic: "Small business development"
    },
    {
        slice: 30,
        value: 67,
        topic: "Health"
    },
    {
        slide: 30,
        value: 45,
        topic: "Water/sanitation"
    }

];

// var colors = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928'];

var colors = ["#677cc3",
    "#55a339",
    "#b643d5",
    "#797d30",
    "#674bc2",
    "#be8037",
    "#d157b1",
    "#408f65",
    "#db4f34",
    "#8d447a",
    "#954736",
    "#d24e70"
];

var topics = ["Economy/economic policy",
    "Jobs/youth unemployment",
    "Social cohesion/nation building",
    "Corruption",
    "Education",
    "Govt/public service/service delivery",
    "Mining sector",
    "State-owned enterprises",
    "Agriculture/rural development/land redistribution",
    "Small business development ",
    "Health",
    "Water/sanitation"
];

var x = d3.scaleLinear().range([0, width / 2 - 5]);


// new data
var sona2014_2,
    sona2014_1,
    sona2014_1_top;

d3.csv("sona.csv", function (sonadata) {

    sonadata.forEach(function (d) {
        d.words = +d.words;
        d.slice = +d.slice;

    });

    // Get years
    sona2014_1 = sonadata.filter(function (d) {
        return d.sona_id == "2014-1";
    });
    var sona2014_1_copy = sona2014_1.slice();

    // Sort years by words + limit to 3
    sona2014_1_top = (sona2014_1_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
        if(i < 3) { return d; }
    })

    // console.log(sona2014_1)
    // console.log(sona2014_1_top);

    // sona2014_1_top = sona2014_1.filter( function (d,i) { 
        
    // });


    sona2014_2 = sonadata.filter(function (d) {
        return d.sona_id == "2014-2";
    });

    // update legend
    d3.select(".legend1").select(".title1").text(sona2014_1_top[0].topic);
    d3.select(".legend1").select(".title2").text(sona2014_1_top[1].topic);
    d3.select(".legend1").select(".title3").text(sona2014_1_top[2].topic);
    d3.select(".legend1").select(".color1").style("background", colors[sona2014_1_top[0].id - 1])
    d3.select(".legend1").select(".color2").style("background", colors[sona2014_1_top[1].id - 1])
    d3.select(".legend1").select(".color3").style("background", colors[sona2014_1_top[2].id - 1])
    



    d3.select("#chart")
        .style("width", (width + marginLeft) * 2 + 10 + "px")


    d3.selectAll(".chart")
        .style("width", width + "px")
        .style("height", height + "px")

    d3.selectAll(".chart-holder")
        .style("width", width + "px")
        .style("height", height + 50 + "px")
        .style("margin-left", marginLeft + "px")
        .style("margin-top", marginTop + "px");





    var tooltip = d3.select(".tooltip");

    var chart1 = d3.select(".chart1")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

    var chart2 = d3.select(".chart2")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

    var chart3 = d3.select(".chart3")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

    var chart4 = d3.select(".chart4")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

    var g1 = chart1.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g2 = chart2.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g3 = chart3.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g4 = chart4.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");




    var pie = d3.pie()
        .sort(null)
        .value(function (d) {
            return 30;
        });


    var path = d3.arc()
        .outerRadius(1)
        .innerRadius(0);





    // chart 1
    var arc = g1.selectAll(".chart1")
        .data(pie(sona2014_1))
        .enter()
        .append("g")
        .attr("class", "chart1")


    arc.append("path")
        .attr("d", path)
        .style("stroke", "#fff")
        .style("stroke-width", 1.5)
        .attr("fill", function (d, i) {
            return colors[i];
        })
        .style("shape-rendering", "auto")
        .style("opacity", 0.6)
        .on("mouseover", function (d) {
            tooltip.style("display", "block").html(function () {
                var details = d.data.topic; 
                    details += "<br/>" + d.data.words + " words";
                return details;
            });
            d3.select(this).style("opacity", 1)
        })
        .on('mousemove', function () {
            tooltip.style("top", d3.event.clientY + 10 + "px").style("left", d3.event.clientX + 15 + "px");
        })
        .on("mouseout", function () {
            tooltip.style("display", "none");
            d3.select(this).style("opacity", 0.6)
        })


    // chart 2
    var arc = g2.selectAll(".chart2")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "chart2")


    arc.append("path")
        .attr("d", path)
        .style("stroke", "#fff")
        .style("stroke-width", 2)
        .attr("fill", function (d, i) {
            return colors[i];
        })
        .style("opacity", 0.5)
        .on("mouseover", function () {
            tooltip.style("display", "block");
            d3.select(this).style("opacity", 1)
        })
        .on('mousemove', function () {

            tooltip.style("top", d3.event.clientY + 10 + "px").style("left", d3.event.clientX + 15 + "px");
        })
        .on("mouseout", function () {
            tooltip.style("display", "none");
            d3.select(this).style("opacity", 0.5)
        })

    // chart 3
    var arc = g3.selectAll(".chart3")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "chart3")


    arc.append("path")
        .attr("d", path)
        .style("stroke", "#fff")
        .style("stroke-width", 2)
        .attr("fill", function (d, i) {
            return colors[i];
        })
        .style("opacity", 0.5)
        .on("mouseover", function () {
            tooltip.style("display", "block");
            d3.select(this).style("opacity", 1)
        })
        .on('mousemove', function () {

            tooltip.style("top", d3.event.clientY + 10 + "px").style("left", d3.event.clientX + 15 + "px");
        })
        .on("mouseout", function () {
            tooltip.style("display", "none");
            d3.select(this).style("opacity", 0.5)
        })


    // chart 4
    var arc = g4.selectAll(".chart4")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "chart4")


    arc.append("path")
        .attr("d", path)
        .style("stroke", "#fff")
        .style("stroke-width", 2)
        .attr("fill", function (d, i) {
            return colors[i];
        })
        .style("opacity", 0.5)
        .on("mouseover", function () {
            tooltip.style("display", "block");
            d3.select(this).style("opacity", 1)
        })
        .on('mousemove', function () {

            tooltip.style("top", d3.event.clientY + 10 + "px").style("left", d3.event.clientX + 15 + "px");
        })
        .on("mouseout", function () {
            tooltip.style("display", "none");
            d3.select(this).style("opacity", 0.5)
        })




    // initialise arc1
    setTimeout(function () {

        chart1.selectAll(".chart1").each(function (d, i) {
            
            var max = d3.max(sona2014_1, function (d) { return d.words; });
            x.domain([0, max]);

            var newPath = d3.arc()
                .outerRadius(function () {
                    return x(d["data"].words);
                })
                .innerRadius(0);

            d3.select(this).select("path").transition()
                .duration(500)
                .attr("d", newPath)


        });

        chart2.selectAll(".chart2").each(function (d, i) {

            var newPath = d3.arc()
                .outerRadius(randomInt(innerR + 10, outerR))
                .innerRadius(0);

            d3.select(this).select("path").transition()
                // .delay(i * 100)
                .duration(500)
                .attr("d", newPath)
            // .style("fill", colors[i]);

        });


        chart3.selectAll(".chart3").each(function (d, i) {

            var newPath = d3.arc()
                .outerRadius(randomInt(innerR + 10, outerR))
                .innerRadius(0);

            d3.select(this).select("path").transition()
                // .delay(i * 100)
                .duration(500)
                .attr("d", newPath)
            // .style("fill", colors[i]);

        });

        chart4.selectAll(".chart4").each(function (d, i) {

            var newPath = d3.arc()
                .outerRadius(randomInt(innerR + 10, outerR))
                .innerRadius(0);

            d3.select(this).select("path").transition()
                // .delay(i * 100)
                .duration(500)
                .attr("d", newPath)
            // .style("fill", colors[i]);

        });

    }, 300);


}) // End of CSV function