function startLikes() {

	for (var initialVal = 0; document.getElementsByClassName('UFILikeLink')[initialVal]; initialVal++) { // 
	
		if (document.getElementsByClassName('UFILikeLink')[initialVal].innerHtml === "Like") {
		
			document.getElementsByClassName('UFILikeLink')[initialVal].click();
			
		}
		
		return "Liked All";
		
	}

startLikes();
