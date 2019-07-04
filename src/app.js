const {Button, TextView, contentView, ImageView,Composite,ScrollView,Picker,TextInput} = require('tabris');
const alertDialog = require('./helpers/alertDialog.js');
const displayFullDate = require('./helpers/displayFullDate.js')();
const pickerChoices = ['Mega 3','Mega 4','Mega 5'];
let userChoice;
const scrollView = new ScrollView({layoutData:'stretch'}).appendTo(contentView)
new ImageView({top:15,left:15,right:15,image:'src/img/course.jpeg',scaleMode:'fill'}).appendTo(scrollView);
new TextView({top:['prev()',15],centerX:0,text:'MEGA COURSE',font:'bold 20px roboto'}).appendTo(scrollView);
const momentDate = new TextView({left:15,right:15,top:['prev()',20],text:`DATE:  ${displayFullDate}`,font:'15px roboto'}).appendTo(scrollView);
const momentHour = new TextView({left:15,right:15,top:['prev()',30],text:`HEURE: ${new Date().getHours()} h ${new Date().getMinutes()} min`,font:'15px roboto'}).appendTo(scrollView);
const compositeChoosenGames = new Composite({left:15,right:15,top:['prev()',20]}).appendTo(scrollView);
new TextView({left:0,top:15,text:'JEU CHOISI:',font:'15px roboto'}).appendTo(compositeChoosenGames);
const pickerChoosenGame = new Picker({left:['prev()',10],top:0,right:0,height:50,message:'Choisir un jeu',itemText:index => pickerChoices[index],textColor:'#000000',itemCount:pickerChoices.length})
.onSelect((target)=>{
  userChoice = target.index;
  if(target.index === 0){
   case4.excludeFromLayout = true;
   case5.excludeFromLayout = true;
  }else if(target.index === 1){
   case4.excludeFromLayout = false;
   case5.excludeFromLayout = true;
  }else if(target.index === 2){
   case4.excludeFromLayout = false;
   case5.excludeFromLayout = false;
  }
  return true;
}).appendTo(compositeChoosenGames);

const compositeValidation = new Composite({left:15,top:['prev()',20],right:15}).appendTo(scrollView);
new TextView({left:0,top:15,text:'VALIDATION:',font:'15px roboto'}).appendTo(compositeValidation);
const case1 = new TextInput({left:['prev()',5],width:40,alignment:'centerX',font:'14px roboto',keyboard:'number'}).appendTo(compositeValidation);
const case2 = new TextInput({left:['prev()',5],width:40,alignment:'centerX',font:'14px roboto',keyboard:'number'}).appendTo(compositeValidation);
const case3 = new TextInput({left:['prev()',5],width:40,alignment:'centerX',font:'14px roboto',keyboard:'number'}).appendTo(compositeValidation);
const case4 = new TextInput({left:['prev()',5],width:40,alignment:'centerX',font:'14px roboto',keyboard:'number',excludeFromLayout:true}).appendTo(compositeValidation);
const case5 = new TextInput({left:['prev()',5],width:40,alignment:'centerX',font:'14px roboto',keyboard:'number',excludeFromLayout:true}).appendTo(compositeValidation);

const compositeTelephone = new Composite({left:15,top:['prev()',20],right:15}).appendTo(scrollView);
new TextView({left:0,top:15,text:'TELEPHONE:',font:'15px roboto'}).appendTo(compositeTelephone);
const telephone = new TextInput({left:['prev()',5],right:0,message:'Entrez votre téléphone',font:'14px roboto',keyboard:'phone'}).appendTo(compositeTelephone);

const compositeButton = new Composite({left:15,top:['prev()',50],right:15}).appendTo(scrollView);
 new Button({left:0,top:0,text:'Effacer',style:'flat',background:'#e91e63'})
.onSelect(()=>{
  pickerChoosenGame.selectionIndex = 0;
  case1.text = "";
  case2.text = "";
  case3.text = "";
  case4.text = "";
  case5.text = "";
  telephone.text = "";
}).appendTo(compositeButton);
new Button({right:0,top:0,text:'Envoyer',style:'flat',background:'#009688'})
.onSelect(()=>{
  if(userChoice === undefined || [telephone.text,case1.text,case2.text,case3.text].includes("") === true){
    alertDialog("Info","Veuillez remplir tout les champs.","Fermer","");
  }else if(telephone.text.length !== 9){
    alertDialog("Info","Veuillez entrer un numéro de téléphone valide.","Fermer","");
  }else if(userChoice === 1 && [case1.text,case2.text,case3.text,case4.text].includes("") === true){
    alertDialog("Info","Veuillez entrer tous les numéros de validation.","Fermer","");
  }else if(userChoice === 2 && [case1.text,case2.text,case3.text,case4.text,case5.text].includes("") === true){
    alertDialog("Info","Veuillez entrer tous les numéros de validation.","Fermer","");
  }else{
    let validationNumber;
    if(userChoice === 0){
      validationNumber = `${case1.text}, ${case2.text}, ${case3.text}`;
    }else if(userChoice === 1){
      validationNumber = `${case1.text}, ${case2.text}, ${case3.text}, ${case4.text}`; 
    }else if(userChoice === 2){
      validationNumber = `${case1.text}, ${case2.text}, ${case3.text}, ${case4.text}, ${case5.text}`;  
    }
    require('./helpers/plugins/pDialog.js')("Envoi du récapitulatif du formulaire par mail",false,true);
    require('./helpers/ajax.js')(JSON.stringify({date:momentDate.text,hour:momentHour.text,choosenGame:pickerChoices[userChoice],validationNumber:validationNumber,phoneNumber:telephone.text}))
    .then((responseAjax)=>{
      require('./helpers/plugins/pDialog.js')("",false,false);
      if(responseAjax.message === "Mail envoyé"){
        require('./helpers/plugins/toast.js')("Données du formulaire envoyées avec succés.",3000,"bottom");
        // Ici on appele la page de récapitulatif
        require('./views/printScreen.js')({date:momentDate.text,hour:momentHour.text,choosenGame:pickerChoices[userChoice],validationNumber:validationNumber,phoneNumber:telephone.text});
      }else if(responseAjax.message === "Pas de connexion internet, veuillez réessayer."){
        require('./helpers/plugins/toast.js')(responseAjax.message,4000,"bottom");
      }
    });
  }

  return true;
}).appendTo(compositeButton);
