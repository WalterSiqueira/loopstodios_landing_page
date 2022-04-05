const menu_icon = document.getElementById('menubtn');
const close_icon = document.getElementById('closeMenu');
const menuOff = document.getElementById('headerOff');
const menuOn = document.getElementById('headerOn');

menu_icon.addEventListener('click', function() {
      menuOff.style.display = "none";
      menuOn.style.display = "flex";
});

close_icon.addEventListener('click', function() {
      menuOff.style.display = "flex";
      menuOn.style.display = "none";
});
