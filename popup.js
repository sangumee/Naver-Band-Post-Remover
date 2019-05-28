/* Scripts */

let deleteItems = document.getElementById('deleteItems'); // Click Event Catch

/* Remove Post & Comment Process */
deleteItems.onclick = function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id, {
        code: `
        function removePosts(selectAllButtons){
          for(const button of selectAllButtons){
            button.click();
          }
          document.getElementsByClassName('_btnDelete')[0].click();
        }
        
        function scrollBottom() {
          for(var i=0; i<6; i++){
            window.scrollTo(0, document.body.scrollHeight);
          }
        }
        
        var selectAllButtons = document.getElementsByClassName('checkInput');
        removePosts(selectAllButtons);
        scrollBottom();
        `
      });
  });
};

