const gifHandler = async (event) => {
    event.preventDefault();
  
    // DOM targeting and remove accidental spaces
    const sourceGif = document.querySelector('#sourceGif').value.trim();
    const sourceText = document.querySelector('#sourceText').value.trim();
    const sourceName = document.querySelector('#sourceName').value.trim();
  
    console.log(`Name: ${sourceName}, URL: ${sourceGif}, Text: ${sourceText}`);
    // Test user has provided an email and a password
    if (sourceGif && sourceText && sourceName) {
      // Call the login route with the userdata
       const gifEncodeFetch = await fetch('/api/image/makeGif', {
        method: 'POST',
        body: JSON.stringify({ sourceGif, sourceText, sourceName }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (gifEncodeFetch.status === 200) {
        console.log('success');
      }
    }
  };

// DOM targeting and listener for form submission
document
.getElementById('gif-form')
.addEventListener('click', gifHandler);