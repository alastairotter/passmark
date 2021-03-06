// get box sizes
var boxWidth = $(".chart-box").width();

// window.onload = function () { console.log("loaded"); }


setTimeout( function () { 
    d3.selectAll(".chart-box")
        .style("opacity", 1)
}, 500);

// defaults

var sona2,
    state = 0;

var sona2_2017,
    sona2_2016,
    sona2_2015,
    sona2_2014_1,
    sona2_2014_2;

var sona2_2017_top,
    sona2_2016_top,
    sona2_2015_top,
    sona2_2014_2_top,
    sona2_2014_1_top;

var marginLeft = 20,
    marginTop = 30,
    marginBottom = 10,
    margin = {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30
    },
    outerR = width / 2 - 5,
    innerR = 10, 
    opacity = 0.6,
    topicSelectedOpacity = 0.2,
    selected = false, 
    topicSelected = false,
    selectedSlice;

var width = height = boxWidth - 10;

var colors = ["#c94adb",
"#4bbf43",
"#6741ce",
"#86ae3a",
"#c841a8",
"#50b182",
"#d93c80",
"#3c5f2e",
"#ad75d8",
"#c9a840",
"#5b3491",
"#df873b",
"#5882d4",
"#df462a",
"#5bb6c7",
"#db485c",
"#407492",
"#a24e26",
"#ab97c9",
"#897232",
"#524072",
"#99aa72",
"#802f5b",
"#d28c7e",
"#643927",
"#d27ba7",
"#913139"];

var x = d3.scaleLinear().range([10, width / 2 - 5]);

d3.csv("sona.csv", function (sonadata) {

    // function getData() {
    //     return new Promise(function (resolve, reject) { 

    sonadata.forEach(function (d) {
        d.words = +d.words;
        d.slice = +d.slice;
        d.marker = +d.marker;
        d.offset = +d.offset;
        d.h_offset = +d.h_offset;
        d.v_offset = +d.v_offset;
        d.label_h_offset = +d.label_h_offset;
        d.label_v_offset = +d.label_v_offset;

    });

    var sona2014_1 = (sonadata.slice()).filter( function (d) { 
            return d.sona_id == "2014-1"; 
        }),
        sona2014_2 = (sonadata.slice()).filter( function (d) { 
            return d.sona_id == "2014-2";
        }),
        sona2015 = (sonadata.slice()).filter( function (d) { 
            return d.sona_id == "2015";
        }),
        sona2016 = (sonadata.slice()).filter( function (d) { 
            return d.sona_id == "2016";
        }),
        sona2017 = (sonadata.slice()).filter( function (d) { 
            return d.sona_id == "2017";
        }),
        sona2018 = (sonadata.slice()).filter( function (d) { 
            return d.sona_id == "2018";
        });

     

        
    var sona2014_1_copy = sona2014_1.slice(),
        sona2014_2_copy = sona2014_2.slice(),
        sona2015_copy = sona2015.slice(),
        sona2016_copy = sona2016.slice(),
        sona2017_copy = sona2017.slice(),
        sona2018_copy = sona2018.slice();

    // Sort years by words + limit to 3
    var sona2014_1_top = (sona2014_1_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
        if(i < 3) { return d; }
    });

    var sona2014_2_top = (sona2014_2_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
        if(i < 3) { return d; }
    });

    var sona2015_top = (sona2015_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
        if(i < 3) { return d; }
    });

    var sona2016_top = (sona2016_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
        if(i < 3) { return d; }
    });

    var sona2017_top = (sona2017_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
        if(i < 3) { return d; }
    });

    var sona2018_top = (sona2018_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
        if(i < 3) { return d; }
    });




    // load sona2
    d3.csv("sona_zuma.csv", function (data) { 
        
        data.forEach(function (d) {
            d.words = +d.words;
            d.slice = +d.slice;
            d.marker = +d.marker;
            d.offset = +d.offset;
            d.h_offset = +d.h_offset;
            d.v_offset = +d.v_offset;
            d.label_h_offset = +d.label_h_offset;
            d.label_v_offset = +d.label_v_offset;
            d.id = +d.id;
    
        });

        sona2 = data.slice();


        sona2_2017 = (sona2.slice()).filter( function (d) { 
            return d.sona_id == "2017";
        });
        sona2_2016 = (sona2.slice()).filter( function (d) { 
            return d.sona_id == "2016";
        });
        sona2_2015 = (sona2.slice()).filter( function (d) { 
            return d.sona_id == "2015";
        });
        sona2_2014_1 = (sona2.slice()).filter( function (d) { 
            return d.sona_id == "2014_1";
        });
        sona2_2014_2 = (sona2.slice()).filter( function (d) { 
            return d.sona_id == "2014_2";
        });
    
    
    
    
        var sona2_2017_copy = sona2_2017.slice();
        var sona2_2016_copy = sona2_2016.slice();
        var sona2_2015_copy = sona2_2015.slice();
        var sona2_2014_1_copy = sona2_2014_1.slice();
        var sona2_2014_2_copy = sona2_2014_2.slice();
    
        sona2_2017_top = (sona2_2017_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
            if(i < 3) { return d; }
        });
    
     
    
        sona2_2016_top = (sona2_2016_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
            if(i < 3) { return d; }
        });
    
        sona2_2015_top = (sona2_2015_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
            if(i < 3) { return d; }
        });
    
        sona2_2014_1_top = (sona2_2014_1_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
            if(i < 3) { return d; }
        });
    
        sona2_2014_2_top = (sona2_2014_2_copy.sort( function (a, b) { return b.words - a.words; })).filter( function (d,i) { 
            if(i < 3) { return d; }
        });

       
        // app();
    });

        // }); // end of promise

// } // end of getData




function app() { 

    var tooltip = d3.select(".mytooltip");
    
   



    var pie = d3.pie()
        .sort(null)
        .value(function (d) {
            return 30;
        });


    var path = d3.arc()
        .outerRadius(1)
        .innerRadius(0);


    // Making into a function

    function drawChart(id, data, data_top, data_top2) { 

        var chart = d3.select("#chart" + id)
            .append("svg")
            .attr("width", width)
            .attr("height", height)

        var g1 = chart.append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var arc = g1.selectAll(".chart" + id)
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", function (d) { return "topic" + d["data"].id; })
            .classed("chart" + id, true)
            .classed("slice", true)
            // .attr("id", function (d) { 
            //     return "topic" + d["data"].id;
            // })
            
        arc.append("path")
            .attr("d", path)
            .style("stroke", "#fff")
            .style("stroke-width", 1.5)
            .attr("fill", function (d, i) {
               
                return colors[d["data"].color]; 
                
            })
            .style("shape-rendering", "auto")
            .style("opacity", 0.6)
            .attr("id", function (d) { 
                return "topic" + d["data"].id;
            })
            .on("mouseover", function (d) {
                tooltip.style("display", "block").html(function () {
                    var details = "<span class='highlight'>";
                        details += d.data.label; 
                        details += "</span><br/>" + d.data.words + " words";
                    return details;
                });
                d3.select(this).style("opacity", 1);
                
            })
            .on('mousemove', function (d) {
                let tt = +((tooltip.style("width")).slice(0, -2));
                
                let offset = 0;
                if(d.data.label_pos === "left") { offset = -(tt + 10); }
                else { offset = 10; }
                tooltip.style("top", d3.event.clientY + 10 + "px").style("left", d3.event.clientX + offset + "px");
            })
            .on("mouseout", function (d) {
                
                tooltip.style("display", "none");
                
                if(!topicSelected) { 
                    d3.select(this).style("opacity", opacity);
                }
                else { 
                    
                    d.data.id = +d.data.id;
                    if(selectedSlice !== d.data.id) { 
                        d3.select(this).style("opacity", topicSelectedOpacity);
                    }

                }
               
               
            })
            .on("click", function () { 
                var slice = d3.select(this);
                
            })


        setTimeout( function () { 

        chart.selectAll(".chart" + id).each(function (d, i) {              
            
                var max = d3.max(data, function (d) { return d.words; });
                x.domain([0, max]);
              
    
                var newPath = d3.arc()
                    .outerRadius(function () {
                      
                        return x(d["data"].words);
                    })
                    .innerRadius(0);
    
                d3.select(this).select("path").transition()
                    .duration(500)
                    .attr("d", newPath);

                });

            }, 300); // end timeout

       

        // add labels  

        var dateHeight= d3.select("#chart" + id).select(".date").style("height");
     

        var annotations = d3.select("#chart" + id).select("svg")
            .append("g")
            .attr("class", "annotations_" + id)
            .classed("annotations", true);

        

            data_top.forEach( function (d) { 
                
                var max = d3.max(data, function (d) { return d.words; });
                
                x.domain([0, max]);

                var cx = width / 2 + x(d.words - 70) * Math.cos(Math.radians(d.marker));
                var cy = height / 2 + x(d.words - 70) * Math.sin(Math.radians(d.marker));

                var lx = cx + d.h_offset,
                    ly = cy + d.v_offset,
                    align = d.align;


            annotations
                    .append("circle")
                    .attr("cx", cx)
                    .attr("cy", cy)
                    .attr("r", 2)
                    .style("fill", "#000");

            annotations.append("text")
                .attr("x", lx + d.label_h_offset)
                .attr("y", ly + d.label_v_offset)
                .text( function () { 
                    return d.annotation;
                })
                .attr("class", "annotation")
                .style("text-anchor", align)
                .style("fill", "#000")

            annotations.append("line")
                .attr("x1", cx)
                .attr("x2", lx)
                .attr("y1", cy)
                .attr("y2", ly)
                .style("stroke", "#898989")
                .style("stroke-width", 1)
                

            })



            
            
                


               

            

           

                
    }



    function drawAnnotations2 (id, data_top, callback) { 
        
                //second annotations
                var annotations2 = d3.select("#chart" + id).select("svg")
                .append("g")
                .attr("class", "annotations" + id)
                .classed("annotations2", true);
            
            var marker = 285;
                
                data_top.forEach( function (newdata) {
                                        
                    var max = d3.max(data_top, function (d2) { return +d2.words; });
                   
                    x.domain([0, max]);

                  
            
                   
            
                    var cx = width / 2 + x(newdata.words - 70) * Math.cos(Math.radians(newdata.marker));
                    var cy = height / 2 + x(newdata.words - 70) * Math.sin(Math.radians(newdata.marker));
            
                    
            
                    var lx = cx + newdata.h_offset,
                        ly = cy + newdata.v_offset,
                        align = newdata.align;
            
            
                annotations2
                        .append("circle")
                        .attr("cx", cx)
                        .attr("cy", cy)
                        .attr("r", 2)
                        .style("fill", "#000");
            
                annotations2.append("text")
                    .attr("x", lx + newdata.label_h_offset)
                    .attr("y", ly + newdata.label_v_offset)
                    .text( function () { 
                        return newdata.annotation;
                    })
                    .attr("class", "annotation")
                    .style("text-anchor", align)
                    .style("fill", "#000")
            
                annotations2.append("line")
                    .attr("x1", cx)
                    .attr("x2", lx)
                    .attr("y1", cy)
                    .attr("y2", ly)
                    .style("stroke", "#898989")
                    .style("stroke-width", 1)
                    
            
                marker = marker + 30; 
                if(marker === 345) { marker = 15; }
                })

                if(callback) { callback(); }

            }

        
         setTimeout( function () { 
            drawAnnotations2(2, sona2_2017_top);
            drawAnnotations2(3, sona2_2016_top);
            drawAnnotations2(4, sona2_2015_top);
            drawAnnotations2(5, sona2_2014_2_top);
            drawAnnotations2(6, sona2_2014_1_top, callback);
         }, 2000);   


  
    
    

    
    var sona2018_dummy = []; 
    // drawChart(1, sona2018, sona2018_top, sona2018_dummy);
    // drawChart(2, sona2017, sona2017_top, sona2_2017_top);
    // drawChart(3, sona2016, sona2016_top, sona2_2016_top);
    // drawChart(4, sona2015, sona2015_top, sona2_2015_top);
    // drawChart(5, sona2014_2, sona2014_2_top, sona2_2014_2_top);
    // drawChart(6, sona2014_1, sona2014_1_top, sona2_2014_1_top);

    drawChart(1, sona2018, sona2018_top, sona2018_dummy);
    drawChart(2, sona2017, sona2017_top, sona2_2017_top);
    drawChart(3, sona2016, sona2016_top, sona2_2016_top);
    drawChart(4, sona2015, sona2015_top, sona2_2015_top);
    drawChart(5, sona2014_2, sona2014_2_top, sona2_2014_2_top);
    drawChart(6, sona2014_1, sona2014_1_top, sona2_2014_1_top);

    


    // select topic
    selectTopic = function (id) { 
        
        var sel = id + 1;
        d3.selectAll(".slice").select("path").style("opacity", topicSelectedOpacity);
            topicSelected = true;
            selectedSlice = id + 1;
            d3.select(".reset").style("opacity", 1);
        
        d3.selectAll(".topic" + sel).select("path")
            .style("opacity", 1);

    }

    d3.selectAll(".dropdown-item").each( function (d,i) { 
        d3.select(this).on("click", function () { 
            selectTopic(i);
            
        });
    });
                
        

    // });

    d3.select(".reset")
        .on("click", function () { 
            $('#topics').prop('selectedIndex', 0);
            topicSelected = false;
            selectedSlice = null;
            d3.selectAll(".slice").select("path").transition().duration(500).style("opacity", opacity);
            d3.select(this).style("opacity", 0.2);
        })


    // show/hide labels

    $(".details").slideUp();

    var labels = 1; 

    d3.select(".info").on("click", function () { 

        
        
        if(labels == 1) { 
            labels = 0; 
           
            d3.select(".info").text("Hide notes");
            $(".details").slideDown("slow");

           
        }

            else if(labels == 0) { 
                labels = 1; 
                
                d3.select(".info").text("Show notes");
                $(".details").slideUp("slow");

           
        }


    })



    function sona2Update(id, data) { 

        d3.select("#wrap").selectAll(".chart" + id).each(function (d, i) {
            
            var max = d3.max(data, function (d) { return d.words; });
            x.domain([0, max]);

            var newPath = d3.arc()
                .outerRadius(function () {
                    return x(data[i].words);
                })
                .innerRadius(0);

            d3.select(this).select("path").style("fill", function () { 
                
                return colors[data[i].color];
            })
            d3.select(this)
            .attr("class", function () { 
                return "topic" + data[i].id;
            })
            .classed("slice", true)
            .classed("chart" + id, true)

            d3.select(this).select("path").transition()
                .duration(500)
                .attr("d", newPath)
                
           
                
            d3.select(this).on("mouseover", function () {
                    tooltip.style("display", "block").html(function () {
                        var details = "<span class='highlight'>";
                            details += data[i].label; 
                            details += "</span><br/>" + data[i].words + " words";
                        return details;
                    });
                    d3.select(this).style("opacity", 1);
                   
                })
            })
            
        }

    // set default to all top topics
    // setTimeout( function () {
    function callback() { 
        sona2Update(2, sona2_2017); 
        sona2Update(3, sona2_2016);
        sona2Update(4, sona2_2015);
        sona2Update(5, sona2_2014_2);
        sona2Update(6, sona2_2014_1);

        d3.selectAll(".annotations").style("opacity", 0);
        d3.select(".annotations_1").style("opacity", 1);
        d3.selectAll(".annotations2").style("opacity", 1);

        d3.select("#wrap").transition().duration(500).style("opacity", 1);
    }
  


    d3.select(".cr").on("click", function () {
        selectedSlice = null;
        topicSelected = false;
        d3.selectAll(".annotations").transition().duration(700).style("opacity" ,1);
        d3.selectAll(".annotations2").transition().duration(700).style("opacity", 0);

        d3.select(".jz")
            .style("background", "lightgray")
            .style("color", "#000");

        d3.select(".cr")
            .style("background", "#AE0055")
            .style("color", "#fff");

        $('#topics').prop('selectedIndex', 0);
        d3.selectAll(".slice").select("path").style("opacity", opacity);

        sona2Update(2, sona2017); 
        sona2Update(3, sona2016);
        sona2Update(4, sona2015);
        sona2Update(5, sona2014_2);
        sona2Update(6, sona2014_1); 

    
        }); 
   
    d3.select(".jz").on("click", function () { 
        selectedSlice = null;
        topicSelected = false;
        d3.selectAll(".annotations").transition().duration(700).style("opacity", 0);
        d3.select(".annotations_1").transition().duration(700).style("opacity", 1);
        d3.selectAll(".annotations2").transition().duration(700).style("opacity", 1);

       

        d3.select(".jz")
            .style("background", "#AE0055")
            .style("color", "#fff");

        d3.select(".cr")
            .style("background", "lightgray")
            .style("color", "#000");

        $('#topics').prop('selectedIndex', 0);
        d3.selectAll(".slice").select("path").style("opacity", opacity);

    //    if(state === 0) { 
           sona2Update(2, sona2_2017); 
           sona2Update(3, sona2_2016);
           sona2Update(4, sona2_2015);
           sona2Update(5, sona2_2014_2);
           sona2Update(6, sona2_2014_1);
        });


    // remove tooltip on scroll
    $(window).on("scroll", function () { 
        tooltip.style("display", "none");
    })
    


    var sticky = new Waypoint.Sticky({
        element: $('.sticky')[0]
      })

    }

   
    // window.onLoad = function () {  
        app();
    // };


    
}) // End of CSV function

// add service worker
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sona2018/sw.js').then(function(registration) {
    //   console.log('ServiceWorker registration successful with scope:',  registration.scope);
    }).catch(function(error) {
    //   console.log('ServiceWorker registration failed:', errror);
    });
  }


