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
		history.pushState('data', '', '#/' + path);
		$('#main').load('/'+path+'.html');
	}
	
	hashRedirecter();

	$(window).bind('hashchange', function() {
		hashRedirecter();
	});
});