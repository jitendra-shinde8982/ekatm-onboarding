$("#openaddress").hide();
$("#closeExperiance").hide();


function iconhide_1(){
    $("#opendate1").hide();
}
function iconhide_2(){
    $("#opendate2").hide();
}
function showAdd() {
    $("#openaddress").show();
}
function Createprofile(){
    $("#createProfile").show();
    $("#closeProfile").hide();
}
function AddpersnoalDetails() {

    $("#createProfile_2").show();
    $("#closeProfile_2").hide();

}
function addWorkExp(){
 $("#creatework").show()
 $("#closework").hide();
 
}

function collapsExperiance() {
    $("#closeExperiance").show();
    // $("#closeExperiance").hide()
}

 function loginBtn(){
    window.location.href = "forms/profile_screen_1.html";
 }
 function personalDetails(){
    window.location.href = "profile_screen_2.html";
 }
 function closemenu(){
    $("#closeProfile").show();
 }
 function closemenu2(){
    $("#closeProfile_2").show();
 }
 function closemenu3(){
    $("#closework").show();
 }

 function previewFile() {
    var preview = document.querySelector('#profile-image1');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
$(function () {
    $('#profile-image1').on('click', function () {
        $('#profile-image-upload').click();
    });
});
          