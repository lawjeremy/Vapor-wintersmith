module.exports = function(prevPage) {

	if(typeof prevPage !== 'undefined'){

		return prevPage.pageNum + 1;

	}else{

		return 1;
		
	}
  	
}