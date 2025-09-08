document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("yr").textContent=new Date().getFullYear();
  const form=document.getElementById("admissionForm");
  const success=document.getElementById("formSuccess");
  form.addEventListener("submit",e=>{
    e.preventDefault();
    success.style.display="block";
    form.reset();
  });
});