var app = angular.module('acrt', ["ngSanitize"]);

window.addEventListener("error", handleError, true);

function handleError(evt) {
    if (evt.message) { // Chrome sometimes provides this
      //alert("error: "+evt.message +" at linenumber: "+evt.lineno+" of file: "+evt.filename);
	 //  alert('Please select file for ACRT, error message: '+evt.message);
    } /*else {
      //alert("error: "+evt.type+" from element: "+(evt.srcElement || evt.target));
	  alert('Please select and load valid JSON file for ACRT');
    }*/
}
/*
//commented because this is partially working
function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
	alert("There is a problem while trying to convert to JSON format, contact technical support.");
	console.log(str);
	//return false;
  }
  //return true;
  return JSON.parse(str);
}
 */

function expandCollapse1() {
  var x = document.getElementById("expandCollapse1");
  if (x.innerHTML === "<i class=\"down\"></i> Hide Product Section") {
    x.innerHTML = "<i class=\"up\"></i> Show Product Section";
  } else {
    x.innerHTML = "<i class=\"down\"></i> Hide Product Section";
  }

}

function expandCollapse2() {

  var y = document.getElementById("expandCollapse2");
  if (y.innerHTML === "<i class=\"down\"></i> Hide Test Environment Section") {
    y.innerHTML = "<i class=\"up\"></i> Show Test Environment Section";
  } else {
    y.innerHTML = "<i class=\"down\"></i> Hide Test Environment Section";
  }

}

function expandCollapse3() {

  var z = document.getElementById("expandCollapse3");
  if (z.innerHTML === "<i class=\"down\"></i> Hide Testing Information Section") {
    z.innerHTML = "<i class=\"up\"></i> Show Testing Information Section";
  } else {
    z.innerHTML = "<i class=\"down\"></i> Hide Testing Information Section";
  }
}

function expandCollapse4() {

  var z = document.getElementById("expandCollapse4");
  if (z.innerHTML === "<i class=\"down\"></i> Hide terms used in the Conformance Level") {
    z.innerHTML = "<i class=\"up\"></i> Show terms used in the Conformance Level";
  } else {
    z.innerHTML = "<i class=\"down\"></i> Hide terms used in the Conformance Level";
  }
}

function expandCollapse5() {

  var z = document.getElementById("expandCollapse5");
  if (z.innerHTML === "<i class=\"down\"></i> Hide Risk Score Breakdown") {
    z.innerHTML = "<i class=\"up\"></i> Show Risk Score Breakdown";
  } else {
    z.innerHTML = "<i class=\"down\"></i> Hide Risk Score Breakdown";
  }
}

function expandCollapse6() {

  var z = document.getElementById("expandCollapse6");
  if (z.innerHTML === "<i class=\"down\"></i> Hide Other Results") {
    z.innerHTML = "<i class=\"up\"></i> Show Other Results";
  } else {
    z.innerHTML = "<i class=\"down\"></i> Hide Other Results";
  }
}

//defining filter
app.filter('unique', function() {
  return function(collection, keyname) {
    var output = [],
      keys = [];
    angular.forEach(collection, function(item) {
      var key = item[keyname];
      if (keys.indexOf(key) === -1) {
        keys.push(key);
        output.push(item);
      }
    });
    return output;
  };
});
/*
commented because for now we dont want to use checkbox to show or hide it
var displaytstRslt = false;
function chkBxMsg(thecheckbox, thelabel) {

    var checkboxvar = document.getElementById(thecheckbox);
    var labelvar = document.getElementById(thelabel);

    if (!checkboxvar.checked) {
        //labelvar.innerHTML = "Select Checkbox to view all test results. ";
		document.getElementById("displaytstRslt1").style.visibility = "hidden";
		alert('unckecked');
    }
    else {
        //labelvar.innerHTML = "Uncheck checkbox to hide all test results.";
		//alert('checked');
	   if(checkboxvar == selector112 ) { displaytstRslt=true; alert('Pass');}
		if(checkboxvar == selector113 ) {displaytstRslt=true;alert('Fail');}
		if(checkboxvar == selector114 ) {displaytstRslt=true;alert('Does Not Apply');}
		if(checkboxvar == selector115 ) {displaytstRslt=true;alert('Not Tested');}


    }
}

*/

function grpImpact() {
  var x = document.getElementById("myImpact");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var coll = document.getElementsByClassName("collapsible");

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


app.controller('acrtFormCtrl', function($scope, $filter) {
   //$scope.displaytstRslt1 = displaytstRslt;
   $scope.onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
  }
$scope.selected_name_tstrsltdsply = '';
$scope.optionsRsltDsply = [];
$scope.default_SelectedResultDsply = 'All';
$scope.draftMsg ="";

$scope.optionsRsltDsply = [
{
    id: 0,
    name: 'Pass'
  },
  {
    id: 1,
    name: 'Fail'
  },
  {
    id: 2,
    name: 'Does Not Apply'
  }
  ,
  {
    id: 3,
    name: 'Not Tested'
  },{
    id: 4,
    name: 'All'
  }

];



$scope.displayTestResult = function() {
  $scope.displaytstRslt = false;
	$scope.filterResult1 = false;
	//$scope.selected_name_tstrsltdsply == 'All';
  if($scope.selected_name_tstrsltdsply == 'All' ) { $scope.displaytstRslt=true; $scope.filterResult1 = true;}
  if($scope.selected_name_tstrsltdsply == 'Pass' ) { $scope.displaytstRslt=true; $scope.filterResult = 'Pass';}
	if($scope.selected_name_tstrsltdsply == 'Fail' ) {$scope.displaytstRslt=true;$scope.filterResult = 'Fail';}
	if($scope.selected_name_tstrsltdsply == 'Does Not Apply' ) {$scope.displaytstRslt=true; $scope.filterResult = 'Does Not Apply';}
	if($scope.selected_name_tstrsltdsply == 'Not Tested' ) {$scope.displaytstRslt=true; $scope.filterResult = 'Not Tested';}
}

  $scope.load = function() {
	function KeyPress(e) {
      var evtobj = window.event? event : e

	  if (evtobj.keyCode == 77 && evtobj.altKey) document.getElementById("helpID").focus();  //Alt+M to go to main content
	  }
	  document.onkeydown = KeyPress;

 }

 $scope.fileNameChanged = function () {
   $scope.fileInput1 = true;
   $scope.$apply();
   document.getElementById("selMsg").innerHTML = "File selected. Please select 'Load File' below to proceed.";
   document.getElementById('fileinput').setAttribute('title', 'File selected. Please select Load File below to proceed.');
   document.getElementById("buttonLoad").focus();
 }

  $scope.tstRsltMsg = function() {
    //alert($scope.checked1);
    if ($scope.checked1 == 'false' )
    document.getElementById("msg").innerHTML = "Check checkbox for detailed Test Results.";
    if ($scope.checked1 == 'true' )
    document.getElementById("msg").innerHTML = "Uncheck checkbox to hide Test Results.";
  }

  $scope.fileInput = function fileInput() {
    $scope.fileInput1 = true;
  }

$scope.noResult =[];

  //zoom image
$scope.zoom = function(i) {
  var modal = document.getElementById(i);
  var img = document.getElementById("image"+i);
  var modalImg = document.getElementById("img"+i);
  var captionText = document.getElementById("caption"+i);
  //var span = document.getElementsByClassName("close")[i];
  var span = document.getElementById("cls"+i);

  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

}

$scope.zoom2 = function(i) {
  var modal2 = document.getElementById('rmd2'+i);
  var img2 = document.getElementById("image2"+i);
  var modalImg2 = document.getElementById("img2"+i);
  var captionText2 = document.getElementById("caption2"+i);
  //var span = document.getElementsByClassName("close")[i];
  var span2 = document.getElementById("cls2"+i);

  img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
  }

  span2.onclick = function() {
    modal2.style.display = "none";
  }
}

$scope.uniqSCCrtId = [];
$scope.totalSCCrtId = [];
$scope.DisabilityImpactCollection = [];
$scope.DisabilityImpactCollectionSC =[];
$scope.loadclicked = 0;
$scope.dataLoaded = false;
$scope.wcagRprt = false;
$scope.sucCrtLngth =0;
$scope.checked1= false;
$scope.checked2= false;
$scope.checked3= false;
$scope.checked4= false;
$scope.checked5= false;
$scope.loadFile = function loadFile() {
$scope.loadclicked= $scope.loadclicked+1;

var input, file, fr;

if (typeof window.FileReader !== 'function') {
  alert("Please use file browser which supports file API.");
  return;
}

input = document.getElementById('fileinput');
if (!input) {
  alert("Make sure you have file input element.");
} else if (!input.files) {
  alert("Please use browser that supports the `files` property of file inputs.");
} else if (!input.files[0]) {
  alert("Please select a JSON file first");
} else {
  file = input.files[0];
  fr = new FileReader();
  fr.onload = receivedText;
  fr.readAsText(file);
}

$scope.countOfWords = function(text) {
  var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
  return s ? s.length : '';
};

$scope.countOfRepWords =  function wordFreq(string) {
  var words = string.replace(/[.]/g, '').split(/\s/);
  var freqMap = {};
  words.forEach(function(w) {
    if (!freqMap[w]) {
        freqMap[w] = 0;
    }
    freqMap[w] += 1;
  });

  return freqMap;
}

function receivedText(e) {
  let lines = e.target.result;
  var newArr = JSON.parse(lines);
  $scope.jsonData = newArr;
  $scope.myBrowser = "";
  $scope.isDraft = false;
  $scope.CrtID = [];
  $scope.Test = [];
  $scope.TestName = [];
  $scope.TestID = [];
  $scope.TestCondition = [];
  $scope.IssueNo = [];
  $scope.TestResult = [];
  $scope.TesterComment = [];
  $scope.location = [];
  $scope.T_brwsrType = [];
  $scope.T_brwsrVrsn = [];
  $scope.ImageSrc = [];
  $scope.ImageSrc2 = [];
  $scope.GlobalIssue = [];
  $scope.RemediationDate = [];
  $scope.RemediationDetails = [];
  $scope.Counter = [];
  $scope.CrtIDCollection = [];
  $scope.myTextCollection = [];
  $scope.myTextCollection1 = [];
  $scope.sameCrtId = [];
  $scope.diffCrtId = [];
  $scope.myText = [];
  $scope.uniqSCCrtIdCollection = [];
  $scope.Guideline =[];
  $scope.dataLoaded = true;
  $scope.companyname="";
  $scope.counterCollection =[];
  $scope.productID = $scope.jsonData[0].Product.P_Name;
  $scope.ownerID = $scope.jsonData[0].Product.P_Version;
  $scope.versionID = $scope.jsonData[0].Product.P_Owner;
  $scope.productType = $scope.jsonData[0].Product.P_Type;
  $scope.urlID = $scope.jsonData[0].Product.P_Location;
  $scope.flashID = $scope.jsonData[0].Product.P_Flash;
  $scope.javaID = $scope.jsonData[0].Product.P_java;
  $scope.prodDescID = $scope.jsonData[0].Product.P_Desc;
  $scope.prdNteDescID = $scope.jsonData[0].Product.P_Notes;
  $scope.compID = $scope.jsonData[0].System.S_Compatibility;
  $scope.myBrowserTested = $scope.jsonData[0].System.S_selectedBrowser;
  $scope.myBrowser = $scope.jsonData[0].System.S_selectedBrowserVersions;
  $scope.myOpsys = $scope.jsonData[0].System.S_osVrsnNo;
  $scope.myOpsysTested = $scope.jsonData[0].System.S_selectedOS;
  $scope.firstname = $scope.jsonData[0].Tester.T_fstnm;
  $scope.lastname = $scope.jsonData[0].Tester.T_lstnm;
  $scope.testerID = $scope.jsonData[0].Tester.T_ID;
  $scope.companyname = $scope.jsonData[0].Tester.T_companyname;
  $scope.myRole = $scope.jsonData[0].Tester.T_Role;
  $scope.testerContact = $scope.jsonData[0].Tester.T_cntc;
  $scope.testScope = $scope.jsonData[0].Tester.T_scope;
  $scope.evalMethod = $scope.jsonData[0].Tester.T_eval;
  $scope.evalMethodVrsn = $scope.jsonData[0].Tester.T_evalMthd_Vrsn;
  $scope.dateSubmitted = $scope.jsonData[0].Tester.T_Date;
  //$scope.Guideline = $scope.jsonData[0].Guideline.Guideline;
  //$scope.Section508 = $scope.jsonData[0].Guideline.Section508;
  //$scope.EN_Accessibility = $scope.jsonData[0].Guideline.EN_Accessibility;
  $scope.crtID = $scope.jsonData[0].Criteria[0].CrtID;
  $scope.titforImg =[];
  $scope.altforImg = [];

  for (let b = 0; b < $scope.jsonData[0].Criteria.length; b++) {
   	$scope.noResult[b] = true;
    let c=b+1;
    $scope.CrtID[b] = $scope.jsonData[0].Criteria[b].CrtID;
    $scope.Test[b] = $scope.jsonData[0].Criteria[b].Test;
    $scope.TestName[b] = $scope.jsonData[0].Criteria[b].TestName;
    $scope.TestID[b] = $scope.jsonData[0].Criteria[b].TestID;
    $scope.counterCollection[b]= $scope.jsonData[0].Criteria[b].Counter;
    $scope.Guideline[b] = $scope.jsonData[0].Criteria[b].Guideline;
    $scope.TestCondition[b] = $scope.jsonData[0].Criteria[b].TestCondition;
    $scope.TestResult[b] = $scope.jsonData[0].Criteria[b].TestResult;

    if($scope.TestResult[b]!= 'undefined') {$scope.noResult[b]=true; }

    if($scope.TestResult[b]== 'undefined') {$scope.TestResult[b] = ''; $scope.noResult[b]=false; };

    $scope.IssueNo[b] = b;//$scope.jsonData[0].Criteria[b].IssueNo;
    $scope.location[b] = $scope.jsonData[0].Criteria[b].location;
    $scope.TesterComment[b] = $scope.jsonData[0].Criteria[b].TesterComment;
    $scope.T_brwsrType[b] = $scope.jsonData[0].Criteria[b].T_brwsrType;
    $scope.T_brwsrVrsn[b] = $scope.jsonData[0].Criteria[b].T_brwsrVrsn;
    $scope.ImageSrc[b] = $scope.jsonData[0].Criteria[b].ImageSrc;

    if($scope.ImageSrc[b] != undefined){
      $scope.titforImg[b]= 'image for ' + $scope.Test[b];
      $scope.altforImg[b]= 'image for ' + $scope.Test[b];
    }

    $scope.GlobalIssue[b] = $scope.jsonData[0].Criteria[b].GlobalIssue;
    // $scope.RemediationDate[b] = $scope.jsonData[0].Criteria[b].RemediationDate;
    $scope.RemediationDetails[b] = $scope.jsonData[0].Criteria[b].RemediationDetails;
    $scope.ImageSrc2[b] = $scope.jsonData[0].Criteria[b].ImageSrc2;
    $scope.Counter[b] = $scope.jsonData[0].Criteria[b].Counter;
    $scope.CrtIDCollection.push($scope.CrtID[b]);

    if ($scope.jsonData[0].Criteria[b].TestResult == 'undefined') $scope.jsonData[0].Criteria[b].TestResult ='';

		$scope.$apply();

		if ($scope.jsonData[0].Criteria[b].DraftReport == 'true') {
      $scope.isDraft = true;
      continue;
    }

    if($scope.isDraft == true)
    $scope.draftMsg = "This is a Draft Report, To view final Report please select all required test results."


    if($scope.DisabilityImpactCollection.length >0)
    setTimeout(function() {
      document.getElementById("dsblGrpBtn").click();
    }, 1000);
  }

  $scope.impactedGroup = [];

  document.getElementById("msg1").innerHTML = "<strong>"+$scope.evalMethod +" Version "+$scope.evalMethodVrsn + " "+$scope.productID+$scope.ownerID+".json"+ "</strong> file load completed.<br> To load a different file, <strong>reload</strong> this page.";

  alert('To save printer-friendly HTML report, use Alt+S or Save button at the bottom of the page.');

  //$scope.validData=true;
  if($scope.jsonData[0].SuccessCriteria == undefined){
    // $scope.validData = false;
    alert('Either select different file (by refreshing this page) or use "Create Report" option for same file.');
  }

  if($scope.jsonData[0].SuccessCriteria != undefined){
    $scope.sucCrtLngth =  $scope.jsonData[0].SuccessCriteria.length;
    //alert($scope.sucCrtLngth);
   }

  //if($scope.productID == " ")
	//alert('Either refresh page & select different file or use "Create Report" option.');

  if ($scope.sucCrtLngth == 0){
	   $scope.wcagRprt = false;
     alert('Make sure to load file with all mandatory fields and at least one valid test result to view complete report page.');
	 }

  if ($scope.sucCrtLngth >0) {
		$scope.wcagRprt = true;
		//making sure table displays only for valid data.
		document.getElementById('displayTestRslt').style.display = "block";
		document.getElementById('htmlReportDiv').style.display = "block";
	}

  for (let a = 0; a < $scope.sucCrtLngth; a++) {
    if ($scope.jsonData[0].SuccessCriteria[a].DisabilityImpact == undefined || $scope.jsonData[0].SuccessCriteria[a].DisabilityImpact == 'undefined')

    $scope.jsonData[0].SuccessCriteria[a].DisabilityImpact = "";

    if ($scope.jsonData[0].SuccessCriteria[a].DisabilityImpact != "" || $scope.jsonData[0].SuccessCriteria[a].DisabilityImpact != " ") {
      $scope.impactedGroup[a] = true;	{
        if($scope.jsonData[0].SuccessCriteria[a].ConformanceLvl == 'Not Evaluated') continue;

        $scope.DisabilityImpactCollection.push($scope.jsonData[0].SuccessCriteria[a].DisabilityImpact);
        //$scope.DisabilityImpactCollectionSC.push($scope.jsonData[0].SuccessCriteria[a].CrtID);
      }
    }

    $scope.uniqSCCrtId[a] = $scope.jsonData[0].SuccessCriteria[a].CrtID;
    $scope.uniqSCCrtIdCollection.push($scope.uniqSCCrtId[a]);
  }

  $scope.TotalImpactedGrpString = '';
  $scope.DisabilityRiskScoreJSON = '';
  $scope.impctInfoMsg = "The risk score is calculated by assigning one point to each disability type impacted by a failed Test ID. Disability groups with higher points have a higher risk of not being able to utilize the application.  Projects should confer with the Certified Trusted Tester Accessibility Developer that performed the testing and their Component Section 508 Program Manager about remediating failed Test IDs before the application is released.";
  $scope.TotalImpactedGrpString = 0;
  //if($scope.DisabilityImpactCollection.length >0){
  $scope.TotalImpactedGrpString = Array.from(new Set($scope.DisabilityImpactCollection)).toString();
  $scope.TotalImpactedGrpString.replace(/(^\s*)|(\s*$)/gi,""); //removes start and end spaces from string
  $scope.TotalImpactedGrpString.replace(/[ ]{2,}/gi," "); //reduces multiple spaces to single space
  $scope.TotalImpactedGrpString = $scope.TotalImpactedGrpString.replace(/^,/, ''); //removes first comma from string
  $scope.TotalImpactedGrpString = $scope.TotalImpactedGrpString.replace(/,\s*$/, " "); //removes comma from last of string
  $scope.TotalImpactedGrpString = $scope.TotalImpactedGrpString.replace(/,+/g, ','); //removes multiple commas from string
  $scope.TotalImpactedGrpString = $scope.TotalImpactedGrpString.replace(/,/g,'');//removes all commas
  $scope.TotalImpactedGrpString = $scope.TotalImpactedGrpString.replace(/'/g,'');//removes single quotes

  $scope.DisabilityRiskScoreJSON = $scope.countOfRepWords($scope.TotalImpactedGrpString);
  $scope.DisabilityRiskScore = $scope.DisabilityRiskScoreJSON;
	//Vision
  $scope.TotalVision =0;
  if($scope.DisabilityRiskScoreJSON.Vision == null) $scope.DisabilityRiskScoreJSON.Vision =0;
  $scope.Vision = $scope.DisabilityRiskScoreJSON.Vision;
  if($scope.DisabilityRiskScoreJSON.VisionWith == null) $scope.DisabilityRiskScoreJSON.VisionWith =0;
  $scope.VisionWith = $scope.DisabilityRiskScoreJSON.VisionWith;
  if($scope.DisabilityRiskScoreJSON.VisionWithout == null) $scope.DisabilityRiskScoreJSON.VisionWithout =0;
  $scope.VisionWithout = $scope.DisabilityRiskScoreJSON.VisionWithout;
  if($scope.DisabilityRiskScoreJSON.Color == null) $scope.DisabilityRiskScoreJSON.Color =0;
  $scope.Color = $scope.DisabilityRiskScoreJSON.Color;
  if($scope.DisabilityRiskScoreJSON.ColorWithout == null) $scope.DisabilityRiskScoreJSON.ColorWithout =0;
  $scope.ColorWithout = $scope.DisabilityRiskScoreJSON.ColorWithout;
  $scope.TotalVisionList = 'Without Vision ('+$scope.VisionWith+'), With Limited Vision ('+$scope.VisionWithout+ '), Without Perception of Color ('+$scope.Color+')';
  $scope.TotalVision = $scope.VisionWith + $scope.VisionWithout + $scope.Color;

	//Hearing
  $scope.HearingTotal = 0;

  if($scope.DisabilityRiskScoreJSON.Hearing == null) $scope.DisabilityRiskScoreJSON.Hearing =0;
  $scope.Hearing = $scope.DisabilityRiskScoreJSON.Hearing;
  if($scope.DisabilityRiskScoreJSON.HearingWith == null) $scope.DisabilityRiskScoreJSON.HearingWith =0;
  $scope.HearingWith = $scope.DisabilityRiskScoreJSON.HearingWith;
  if($scope.DisabilityRiskScoreJSON.HearingWithout == null) $scope.DisabilityRiskScoreJSON.HearingWithout =0;
  $scope.HearingWithout = $scope.DisabilityRiskScoreJSON.HearingWithout;
  $scope.HearingTotalList = 'Without Hearing  ('+ $scope.HearingWith +')'+ ', With Limited Hearing ('+$scope.HearingWithout+')';
  $scope.HearingTotal = $scope.HearingWith + $scope.HearingWithout ;

	//Cognitive
  $scope.TotalCognitive=0;
  if($scope.DisabilityRiskScoreJSON.Cognitive == null) $scope.DisabilityRiskScoreJSON.Cognitive =0;
  $scope.Cognitive = $scope.DisabilityRiskScoreJSON.Cognitive;
  if($scope.DisabilityRiskScoreJSON.Learning == null) $scope.DisabilityRiskScoreJSON.Learning =0;
  $scope.Learning = $scope.DisabilityRiskScoreJSON.Learning;
  if($scope.DisabilityRiskScoreJSON.Speech == null) $scope.DisabilityRiskScoreJSON.Speech =0;
  $scope.Speech = $scope.DisabilityRiskScoreJSON.Speech;
  if($scope.DisabilityRiskScoreJSON.Language == null) $scope.DisabilityRiskScoreJSON.Language =0;
  $scope.Language = $scope.DisabilityRiskScoreJSON.Language + $scope.Speech;
  $scope.TotalCognitiveList = 'With Limited Language, Cognitive, and Learning Abilities ('+$scope.Cognitive+')'+ ', Without Speech ('+$scope.Speech+' )';
  $scope.TotalCognitive = $scope.Cognitive + $scope.Speech;

	//Photosensitivity
	$scope.TotalPhotosensitive =0;
	if($scope.DisabilityRiskScoreJSON.Photosensitive == null) $scope.DisabilityRiskScoreJSON.Photosensitive =0;
	$scope.Photosensitive = $scope.DisabilityRiskScoreJSON.Photosensitive;
	if($scope.DisabilityRiskScoreJSON.AbilitiesPhotosensitive == null) $scope.DisabilityRiskScoreJSON.AbilitiesPhotosensitive =0;
	$scope.AbilitiesPhotosensitive = $scope.DisabilityRiskScoreJSON.AbilitiesPhotosensitive;
	if($scope.DisabilityRiskScoreJSON.Seizure == null) $scope.DisabilityRiskScoreJSON.Seizure =0;
	$scope.Mobility = $scope.DisabilityRiskScoreJSON.Seizure;
	if($scope.DisabilityRiskScoreJSON.Epilepsy == null) $scope.DisabilityRiskScoreJSON.Epilepsy =0;
	$scope.Epilepsy = $scope.DisabilityRiskScoreJSON.Epilepsy;
	$scope.TotalPhotosensitive = $scope.Photosensitive;
	$scope.TotalPhotosensitiveList = 'Photosensitive Epilepsy / Photosensitive Seizure Disorders ('+$scope.Photosensitive+')';

	//MObility
  $scope.TotalMobility = 0;
  if($scope.DisabilityRiskScoreJSON.Manipulation == null) $scope.DisabilityRiskScoreJSON.Manipulation =0;
  $scope.Manipulation = $scope.DisabilityRiskScoreJSON.Manipulation;
  if($scope.DisabilityRiskScoreJSON.ManipulationWithout == null) $scope.DisabilityRiskScoreJSON.ManipulationWithout =0;
  $scope.ManipulationWithout = $scope.DisabilityRiskScoreJSON.ManipulationWithout;
  $scope.TotalMobility =  $scope.Manipulation;
  $scope.TotalMobilityList = 'With Limited Manipulation ('+ $scope.Manipulation+ ')';
  $scope.TotalImpactedGroupNo = 0;
  $scope.TotalImpactedGroupNo = $scope.TotalMobility + $scope.TotalPhotosensitive +  $scope.TotalCognitive + $scope.HearingTotal + $scope.TotalVision;
  if($scope.isDraft == true)
  $scope.TotalImpactedGroupNo = $scope.TotalImpactedGroupNo + ' (Final score will be determined upon completion of testing.)';
	/* commented  because we need to work on score range to display risk message
	$scope.impctLevel = '';
	if($scope.DisabilityRiskScore <0.34) $scope.DisabilityRiskScore =0 ;
	if ($scope.DisabilityRiskScore >=0 && $scope.DisabilityRiskScore < 5)
	$scope.impctLevel = '  - Low impact';
    if ($scope.DisabilityRiskScore >=5 && $scope.DisabilityRiskScore < 9)
	$scope.impctLevel = '  - Medium impact';
    if ($scope.DisabilityRiskScore >=9 && $scope.DisabilityRiskScore < 13)
	$scope.impctLevel= '  - High impact';
    if ($scope.DisabilityRiskScore >=13)
	$scope.impctLevel = '  - Critical impact';
    $scope.DisabilityRiskScore = $scope.DisabilityRiskScore + '  %  ';
	*/
	if($scope.isDraft == true)
	$scope.DisabilityRiskScore = $scope.DisabilityRiskScore + '  - Select all  test results to get accurate score'

  //$scope.DisabilityRiskScore = $scope.TotalImpactedGrpString.split(',').length +'   '+ $scope.TotalImpactedGrpString;
  //$scope.DisabilityRiskScore = Array.from(new Set($scope.TotalImpactedGrpString.split(" ',"))).toString();

  $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection.filter($scope.onlyUnique);

  $scope.DisabilityImpactCollection = Array.from(new Set($scope.DisabilityImpactCollection));
  $scope.DisabilityImpactCollectionString ="";
  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollection.toString();
  $scope.DisabilityImpactCollectionString = Array.from(new Set($scope.DisabilityImpactCollectionString.split(','))).toString();
  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/(^\s*)|(\s*$)/gi,""); //removes start and end spaces from string
  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/[ ]{2,}/gi," "); //reduces multiple spaces to single space
  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/^,/, ''); //removes first comma from string
  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/,\s*$/, " "); //removes comma from last of string
  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/,+/g, ','); //removes multiple commas from string
  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/'/g,'');//removes single quotes

  if($scope.DisabilityImpactCollection.length >0){
    $scope.DisabilityImpactCollectionLength = true;
    $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollectionString;
    if($scope.isDraft == true)
      $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection + '  - Select all test results to get accurate impacted group';
    } else {
      document.getElementById("dsblImpctDsply").innerHTML = 'No One Impacted';
      $scope.DisabilityImpactCollection = 'No One Impacted';
      if($scope.isDraft == true)
      $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection + '  - Select all  test results to get accurate impacted group';
    }

	 /* commented out because we dont want to display duplicate groups based on failed test conditions

	  for(let p=0; p< $scope.DisabilityImpactCollection.length; p++){
	  if($scope.DisabilityImpactCollection[p] == "<br>"){

		  $scope.DisabilityImpactCollectionLength = false;
	  }
	  if($scope.DisabilityImpactCollection[p] != "<br>"){
		  $scope.DisabilityImpactCollectionLength = true;
		  break;

	  }

	  }
	  $scope.DisabilityImpactCollectionClean=[];
	  var temp = "<br>"+"";
	  for(let t=0; t< $scope.DisabilityImpactCollection.length;t++){
		  if($scope.DisabilityImpactCollection[t] != temp)
		$scope.DisabilityImpactCollectionClean.push($scope.DisabilityImpactCollection[t]);

	  }

      $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollectionClean;
	  $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection.filter($scope.onlyUnique); */
    $scope.DisabilityImpactCollection.toString().replace(/, /g, "").trim();
    $scope.DisabilityImpactCollection.toString().replace(/,/g, ", ").trim();
    $scope.DisabilityImpactCollection.toString().replace(/[,\s]{2,}/, "");
    $scope.displaytstRslt=true; $scope.filterResult1 = true;
    $scope.$apply();
  }

//if($scope.checked2== true){alert('a')};
function KeyPress(e) {
  var evtobj = window.event? event : e

  if($scope.dataLoaded == true){
    if (evtobj.keyCode == 83 && evtobj.altKey) document.getElementById("sbtBtn").click();  //Alt+s to save
    //if (evtobj.keyCode == 75 && evtobj.altKey) document.getElementById("fileinput").click();  //Alt+s to save
    }
  }
  document.onkeydown = KeyPress;
}

$scope.capturedFormData = "";
$scope.capturedTableData = [];
$scope.capturedTableDataCollection = [];

$scope.saveHtml = function() {
  setTimeout(function() {
  	alert("Please keep  both JSON & HTML files for future reference.Printer-friendly HTML report has been saved to your Downloads folder (unless otherwise specified).");
  }, 6000);
  $scope.saveHtmlIsClickedd = true;

	//This creates WCAG report <caption>WCAG Report </caption>
	var WCAG = "<table class=\"table2\">";

  WCAG += "<tr>";
  WCAG += "<th scope=\"col\"  title=\"Criteria\"  width=\"98px\">" + "Criteria" + "</th>";
  WCAG += "<th scope=\"col\"  title=\"Conformance Level\" width=\"218px\">" + "Conformance Level" + "</th>";
  WCAG += "<th scope=\"col\"  title=\"Guideline\" width=\"250px\">" + "Standard/Guideline" + "</th>";
  WCAG += "<th scope=\"col\"  title=\"Remarks and Explanations\" width=\"398px\">" + "Remarks and Explanations" + "</th>";
  //WCAG += "<th scope=\"col\"  title=\"Impacted Group\" width=\"398px\">" + "Impacted Group" + "</th>";
  WCAG += "</tr>";


  for (let i = 0; i < $scope.jsonData[0].SuccessCriteria.length; i++) {
	let d=i+1;
    WCAG += "<tr >";
    WCAG += "<th scope=\"row\" width=\"100px\" title=\"Criteria\">" + $scope.jsonData[0].SuccessCriteria[i].CrtID; + "</th>";
    WCAG += "<td  width=\"220px\" title=\"Conformance Level\">" + $scope.jsonData[0].SuccessCriteria[i].ConformanceLvl; + "</td>";
    WCAG += "<td width=\"250px\" title=\"Guideline\">" + $scope.jsonData[0].SuccessCriteria[i].Guideline; + "</td>";
    WCAG += "<td width=\"400px\" title=\"Remarks and Explanations\">" + $scope.jsonData[0].SuccessCriteria[i].RemarkExplntn; + "</td>";
   //WCAG += "<th scope=\"col\"  title=\"Impacted Group\" width=\"398px\">" + $scope.jsonData[0].SuccessCriteria[i].DisabilityImpact; + "</th>";
    WCAG += "</tr>";
  }
  WCAG += "</table>";

  //this creates html test report  <caption> Test Results</caption>
  var testResult = "<table class=\"table1\" >";

  testResult += "<tr>";
  // testResult += "<th scope=\"col\"  title=\"Issue No.\" width=\"50px\">" + "Issue No." + "</th>";
  testResult += "<th scope=\"col\"  title=\"Test Name\"  width=\"50px\">" + "Test Name" + "</th>";
  testResult += "<th scope=\"col\"  title=\"Test ID\" width=\"50px\">" + "Test ID" + "</th>";
  testResult += "<th scope=\"col\"  title=\"Test Condition\" width=\"150px\">" + "Test Condition" + "</th>";
  testResult += "<th scope=\"col\"  title=\"Criteria ID\" width=\"125px\">" + "Criteria ID" + "</th>";
  //testResult += "<th scope=\"col\"  title=\"Test\" width=\"60px\">" + "Test" + "</th>";
  testResult += "<th scope=\"col\"  title=\"Test Result\" width=\"150px\">" + "Test Result" + "</th>";
	testResult += "<th scope=\"col\" title=\"Tester's Comment\" width=\"180px\">" + "Tester Comments" + "</th>";
	testResult += "<th scope=\"col\"  title=\"Location/Screen\" width=\"250px\">" + "Location/Screen" + "</th>";
  //testResult += "<th scope=\"col\"  title=\"Browser Type\" width=\"80px\">" + "Browser Type" + "</th>";
  //testResult += "<th scope=\"col\"  title=\"Browser Versions\" width=\"80px\">" + "Browser Ver." + "</th>";
  //testResult += "<th scope=\"col\" title=\"Screenshot\" >" + "Screenshot" + "</th>";
  testResult += "<th scope=\"col\"  title=\"Global Issue\" width=\"120px\">" + "Global Issue" + "</th>";
  testResult += "<th scope=\"col\" title=\"Remediation Details\" width=\"250px\">" + "Remediation Details" + "</th>";
	//testResult += "<th scope=\"col\" title=\"Screenshot\" >" + "Remediation Screenshot" + "</th>";
	// testResult += "<th scope=\"col\"  title=\"Remediation Date\" width=\"60px\">" + "Remediation Date" + "</th>";
  testResult += "</tr>";

  for (let i = 0; i < $scope.jsonData[0].Criteria.length; i++) {
    if ($scope.jsonData[0].Criteria[i].TestResult == 'undefined') $scope.jsonData[0].Criteria[i].TestResult ='';
    let d=i+1;
    //if($scope.noResult[i]== true && $scope.TestResult[i]== $scope.filterResult){
    if($scope.TestResult[i]== $scope.filterResult){
      testResult += "<tr >";
      // testResult += "<th  title=\"Issue Number\"> Issue " + i + "</th>";
      testResult += "<th   scope=\"row\" title=\"Test Name\">" + $scope.jsonData[0].Criteria[i].TestName; + "</th>";
      testResult += "<td title=\"Test ID\">" + $scope.jsonData[0].Criteria[i].TestID; + "</td>";
      testResult += "<td title=\"Test Condition\">" + $scope.jsonData[0].Criteria[i].TestCondition; + "</td>";
      testResult += "<td title=\"Success Criteria\">" + $scope.jsonData[0].Criteria[i].CrtID; + "</td>";
      // testResult += "<td title=\"Test\">" + $scope.jsonData[0].Criteria[i].Test; + "</td>";
      testResult += "<td title=\"Test Result\">" + $scope.jsonData[0].Criteria[i].TestResult; + "</td>";
      testResult += "<td title=\"Tester's comment\">" + $scope.jsonData[0].Criteria[i].TesterComment; + "</td>";
      testResult += "<td title=\"Location\">" + $scope.jsonData[0].Criteria[i].location; + "</td>";
      //testResult += "<td title=\"Browser Type\">" + $scope.jsonData[0].Criteria[i].T_brwsrType; + "</td>";
      //testResult += "<td title=\"Browser's Version\">" + $scope.jsonData[0].Criteria[i].T_brwsrVrsn; + "</td>";
      //testResult += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"ScreenShot Captured\">" + "<img id=\""+$scope.jsonData[0].Criteria[i].Counter+"\" width=\"350\"  alt=\"screenshot captured\" src= \"" + $scope.ImageSrc[i] + '" '+"onerror=\"this.style.display='none'\"" + "\>" + "</td>";
      testResult += "<td title=\"Global Issue\">" + $scope.jsonData[0].Criteria[i].GlobalIssue; + "</td>";
      testResult += "<td title=\"Remediation Details\">" + $scope.jsonData[0].Criteria[i].RemediationDetails; + "</td>";
      //testResult += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"ScreenShot Captured\">" + "<img id=\""+$scope.jsonData[0].Criteria[i].Counter+"\" width=\"350\"  alt=\"screenshot captured\" src= \"" + $scope.ImageSrc2[i] + '" '+"onerror=\"this.style.display='none'\"" + "\>" + "</td>";
      // testResult += "<td title=\"Remediation Date\">" + $scope.jsonData[0].Criteria[i].RemediationDate; + "</td>";

      testResult += "</tr>";
    }

    //if($scope.noResult[i]== true && $scope.filterResult1== true){
    if($scope.filterResult1== true){
      testResult += "<tr >";
      // testResult += "<td  title=\"Issue Number\"> Issue " + i; + "</td>";
      testResult += "<th scope=\"row\" title=\"Test Name\">" + $scope.jsonData[0].Criteria[i].TestName; + "</th>";
      testResult += "<td title=\"Test ID\">" + $scope.jsonData[0].Criteria[i].TestID; + "</td>";
      testResult += "<td title=\"Test Condition\">" + $scope.jsonData[0].Criteria[i].TestCondition; + "</td>";
      testResult += "<td title=\"Success Criteria\">" + $scope.jsonData[0].Criteria[i].CrtID; + "</td>";
      // testResult += "<td title=\"Test\">" + $scope.jsonData[0].Criteria[i].Test; + "</td>";
      testResult += "<td title=\"Test Result\">" + $scope.jsonData[0].Criteria[i].TestResult; + "</td>";
      testResult += "<td title=\"Tester's comment\">" + $scope.jsonData[0].Criteria[i].TesterComment; + "</td>";
      testResult += "<td title=\"Location\">" + $scope.jsonData[0].Criteria[i].location; + "</td>";
      //testResult += "<td title=\"Browser Type\">" + $scope.jsonData[0].Criteria[i].T_brwsrType; + "</td>";
      //testResult += "<td title=\"Browser's Version\">" + $scope.jsonData[0].Criteria[i].T_brwsrVrsn; + "</td>";
      //testResult += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"ScreenShot Captured\">" + "<img id=\""+$scope.jsonData[0].Criteria[i].Counter+"\" width=\"350\"  alt=\"screenshot\" src= \"" + $scope.ImageSrc[i] + '" '+"onerror=\"this.style.display='none'\"" + "\>" + "</td>";
      testResult += "<td title=\"Global Issue\">" + $scope.jsonData[0].Criteria[i].GlobalIssue; + "</td>";
      testResult += "<td title=\"Remediation Details\">" + $scope.jsonData[0].Criteria[i].RemediationDetails; + "</td>";
      //testResult += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"ScreenShot Captured\">" + "<img id=\""+$scope.jsonData[0].Criteria[i].Counter+"\" width=\"350\"  alt=\"screenshot\" src= \"" + $scope.ImageSrc2[i] + '" '+"onerror=\"this.style.display='none'\"" + "\>" + "</td>";
      // testResult += "<td title=\"Remediation Date\">" + $scope.jsonData[0].Criteria[i].RemediationDate; + "</td>";

      testResult += "</tr>";
      }
    }

  testResult += "</table>";

  var RSCSCORE = "<table class=\"table2\" > <caption>Score Breakdown </caption>";

  RSCSCORE += "<tr>";
  RSCSCORE += "<th scope=\"col\"  title=\"Disability Group\"  width=\"250px\">" + "Disability Group" + "</th>";
  RSCSCORE += "<th scope=\"col\"  title=\"Risk Score\" width=\"100px\">" + "Risk Score" + "</th>";
  RSCSCORE += "<th scope=\"col\"  title=\"Detailed Impacted Groups (with Score)\" width=\"550px\">" + "Detailed Impacted Groups (with Score)" + "</th>";
  RSCSCORE += "</tr>";
  RSCSCORE += "<tr >";
  RSCSCORE += "<th scope=\"row\" width=\"250px\" title=\"Vision\">" + "Vision" + "</th>";
  RSCSCORE += "<td  width=\"100px\" title=\"Risk Score for Vision \">" + $scope.TotalVision; + "</td>";
  RSCSCORE += "<td width=\"550px\" title=\"Detailed Impacted Groups for Vision\">" + $scope.TotalVisionList; + "</td>";
  RSCSCORE += "</tr>";

  RSCSCORE += "<tr >";
  RSCSCORE += "<th scope=\"row\" width=\"250px\" title=\"Hearing\">" + "Hearing" + "</th>";
  RSCSCORE += "<td  width=\"100px\" title=\"Risk Score for Hearing\">" + $scope.HearingTotal; + "</td>";
  RSCSCORE += "<td width=\"550px\" title=\"Detailed Impacted Groups for Hearing\">" + $scope.HearingTotalList; + "</td>";
  RSCSCORE += "</tr>";

  RSCSCORE += "<tr >";
  RSCSCORE += "<th scope=\"row\" width=\"250px\" title=\"Cognitive\">" + "Cognitive" + "</th>";
  RSCSCORE += "<td  width=\"100px\" title=\"Risk Score for Cognitive\">" + $scope.TotalCognitive; + "</td>";
  RSCSCORE += "<td width=\"550px\" title=\"Detailed Impacted Groups for Cognitive\">" + $scope.TotalCognitiveList; + "</td>";
  RSCSCORE += "</tr>";

  RSCSCORE += "<tr >";
  RSCSCORE += "<th scope=\"row\" width=\"250px\" title=\"Photosensitivity\">" + "Photosensitivity" + "</th>";
  RSCSCORE += "<td  width=\"100px\" title=\"Risk Score for Photosensitivity\">" + $scope.TotalPhotosensitive; + "</td>";
  RSCSCORE += "<td width=\"550px\" title=\"Detailed Impacted Groups for Photosensitivity\">" + $scope.TotalPhotosensitiveList; + "</td>";
  RSCSCORE += "</tr>";

  RSCSCORE += "<tr >";
  RSCSCORE += "<th scope=\"row\" width=\"250px\" title=\"Mobility\">" + "Mobility" + "</th>";
  RSCSCORE += "<td  width=\"100px\" title=\"Risk Score for Mobility\">" + $scope.TotalMobility; + "</td>";
  RSCSCORE += "<td width=\"550px\" title=\"Detailed Impacted Groups Mobility\">" + $scope.TotalMobilityList; + "</td>";
  RSCSCORE += "</tr>";

  RSCSCORE += "</table>";

  $scope.capturedFormData = "<!DOCTYPE html>" +
  "<html lang=\"en\">" +
  "<head>" +
  "<title>"+$scope.productID+" AEA</title>" +

  "<style>  body{font-family: \"Franklin Gothic Book\", \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} h1,h2{color: #F8F8FF; background-color: rgb(0, 51, 102);font-family: \"Franklin Gothic Book\",\"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";}  table { font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\"; text-decoration:none; border-collapse: collapse; width: 100%; display:block; padding: 3px; } td, th { border: 1px solid #A9A9A9; text-align: left; padding: 3px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} th{vertical-align: top;} tr:nth-child(even) { background-color: #F0FFFF; padding-top: 0px; padding-bottom: 0px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} tr, th {vertical-align: top;} @media print {#printPageButton {display: none;}} @media print {.pagebreak { page-break-before: always; } /* page-break-after works, as well */ }</style>" +

  "</head>" +

  "<div><img src=\" Logo.jpg\" alt=\"Kaffeinated Kodemonkey logo\" title=\"PRoject Logo\" style=\"width:18%; margin-top: 20px;\">" +
  "<!-- <strong> | <em>AEA</em> Report</strong> --></br>"+

  "<button id=\"printPageButton\" style=\"background-color:rgb(0, 51, 102); color: white; padding-left: 0em; text-align: center; width: 15%;font-size: 100%;border: 2px solid black;border-radius: 5px;\" onclick=\"myPrint()\">Print this page</button> <br>" +

  "<h1>"+$scope.companyname+" AEA Report </h1>" +
  // "<span> Based on VPAT® Version 2.4 </span>"+

  "<h2 id=\"draftMsg\"  style=\"color: #FFFFFF; background-color: #be0004;\" hidden>" + $scope.draftMsg  +"</h2> " +
  "<p>This product was tested using the Trusted Tester Section 508 Conformance Test method: " + $scope.evalMethod +" "+ $scope.evalMethodVrsn + ". <br>" +
  "The A11y Audit scans the product and outlines any A11y issues found. <br> A TTAD manually evaluates a sampling of pages to confirm the results are accurate and no further testing is need. <br>" +
  "The responsibility for full and complete testing and compliance remains with the owner of the product.</p>" +

  "<b>Review Date:  &nbsp;  </b>" + $scope.dateSubmitted + "<br>" +
  "<h2> Product Information </h2>" +
  "<input type=\"text\" hidden id=\"isDraftValue\" value=" +  $scope.isDraft+ "> "   +
  "<b> Product Name:  &nbsp;  </b>" + $scope.productID + "<br>" +
  "<b>Product Version:  &nbsp;  </b>" + $scope.ownerID + "<br>" +
  "<b>Product Owner/Vendor:  &nbsp;  </b>" + $scope.versionID + "<br>" +
  "<b>Product Type:  &nbsp;  </b>" + $scope.productType + "<br>" +
  "<b>Location:  &nbsp;  </b>" + $scope.urlID + "<br>" +
  "<b>Product Description:  &nbsp;  </b>" + $scope.prodDescID + "<br>" +

  "<h2> Tester's Information </h2>" +
  "<strong>Tester's First Name:  &nbsp;  </strong>" + $scope.firstname + "<br>" +
  "<strong>Tester's Last Name:  &nbsp;  </strong>" + $scope.lastname + "<br>" +
  "<strong>Trusted Tester ID:  &nbsp;  </strong>" + $scope.testerID + "<br>" +
  "<strong>Company Name:  &nbsp;  </strong>" + $scope.companyname + "<br>" +
  "<strong>Tester's Email:  &nbsp;  </strong>" + $scope.testerContact + "<br>" +
  "<strong>Notes:  &nbsp;  </strong>" + $scope.testScope + "<br>" +

  "<h2> Test Environment Information </h2>" +
  "<strong>Browser:  &nbsp;  </strong>" + $scope.myBrowserTested + "<br>" +
  "<strong>Browser Version: &nbsp;  </strong>" + $scope.myBrowser + "<br>" +
  //"<strong>Compatibility View:  &nbsp;  </strong>" + $scope.compID + "<br>" +
  "<strong>Operating System:  &nbsp;  </strong>" + $scope.myOpsysTested + "<br>" +
  //"<strong>Operating System Version:  &nbsp;  </strong>" + $scope.myOpsys + "<br>" +

  "<strong>Testing Method:  &nbsp;  </strong>" + $scope.evalMethod + "<br>" +
  "<strong>Testing Method Version:  &nbsp;  </strong>" + $scope.evalMethodVrsn + "<br>" +
  "<h2> Terms used in the Conformance Level </h2> <ul> <li> <strong>Supports:</strong> The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation. </li>  <li> <strong>Does Not Support:</strong> The majority of product functionality does not meet the criterion.</li> <li> <strong>Not Applicable:</strong> The criterion is not relevant to the product. </li> <li> <strong>Not Evaluated:</strong> The product has not been evaluated against the criterion.  This can only be used in WCAG 2.x Level AAA.</li> </ul> <br>" +

  "<div class=\"pagebreak\"> </div>"+

  "<h2> Web Content Accessibility Guidelines (WCAG) Report </h2>" + WCAG + "<br>" +

  "<!--<div class=\"pagebreak\"> </div>-->"+

  "<h2> Test Results </h2>" + testResult + "<br>" +
  "<h2> Disability Impact Score </h2>" +$scope.impctInfoMsg+"<br><br> <strong>Risk Score: "+$scope.TotalImpactedGroupNo+"</strong><br>"+ RSCSCORE + "<br><br>" +
  //"<b>Your feedback is important to us! Please take the <a title=\"ACRT Survey\" href= \"https://www.surveymonkey.com/r/DHSACRT\" target=\"_blank\"   id=\"surveyID\"> ACRT Survey </a> </b>"+
  //"<h2> End of Report </h2>" +
  "<script>function myPrint(){window.print(); }; if(document.getElementById('isDraftValue').value==\"true\")document.getElementById('draftMsg').style.display = \"block\";  </script>" +
  "<script> function zoom("+0+") { var modal = document.getElementById("+0+"); var img = document.getElementById(\"image\" + "+0+"); var modalImg = document.getElementById(\"img\" + "+0+"); var captionText = document.getElementById(\"caption\" + "+0+"); var span = document.getElementsByClassName(\"close\")["+0+"]; img.onclick = function() { modal.style.display = \"block\"; modalImg.src = this.src; captionText.innerHTML = this.alt; }span.onclick = function() { modal.style.display = \"none\"; } } </script>"+
  "</body>" +
  "</html>";

  var htmlContent = [$scope.capturedFormData];

  var bl = new Blob(htmlContent, {
  type: "text/html"
  });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(bl);
  //a.download = "ACRTHtmlResult.html";
  a.download = $scope.productID+$scope.ownerID+'.html';
  a.hidden = true;
  document.body.appendChild(a);
  a.innerHTML = "This section will not be visible";
  a.click();
  }

  function asgnValue() {
  $scope.saveHtmlIsClickedd = false;
  }

  });
