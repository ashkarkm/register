/*
 * @author Ashkar KM
 * directive for image upload Functionality
 * imgUpload
 */
registerApp.directive('imgUpload',['CONSTANTS',function(CONSTANTS){
    return directive = {
        restrict :'E',
        templateUrl : CONSTANTS.TEMPLATE_PATH.IMAGE_UPLOAD,
        link : function(scope,element,attr){
            var readURL = function(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        angular.element('.profile-pic').attr('src', e.target.result);
                    }
            
                    reader.readAsDataURL(input.files[0]);
                }
            }
        
        angular.element(".file-upload").on('change', function(){
            readURL(this);
        });
        
        angular.element(".upload-button").on('click', function() {
           angular.element(".file-upload").click();
        });
        }
    }
}])
