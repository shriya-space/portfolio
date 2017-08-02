$(document).ready(function(){

	function getPath(){
		try{
			return document.location.hash.split("#/")[1].split("/")[0]
		}catch(err){
			return null;		
		}
	}

	function hashRedirecter(){
		path = getPath();
		if(path==null){
			path = 'main'
		}
		oldhash = document.location.hash;
		history.pushState('data', '', '#/' + path);
		$('#main').load('/'+path+'.html');
		// console.log("Gone")
		if(!document.location.hash.match(/#\//g) && $(document).find(oldhash).length != 0){
			$('#menu li a').filter("[href='"+oldhash+"']").click();
		}
	}
	
	hashRedirecter();

	$(window).bind('hashchange', function() {
		if(document.location.hash.match(/#\//g) || $(document.location.hash).length==0){
			hashRedirecter();
		}
	});
});