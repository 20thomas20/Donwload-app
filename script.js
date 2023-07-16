const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', function() {
  const downloadUrl = 'camps-2023.apk';
  window.location.href = downloadUrl;
});
