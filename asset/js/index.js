$("#openaddress").hide();
$("#closeEductionDetails").hide()
$("#closeEduction").hide()
$("#deleteExp").hide()
$("#closeExperiance").hide();
$("#closeIcon").hide()
$("#otherCmpInfo").hide();


function collapsEduction(){
    $("#closeEductionDetails").show()
    $("#closeEduction").show()
    $("#openEduction").hide()
    
}
function hideEduction(){
    $("#closeEductionDetails").hide()
    $("#openEduction").show()
    $("#closeEduction").hide()
    
}


function iconhide1(){
    $("#opendate1").hide();
}
function iconhide2(){
    $("#opendate2").hide();
}
function iconhide_1(){
    $("#opendate_1").hide();
}
function iconhide_2(){
    $("#opendate_2").hide();
}
function showAdd() {
    $("#openaddress").show();
}
function showExp(){
    $("#secoundExp").show();
    $("#deleteExp").show();
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
function addEduction(){
    $("#createEduction").show()
    $("#closeEductionmenu").hide();
    
}
function addCivics(){
    $("#createCivics").show()
    $("#closeCivics").hide();
    
   }
function addBankDetails(){
    $("#createBankDetails").show()
    $("#closeBankDetails").hide();
    
}
function addSocialPage(){
    $("#createSocialPage").show()
    $("#closeSocialPage").hide();
}

function collapsExperiance() {
    $("#closeExperiance").show();
   $("#plusIcon").hide();
    $("#closeIcon").show();
    $("#otherCmpInfo").show();
}

function collapsExperiance2(){
    $("#closeExperiance").hide();
    $("#plusIcon").show();
    $("#closeIcon").hide();
}

function deleteSecExp(){
    $("#secoundExp").hide();
}
function closemenu(){
    $("#closeProfile").show();
    $("#createProfile").hide()
 }
 function closemenu2(){
    $("#closeProfile_2").show();
    $("#createProfile_2").hide()
 }
 function closemenu3(){
    $("#closework").show();
    $("#creatework").hide()
 }
 function closemenu4(){
    $("#closeEductionmenu").show();
    $("#createEduction").hide()
 }
 function closemenu5(){
    $("#closeCivics").show();
    $("#createCivics").hide()
 }
 function closemenu6(){
    $("#closeBankDetails").show();
    $("#createBankDetails").hide()
 }
 function closemenu7(){
    $("#closeBankDetails").show();
    $("#createSocialPage").hide()
 }

 function loginBtn(){
    window.location.href = "forms/profile_screen_1.html";
 }
 function personalDetails(){
    window.location.href = "profile_screen_2.html";
 }
 function workPage(){
    window.location.href = "profile_screen_3.html";
 }
 function eductionpage() {
    window.location.href = "profile_screen_4.html";
 }
 function CivicPage() {
    window.location.href = "profile_screen_5.html";
 }
 function Bankpage() {
    window.location.href = "profile_screen_6.html";
 }
function socialPage(){
    window.location.href = "profile_screen_7.html";
}
function onbordingDone(){
    window.location.href = "profile_screen_8.html";
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
          