---
layout: page
permalink: /stream/
title: Live Stream
---

<div id="gatekeeper" style="text-align: center; margin-top: 50px;">
  <h2>🔒 Private Access</h2>
  <p>Enter the password to join the stream.</p>
  <input type="password" id="site-pass" style="padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
  <button onclick="unlockStream()" style="padding: 10px 20px; cursor: pointer;">Enter</button>
  <p id="err" style="color: red; display: none; margin-top: 10px;">Incorrect password.</p>
</div>

<div id="video-container" style="display: none; width: 100%; max-width: 1000px; margin: 0 auto;">
  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe 
        id="stream-iframe"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
        src="" 
        allow="autoplay; fullscreen; picture-in-picture; microphone; camera;"
        allowfullscreen>
            </iframe>
  </div>
  <p style="text-align: center; margin-top: 10px;">
    <em>Tip: If audio is muted, click the video player to enable sound.</em>
  </p>
</div>

<script>
function unlockStream() {
  const input = document.getElementById('site-pass').value;
  
  // Set your desired website password here
  if (input === "hkustcc-msss") {
    // This is your working VDO.Ninja link
    const permanentUrl = "https://vdo.ninja/?scene=1&room=hkustCC_2026&password=msss-cycling&autoplay=1&controls=1";
    
    document.getElementById('stream-iframe').src = permanentUrl;
    document.getElementById('gatekeeper').style.display = 'none';
    document.getElementById('video-container').style.display = 'block';
  } else {
    document.getElementById('err').style.display = 'block';
  }
}

// Allow Enter key to submit
document.getElementById('site-pass').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') unlockStream();
});
</script>