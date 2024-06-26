function check_element_status() {
  if (document.getElementById('isDefault').checked) {
    document.getElementById('hotkey1').value = 'o';
    document.getElementById('isSecondHotkeyEnabled').checked = true;
    document.getElementById('hotkey2').value = 'v';
    document.getElementById('hotkey1').disabled = true;
    document.getElementById('isSecondHotkeyEnabled').disabled = true;
    document.getElementById('hotkey2').disabled = true;
    return;
  }
  document.getElementById('hotkey1').disabled = false;
  document.getElementById('isSecondHotkeyEnabled').disabled = false;

  if (document.getElementById('isSecondHotkeyEnabled').checked) {
    document.getElementById('hotkey2').disabled = false;
  } else {
    document.getElementById('hotkey2').disabled = true;
    document.getElementById('hotkey2').value = '';
  }
}

function save_options() {
  check_element_status();
  var isDefault = document.getElementById('isDefault').checked ? "true" : "false";
  var hotkey1 = document.getElementById('hotkey1').value.charAt(0);
  var isSecondHotkeyEnabled = document.getElementById('isSecondHotkeyEnabled').checked ? "true" : "false";
  var hotkey2 = document.getElementById('hotkey2').value.charAt(0);
  chrome.storage.local.set({
    savedIsDefault: isDefault,
    savedHotkey1: hotkey1,
    savedIsSecondHotkeyEnabled: isSecondHotkeyEnabled,
    savedHotkey2: hotkey2
  }).then(() => {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Saved. Please reload NewsBlur for changes to take effect.';
    setTimeout(() => {
      status.textContent = '';
    }, 5000);
  }).catch((error) => {
    console.error("Error saving options: ", error);
  });
}

function restore_options() {
  chrome.storage.local.get({
    savedIsDefault: "true",
    savedHotkey1: 'o',
    savedIsSecondHotkeyEnabled: "true",
    savedHotkey2: 'v'
  }).then((items) => {
    document.getElementById('isDefault').checked = items.savedIsDefault == "true";
    document.getElementById('hotkey1').value = items.savedHotkey1.charAt(0);
    document.getElementById('isSecondHotkeyEnabled').checked = items.savedIsSecondHotkeyEnabled == "true";
    document.getElementById('hotkey2').value = items.savedHotkey2.charAt(0);
    check_element_status();
  }).catch((error) => {
    console.error("Error restoring options: ", error);
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('isDefault').addEventListener('click', check_element_status);
document.getElementById('isSecondHotkeyEnabled').addEventListener('click', check_element_status);
