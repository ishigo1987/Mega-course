module.exports = (formInfo)=>{
    const {TextView, contentView, ImageView,ScrollView} = require('tabris');
    const scrollView = new ScrollView({layoutData:'stretch',background:"#ffffff"}).appendTo(contentView);
    new ImageView({top:15,left:15,right:15,image:'src/img/course.jpeg',scaleMode:'fill'}).appendTo(scrollView);
    new TextView({top:['prev()',15],centerX:0,text:'MEGA COURSE',font:'bold 20px roboto'}).appendTo(scrollView);
    new TextView({left:15,right:15,top:['prev()',15],text:`${formInfo.date}`,font:'15px roboto'}).appendTo(scrollView);
    new TextView({left:15,right:15,top:['prev()',15],text:`${formInfo.hour} h ${new Date().getMinutes()} min`,font:'15px roboto'}).appendTo(scrollView);
    new TextView({left:15,top:['prev()',15],text:`JEU CHOISI:  ${formInfo.choosenGame}`,font:'15px roboto'}).appendTo(scrollView);
    new TextView({left:15,top:['prev()',15],text:`VALIDATION:  ${formInfo.validationNumber}`,font:'15px roboto'}).appendTo(scrollView);
    new TextView({left:15,top:['prev()',15],text:`NOM DE LA COURSE:  ${formInfo.courseName}`,font:'15px roboto'}).appendTo(scrollView);
    new TextView({left:15,top:['prev()',15],text:`TELEPHONE:  ${formInfo.phoneNumber}`,font:'15px roboto'}).appendTo(scrollView);
   
    // require('../helpers/plugins/screenshot.js')()
    // .then((result)=>{
    //    //result.path === the path of image
    //    cordova.plugins.printer.print(result.path);
    //    setTimeout(()=>{
    //     scrollView.dispose();
    //    },1000);
    // });
    // require('../helpers/plugins/toast.js')("Début de la phase d'impression dans 3 secondes",6000,"bottom");
    // setTimeout(()=>{
    //  cordova.plugins.printer.print();
    // },6000);
    setTimeout(()=>{
     require('../helpers/plugins/toast.js')("Cette page va se fermer automatiquement dans 15 secondes faites une capture d'écran avant sa fermeture",3000,"bottom");
    },3000);
    setTimeout(()=>{
     scrollView.dispose();
    },15000);
};