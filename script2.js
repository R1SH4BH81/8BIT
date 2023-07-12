function openChatWindow() {
  var chatWindow = window.open("https://chat.openai.com/", "_blank", "width=500,height=600");
  if (chatWindow) {
    console.log("Chat Gpt opened");
  } else {
    console.log("Failed to open Chat Gpt");
    Swal.fire({
      icon: 'warning',
      title: 'Attention',
      text: 'Failed to open Chat GPT.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
  }
}
// Check if the viewCount key exists in localStorage
if (!localStorage.getItem('viewCount')) {
  // If not, create the viewCount key and set its initial value to 0
  localStorage.setItem('viewCount', '0');
}

// Retrieve the current view count from localStorage
var count = parseInt(localStorage.getItem('viewCount'));

// Increment the view count by 1
count++;

// Store the updated view count in localStorage
localStorage.setItem('viewCount', count.toString());

console.log('ignore: ', count);

// Event listener for keydown
window.addEventListener('keydown', function(event) {
  // Check if Shift and F5 keys are pressed simultaneously
  if (event.shiftKey && event.keyCode === 116) {
    // Show view count in a sweet alert message
    Swal.fire({
      title: 'View Count',
      text: 'The current view count is: ' + count,
      icon: 'info'
    });
  }
});


function showMessageBox() {
          document.getElementById('overlay').style.display = 'flex';
        }
        
function hideMessageBox() {
          document.getElementById('overlay').style.display = 'none';
        }
function leader() {
          Swal.fire({
    icon: 'info',
    title: 'Be Patient',
    text: 'This Feature is Coming Soon....',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK',
  });
      }

let fullscreen;
  let fsEnter = document.getElementById('fullscr');
  

  function toggleFullscreen() {
    if (!fullscreen) {
      fullscreen = true;
      document.documentElement.requestFullscreen();
      
     
    } else {
      fullscreen = false;
      document.exitFullscreen();
      
    }
  }

  fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    toggleFullscreen();
  });

function reportError() {
  Swal.fire({
    title: 'Enter the error you encountered',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Submit',
    cancelButtonText: 'Cancel',
    showLoaderOnConfirm: true,
    preConfirm: (name) => {
      
      if (!name) {
        Swal.showValidationMessage('Please enter the error you encountered');
      } else {
        return name;
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const error = result.value;
      // Use the name variable here for further processing
      Swal.fire({
        icon: 'success',
        title: 'Your report has been send to Devs',
        text: 'You Reported: ' + error + '!',
      });
  
   
      const fileContent = `Error: ${error}`;
      //error reported by user is saved in error
      
  
     
    }
  });
  
      }
    
      function openFacebookFeed() {
        // Pre-written text
        var text = 'Check out this awesome online compiler " 8BIT " at compiler81.netlify.app #AwesomeWebsite';
  
        // Create a Facebook URL with pre-written text
        var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(text);
  
        // Open the Facebook feed in a new window with 800x800 size
        window.open(facebookUrl, 'facebook', 'width=800,height=800');
      }
  
      function openInstagramProfile() {
        // Your Instagram profile URL
        var instagramUrl = 'https://www.instagram.com/webwise_media';
  
        // Open your Instagram profile in a new window with 800x800 size
        window.open(instagramUrl, 'instagram', 'width=800,height=800');
      }
  function openTwitterFeed() {
      // Pre-written text
      var text = 'Check out this awesome online compiler " 8BIT " at compiler81.netlify.app #AwesomeWebsite';

      // Create a Twitter URL with pre-written text
      var twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text);

      // Open the Twitter feed in a new window with 800x800 size
      window.open(twitterUrl, 'twitter', 'width=800,height=800');
    }
function openLoginWindow() {
      var chatWindow = window.open("login.html", "_blank");
      if (chatWindow) {
        console.log("Login opened");
      } else {
        console.log("Failed to open Login Page");
        Swal.fire({
          icon: 'warning',
          title: 'Attention',
          text: 'Failed to open Login Page.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        });
      }
    }


var isRated = false;

function openrating() {
  if (isRated) {
    Swal.fire({
      icon: 'info',
      title: 'Already Rated',
      text: 'You have already rated.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
  } else {
    var width = 350;
    var height = 400;
    var left = window.innerWidth / 2 - width / 2;
    var top = window.innerHeight / 2 - height / 2;
    var chatWindow = window.open("star.html", "_blank", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
    if (chatWindow) {
      console.log("ratact");
      isRated = true;
    } else {
      console.log("Failed to open ratact");
      Swal.fire({
        icon: 'warning',
        title: 'Attention',
        text: 'Failed to open rating page.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      });
    }
  }
}
