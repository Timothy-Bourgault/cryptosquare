//BUSINESS LOGIC
function toEncrypt(sentences) {
  var sentencesNoWhite= sentences.replace(/([~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/? ])+/g, '').replace(/^(-)+|(-)+$/g,'');
  var characterArray = sentencesNoWhite.split("");
  var wordArray = sentences.split(" ");
  // alert(sentencesNoWhite.length);
  return sentencesNoWhite;
  alert(rows);
  alert(columns);

  function rowsColumns(sentencesNoWhite) {
    if(Math.sqrt(sentencesNoWhite.length).isInteger){
      var columns = Math.sqrt(sentencesNoWhite.length);
      var rows = Math.sqrt(sentencesNoWhite.length);
    } else {
      var columns = Math.sqrt(sentencesNoWhite.length)
      var rows = Math.round(Math.sqrt(sentencesNoWhite.length))+1
    }
    return rows;
    return columns;
    alert(rows);
    alert(columns);
    };
  };





//USER INTERFACE
$(function() {
  $("form").submit(function(event) {
  event.preventDefault();
  var sentences = $("input").val();

  $("#codedMessage").text(toEncrypt(sentences));
  toEncrypt(sentences);
  //rowsColumns(sentencesNoWhite);
  });
});
