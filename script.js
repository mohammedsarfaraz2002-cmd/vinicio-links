function copyEmail() 
{
  const email = "vinu@adivisory.com";

  navigator.clipboard.writeText(email).then(() => 
    {
        alert("CEO email copied to clipboard!");
    });
}