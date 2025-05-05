

  document.addEventListener("DOMContentLoaded", function () {
    // Add the loading-active class to the body
    document.body.classList.add("loading-active");

    // Remove the loading screen after 3 seconds
    setTimeout(function () {
      document.getElementById("loading-item").style.display = "none";
      document.body.classList.remove("loading-active");
    },300);
  });
