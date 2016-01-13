
function getLikes() {
	
	for (var startNode = 0; document.getElementsByClassName("UFILikeLink")[startNode]; startNode++) {
		
		if (document.getElementsByClassName("UFILikeLink")[startNode].innerHtml != "Unike") {
			
			document.getElementsByClassName("UFILikeLink")[startNode].click();
			
		}
		
	}
	
	console.log("Liked All"); // if you are putting it at one place you can use other notifiers like toaster etc
	
}
