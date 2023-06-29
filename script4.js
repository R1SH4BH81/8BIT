window.addEventListener('load', function() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (screenWidth < 960 || isMobileDevice) {
    window.location.href = 'restricted.html';
  }
});
function theme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    // Switched to dark mode
    themeIcon.src = 'sun1.gif';
    themeIcon.title = 'Switch to light mode';
  } else {
    // Switched to light mode
    themeIcon.src = 'moon.png';
    themeIcon.title = 'Switch to dark mode';
  }
}
document.addEventListener('keydown', function(event) {
  // Check if Alt + W is pressed
  if (event.altKey && event.key === 'w') {
    changeWallpaper();
  }
});


let wallpaperUrls = [
  'https://images.unsplash.com/photo-1566738780863-f9608f88f3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80',
  'https://th.bing.com/th/id/OIP.7HRtOe-L_ymXQZ5mXZ18nQHaEK?pid=ImgDet&rs=1',
  'https://wallpaperaccess.com/full/4408994.jpg',
  'https://images.wallpapersden.com/image/download/kite-colorful-pattern_bGZoZmmUmZqaraWkpJRmbmdlrWZnZWU.jpg',
  'https://th.bing.com/th/id/R.71da97160b8a15de4f769ef5c946b924?rik=v9mPbR4W3ieoWw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f311977-abstract.jpg&ehk=6tUQa3h%2bBwrTI89RIXdsbOryEGqRprr5P2CTWeHOlfI%3d&risl=&pid=ImgRaw&r=0'
  // Add more wallpaper URLs as needed
];
let currentWallpaperIndex = 0;

function changeWallpaper() {
  var desktop = document.querySelector('.desktop-1');
  
  currentWallpaperIndex = (currentWallpaperIndex + 1) % wallpaperUrls.length;
  var newWallpaper = wallpaperUrls[currentWallpaperIndex];

  desktop.style.backgroundImage = `url("${newWallpaper}")`;
}



document.addEventListener('keydown', function(event) {
  // Check if Alt + T is pressed
  if (event.altKey && event.key === 'q') {
    theme();
  }
});
