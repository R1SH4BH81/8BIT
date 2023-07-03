function openChatWindow() {
  var chatWindow = window.open("https://chat.openai.com/", "_blank", "width=400,height=600");
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



function reportError() {
        // Email details
        var recipient = 'rishabhmishra.81e@gmail.com';
        var subject = 'Error Report';
        var body = 'Please describe the error you encountered:';
  
        // Create a mailto link
        var mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  
        // Open the user's default email client
        window.location.href = mailtoLink;
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
      var chatWindow = window.open("login.html", "_blank", "width=500,height=480");
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
