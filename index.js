$(document).ready(function () {
    $('.headingform').on('submit', function (e) {
        e.preventDefault();
        // var e = e+1
        var head = $('.htext', this).val();
        // console.log(head, 'hhhhhhhhhhhhhhhhhhhhhhhhh')
        $('main').append("<section class='item'><h4>" + head + "</h4><button class='ml-4 btn-delete-s' value='delete'>delete-heading</button></section>")
        $('.heading-s').append("<option value='' selected disabled>--select one--</option>")
        $('.heading-s option').remove()
        $('.heading-s').append("<option value='' selected disabled>--select one--</option>")
        $('main section h4').each(function (key) {
            key = key + 1
            var heading = $(this).text()
            $('.heading-s').append("<option value=" + key + ">" + heading + "</option>")
        })
        // $('.heading-s').append("<option value="+e+">" + head + "</option>")
        $(".headingform")[0].reset();
        var data=$('main').html()
        var heads=$('div .heading-s').html()
        var headf=$('div .heading-f').html()
        var sheadf=$('div .sheading-s').html()
        localStorage.setItem('heads',heads);
        localStorage.setItem('headf',headf);
        localStorage.setItem('sheadf',sheadf);
        localStorage.setItem('mainn',data);
        $("main").sortable({
            items: ".sort",
            stop: function( event, ui ) {
                if(titleDrop != titleChange)
                    dropped.append(ui.item);
            },
            change: function(event, ui){
                titleChange = ui.placeholder.parent().find('h4').text();
            }
        });
        $( ".item" ).droppable({
            accept: ".sort",
            drop: function( event, ui ) {
                dropped = $(this);
                titleDrop = $(this).find('h4').text();
            }
        });
        // $("section").sortable();
    })
    $('.subheadingform').on('submit', function (e) {
        e.preventDefault();
        var shead = $('.stext', this).val();
        var h = $(".heading-s option:selected", this).val();
        console.log(shead,"ssssssssss",h,"hhhhhhhhh")
        $('.heading-f option').remove()
        $('.heading-f').append("<option value='' selected disabled>--select one--</option>")
        $('main section h4').each(function (key) {
            key = key + 1
            var heading = $(this).text()
            $('#hselect').append("<option value=" + key + ">" + heading + "</option>")
        })
        $('main section:nth-child(' + h + ')').append("<div class='sort'><p>" + shead + "</p><button class='ml-4 btn-delete' value='delete'>delete subheading</button></div>")
        // $('.sheading-s').append("<option>" + shead + "</option>")
        $(".subheadingform")[0].reset();
        var data=$('main').html()
        var heads=$('div .heading-s').html()
        var headf=$('div .heading-f').html()
        var sheadf=$('div .sheading-s').html()
        localStorage.setItem('heads',heads);
        localStorage.setItem('headf',headf);
        localStorage.setItem('sheadf',sheadf);
        localStorage.setItem('mainn',data);
        $("main").sortable({
            items: ".sort",
            stop: function( event, ui ) {
                if(titleDrop != titleChange)
                    dropped.append(ui.item);
            },
            change: function(event, ui){
                titleChange = ui.placeholder.parent().find('h4').text();
            }
        });
        $( ".item" ).droppable({
            accept: ".sort",
            drop: function( event, ui ) {
                dropped = $(this);
                titleDrop = $(this).find('h4').text();
            }
        });
        // $("section").sortable();
    })
    $('.heading-f').change(function() {
        // var ind=$('main section div:nth-child()')
        // var sh = $('main section div:nth-child()')
        console.log("runnnnnn")
        var h = $(this).val();
        $('.sheading-s option').remove()
        $('.sheading-s').append("<option value='' selected disabled>--select one--</option>")
        console.log(h,"hhhhhhhhhh")
        $('main section:nth-child(' + h + ') div p').each(function (key) {
            var subhead=$(this).text();
            console.log(subhead)
            key = key + 1
            $('.sheading-s').append("<option value=" + key + ">" + subhead + "</option>")
        })
    })
    $('.fform').on('submit', function (e) {
        e.preventDefault();
        var h = $(".heading-f", this).val();
        var s = $(".sheading-s option:selected", this).text();
        var i = $("#iselect option:selected", this).text();
        var cls = $('.iclass', this).val();
        var lbl = $('.ilabel', this).val();
        var val = $('.ivalue', this).val();
        var ph = $('.iplaceholder', this).val();
        var idd = $('.iid', this).val();
        var nm = $('.iname', this).val();
        var req="";
        var ro="";
        var dis="";
        $('input[name="req"]:checked').each(function(){
            {req=$('.req').text()};
            // console.log(req,"llllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")
        });
        $('input[name="ro"]:checked').each(function(){
            {ro=$('.ro').text()};
            // console.log(ro,"llllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")
        });
        $('input[name="dis"]:checked').each(function(){
            {dis=$('.dis').text()};
            // console.log(dis,"llllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")
        });
        var opt = $('.ioption', this).val().split(",");
        // var option='';
        // for (i=0;i<opt.length;i++){
            //     option=option+'<option>'+opt[i]+'</option>';
            // }
            console.log(h, s,"mmmmmmmmmmm")
            if (i == 'select') {
                var sl = "<label for='" + idd + "'>" + lbl + "</label><select name='" + nm + "' class='" + cls + "' id='" + idd + " '"+req+" "+ro+" "+dis+">";
                for (i = 0; i < opt.length; i++) {
                    sl = sl + '<option>' + opt[i] + '</option>';
                }
                sl=sl+"</select>";
            }
            else if (i == 'radio' || i == 'checkbox') {
                var sl="<input type='" + i + "' class='" + cls + "'id='" + idd + "' value='" + val + "' name='" + nm + "' placeholder='" + ph + "'"+req+" "+ro+" "+dis+"><label for='" + idd + "'>" + lbl + "</label>";
            }
            else if (i == 'submit' || i == 'reset' || i == 'button' || i == 'hidden') {
                // console.log('llllllllllllllllll')
                var sl="<input type='" + i + "' class='" + cls + "'id='" + idd + "' value='" + val + "' name='" + nm + "' placeholder='" + ph + "'"+req+" "+ro+" "+dis+">";
            }
            else {
                var sl="<label for='" + idd + "'>" + lbl + "</label><input type='" + i + "' class='" + cls + "'id='" + idd + "' value='" + val + "' name='" + nm + "' placeholder='" + ph + "'"+req+" "+ro+" "+dis+">";
            }
            // $('main section:nth-child(' + h + ') div p:contains('+s+')').append("<div>"+sl+"</div>")
            $("<div>"+sl+"<button class='btn-delete' value='delete'>delete</button></div>").insertAfter('main section:nth-child(' + h + ') div p:contains('+s+')');
            $(".fform")[0].reset();
            var data=$('main').html()
            var heads=$('div .heading-s').html()
            var headf=$('div .heading-f').html()
            var sheadf=$('div .sheading-s').html()
            localStorage.setItem('heads',heads);
            localStorage.setItem('headf',headf);
            localStorage.setItem('sheadf',sheadf);
            localStorage.setItem('mainn',data);
            $("main").sortable({
                items: ".sort",
                stop: function( event, ui ) {
                    if(titleDrop != titleChange)
                        dropped.append(ui.item);
                },
                change: function(event, ui){
                    titleChange = ui.placeholder.parent().find('h4').text();
                }
            });
            $( ".item" ).droppable({
                accept: ".sort",
                drop: function( event, ui ) {
                    dropped = $(this);
                    titleDrop = $(this).find('h4').text();
                }
            });
            // $("section").sortable();

        })
        $("main").on('click', '.btn-delete', function () {
            $(this).closest('div').remove();
            var data=$('main').html()
            var heads=$('div .heading-s').html()
            var headf=$('div .heading-f').html()
            var sheadf=$('div .sheading-s').html()
            localStorage.setItem('heads',heads);
            localStorage.setItem('headf',headf);
            localStorage.setItem('sheadf',sheadf);
            localStorage.setItem('mainn',data);
            $("main").sortable({
                items: ".sort",
                stop: function( event, ui ) {
                    if(titleDrop != titleChange)
                        dropped.append(ui.item);
                },
                change: function(event, ui){
                    titleChange = ui.placeholder.parent().find('h4').text();
                }
            });
            $( ".item" ).droppable({
                accept: ".sort",
                drop: function( event, ui ) {
                    dropped = $(this);
                    titleDrop = $(this).find('h4').text();
                }
            });
            // $('section').sortable();
        });
        $("main").on('click', '.btn-delete-s', function () {
            $(this).closest('section').remove();
            $('.heading-s').append("<option value='' selected disabled>--select one--</option>")
            $('.heading-s option').remove()
            $('.heading-s').append("<option value='' selected disabled>--select one--</option>")
            $('main section h4').each(function (key) {
                key = key + 1
                var heading = $(this).text()
                $('.heading-s').append("<option value=" + key + ">" + heading + "</option>")})
            $('.heading-f option').remove()
            $('.heading-f').append("<option value='' selected disabled>--select one--</option>")
            $('main section h4').each(function (key) {
                key = key + 1
                var heading = $(this).text()
                $('#hselect').append("<option value=" + key + ">" + heading + "</option>")
            })
            var data=$('main').html()
            var heads=$('div .heading-s').html()
            var headf=$('div .heading-f').html()
            var sheadf=$('div .sheading-s').html()
            localStorage.setItem('heads',heads);
            localStorage.setItem('headf',headf);
            localStorage.setItem('sheadf',sheadf);
            localStorage.setItem('mainn',data);
            $('section').sortable();
            $("main").sortable({
                items: ".sort",
                stop: function( event, ui ) {
                    if(titleDrop != titleChange)
                        dropped.append(ui.item);
                },
                change: function(event, ui){
                    titleChange = ui.placeholder.parent().find('h4').text();
                }
            });
            $( ".item" ).droppable({
                accept: ".sort",
                drop: function( event, ui ) {
                    dropped = $(this);
                    titleDrop = $(this).find('h4').text();
                }
            });
        });
        
        // console.log(s)
        $('main').change(function () {
        var data=$('main').html()
        var heads=$('div .heading-s').html()
        var headf=$('div .heading-f').html()
        var sheadf=$('div .sheading-s').html()
        localStorage.setItem('heads',heads);
        localStorage.setItem('headf',headf);
        localStorage.setItem('sheadf',sheadf);
        localStorage.setItem('mainn',data);
        })
        var heads=localStorage.getItem('heads');
        var headf=localStorage.getItem('headf');
        var sheadf=localStorage.getItem('sheadf');
        var mainn=localStorage.getItem('mainn');
        $('main').html(mainn);
        $('div .heading-s').html(heads)
        $('div .heading-f').html(headf)
        // $('main').sortable();
        $("main").sortable({
            items: ".sort",
            stop: function( event, ui ) {
                if(titleDrop != titleChange)
                    dropped.append(ui.item);
            },
            change: function(event, ui){
                titleChange = ui.placeholder.parent().find('h4').text();
            }
        });
        $( ".item" ).droppable({
            accept: ".sort",
            drop: function( event, ui ) {
                dropped = $(this);
                titleDrop = $(this).find('h4').text();
            }
        });
        // $('div .sheading-s').html(sheadf)
    })