$(document).ready(function(){
  $("button").click(function(){
        var $tr = $(this).parent().parent();
        var $td = $tr.children('td').first();
        var $link = $(this).attr('name');
        $.ajax({
                url: $link,
                dataType: 'json',
                success: function(data){
                    if (data['data']['pid'] == 0 ){ $td.html("-"); }else{ $td.html(data['data']['pid']); }
                    
                    $td = $td.next();
                    $td.html(data['data']['name']);

                    $td = $td.next();
                    $td.html(data['data']['group']);

                    $td = $td.next();
                    $td.html(data['data']['description'].substring(17,24));

                    $td = $td.next();
                    if( data['data']['state']==0 || data['data']['state']==40 || data['data']['state']==100 || data['data']['state']==200 ){
                        $td.attr('class', "alert alert-danger");
                    }else if( data['data']['state']==10 || data['data']['state']==20 ){
                        $td.attr('class', "alert alert-success");
                    }else{
                        $td.attr('class', "alert alert-warning");
                    }
                    $td.html(data['data']['statename']);

                    $td = $td.next();
                    if( data['data']['state']==20){
                        $restart = $td.children('button').first();
                        $restart.attr('class',"btn btn-info btn-sm");
                        $name = $name.concat("\/node\/", data['nodename'], "\/process\/", data['data']['group'], ":", data['data']['name'], "\/restart");
                        $restart.attr('name',$name );
                        $restart.attr('value',"Restart");
                        $restart.html("Restart");

                        $stop = $restart.next();
                        $stop.attr('class',"btn btn-info btn-sm");
                        $name2 = $name2.concat("\/node\/", data['nodename'], "\/process\/", data['data']['group'], ":", data['data']['name'], "\/stop");
                        $stop.attr('name',$name2 );
                        $stop.attr('value',"Stop");
                        $stop.html("Stop");
                    }else if(data['data']['state']==0){
                        $start = $td.children('button').first();
                        $start.attr('class',"btn btn-info btn-sm");
                        $name = name.concat("\/node\/", data['nodename'], "\/process\/", data['data']['group'], ":", data['data']['name'], "\/start");
                        $start.attr('name',$name );
                        $start.attr('value',"Start");
                        $start.html("Start");

                        $stop = $start.next();
                        $stop.attr('class',"btn btn-info btn-sm disabled");
                        $stop.attr('name'," ");
                        $stop.attr('value',"Stop");
                    }
               }});
  });
});

