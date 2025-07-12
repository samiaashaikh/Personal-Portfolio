document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadResume");

  downloadBtn.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "Samiaa_Resume.pdf";  // your resume file path
    link.download = "Samiaa_Resume.pdf";  // optional: file name on download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
