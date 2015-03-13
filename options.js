function save_options() {
  var hotkey = document.getElementById('hotkey').value.charAt(0);
  chrome.storage.sync.set({
    savedHotkey: hotkey
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Saved.  Please reload NewsBlur for change to take effect.';
    setTimeout(function() {
      status.textContent = '';
    }, 5000);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    savedHotkey: ';'
  }, function(items) {
    document.getElementById('hotkey').value = items.savedHotkey.charAt(0);
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

