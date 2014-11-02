 var idPulled = "4193865";
function x(idx) {
 return "<object bgcolor='#000000' data='http://www.twitch.tv/widgets/archive_embed_player.swf' height='476' id='clip_embed_player_flash' type='application/x-shockwave-flash' width='782'><param name='movie' value='http://www.twitch.tv/widgets/archive_embed_player.swf' /><param name='allowScriptAccess' value='always' /><param name='allowNetworking' value='all' /><param name='allowFullScreen' value='true' /><param name='flashvars' value='channel=ludendi&start_volume=25&auto_play=false&chapter_id=" + idx + "'/></object>";
}


var vids = [4193865];

// 4193845,4193815

pvids = [];
for (var i in vids){
	pvids.push(x(vids[i]));
}

pvids.join("<li>")


 document.write(pvids.join("<li>"));