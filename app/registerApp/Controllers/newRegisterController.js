/*
 * @ author Ashkar KM
 * Controller for New Registartion page
 * Registration.Controller.New
 */

(function(){
	registerApp.controller('Registration.Controller.New',['$scope','$location',function($scope,$location){
		$scope.profile	=	{};
		(function(profile){
			/*
			 * @ author Ashkar KM
			 * Function for navigating to create page
			 */
			profile.goToCreate = function() {
				$location.path('/new-registration')
			}
			profile.form = {
				profile_image	:	'',
				first_name		:	'',
				last_name		:	'',
				age				:	'',
				email			:	'',
				telephone		:	'',
				comp_address1	:	'',
				comp_address2	:	'',
				address1		:	'',
				comp_address2	:	'',
				country			:	'',
				sate			:	'',
				interest		:	'',
				agree			:	false
			}
		})($scope.profile)
	}])
})()