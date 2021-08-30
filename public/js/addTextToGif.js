const gifHandler = async (event) => {
    event.preventDefault();
  
    // DOM targeting and remove accidental spaces
    const sourceGif = document.querySelector('#sourceGif').value.trim();
    const sourceText = document.querySelector('#sourceText').value.trim();
  
    // Test user has provided an email and a password
    if (sourceGif && sourceText) {
      // Call the login route with the userdata
       const gifEncodeFetch = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ sourceGif, sourceText }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (gifEncodeFetch.status === 200) {
        console.log('success');
      }
    }
  };