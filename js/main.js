function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  var end;
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

if (getCookie("nightMode") === "true") {
  $("body").addClass("nightMode")
}

// Tema tercihini kontrol eden fonksiyon
function checkTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Karanlık tema tercih ediliyorsa
    document.body.classList.add('nightMode');
  } else {
    // Açık tema tercih ediliyorsa
    document.body.classList.remove('nightMode');
  }
}

// İlk yükleme için tema kontrolü
checkTheme();

// Kullanıcının tema tercihindeki değişiklikleri dinle
window.matchMedia('(prefers-color-scheme: dark)').addListener(checkTheme);