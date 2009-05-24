<!--
function _antispam_switch_provider_js(myobj) {
  wpapikey = document.getElementById('div-antispam-wpapikey');
  tpapikey = document.getElementById('div-antispam-tpapikey');
  deapikey = document.getElementById('div-antispam-deapikey');
  if (myobj.value == 2) {
    // defensio
    deapikey.style.visibility = "visible";
    deapikey.style.height = ""; // undefined

    wpapikey.style.visibility = "hidden";
    wpapikey.style.height = 0;
    tpapikey.style.visibility = "hidden";
    tpapikey.style.height = 0;
  }
  else if (myobj.value == 1) {
    // typepad antispam
    tpapikey.style.visibility = "visible";
    tpapikey.style.height = ""; // undefined

    wpapikey.style.visibility = "hidden";
    wpapikey.style.height = 0;
    deapikey.style.visibility = "hidden";
    deapikey.style.height = 0;
  }
  else {
    // akismet
    wpapikey.style.visibility = "visible";
    wpapikey.style.height = ""; // undefined

    tpapikey.style.visibility = "hidden";
    tpapikey.style.height = 0;
    deapikey.style.visibility = "hidden";
    deapikey.style.height = 0;
  }
}
// -->
