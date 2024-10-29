const checkboxes = document.querySelectorAll(".lecture-checkbox");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const videoId = this.getAttribute("data-video");
    const labelclass="."+videoId;
    const label=document.querySelector(labelclass);
    const videoContainer = document.getElementById(videoId);
    if (this.checked) {
      videoContainer.style.display = "block";
      label.style.color="red"; 
    } else {
      videoContainer.style.display = "none"; 
      label.style.color="black"; 
    }
  });
});
const videobtn=document.getElementById('videonav');
const videos=document.getElementById('videolist');
videobtn.addEventListener('click',function()
{
    if(videos.style.display=="none")
    {
        videos.style.display="block";
    }
    else
    {
        videos.style.display="none";
    }
});