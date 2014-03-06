
MyApp.home = function (params) {

	var viewModel = {
		//  Put the binding properties here
		login: function(){
			MyApp.repo.login("facebook").then(function(result){
				return MyApp.repo.getTable("users").insert({
					userId:MyApp.repo.currentUser.userId
				});
			}).done(function(inserted){
				MyApp.app.navigate("about");
			},function(error){
				MyApp.app.navigate("about");
			});
		}
	}
	return viewModel;
};