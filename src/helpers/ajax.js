module.exports = (data,url='https://www.afrikhealth.com/mega-course/sendMail.php') =>{
  return new Promise((resolve)=>{
     const xhr = new XMLHttpRequest();
     xhr.addEventListener("load", () =>{
      resolve(JSON.parse(xhr.responseText));
     });
     xhr.addEventListener("error", () =>{
       resolve({message:"Pas de connexion internet, veuillez réessayer."});
     });
     xhr.responseType = "text";
     xhr.open('POST',url, true);
     xhr.send(data);
  });
 };
