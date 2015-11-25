module.exports = function(authors, author) {

	var articleAuthor = authors[author + '.json'];

	if(typeof articleAuthor === 'undefined'){

		return '<p class="attr">Author</p><h4>' + author + '</h4>';

	}else{

		var authorBlock = '';

		if('name' in articleAuthor.metadata){

			authorBlock += '<p class="attr">Author</p>';

			if('email' in articleAuthor.metadata){
				authorBlock += '<h4><a href="mailto:' + articleAuthor.metadata.email + '">' + articleAuthor.metadata.name + '</a></h4>';
			}else{
				authorBlock += '<h4>' + articleAuthor.metadata.name + '</h4>';
			}	
		}
		
		if('image' in articleAuthor.metadata){
			authorBlock += '<div class="authorimage" style="background: url(' + articleAuthor.metadata.image + ')"></div>';
		}

		if('bio' in articleAuthor.metadata){
			authorBlock += '<p class="bio">' + articleAuthor.metadata.bio + '</p>';
		}


		return authorBlock;
	}

  	
}

 
                    
        
                    
         


