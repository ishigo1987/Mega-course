module.exports = (titleAd,messageAd,okButton,cancelButton)=>{
  return new Promise((resolve)=>{
      new tabris.AlertDialog({
          title:titleAd,
          message:messageAd,
          buttons: {
            ok:okButton,
            cancel:cancelButton
          }
        }).on({
          closeOk: () => {
            resolve({message:"button ok"});
          },
          closeCancel: () => {resolve("button cancel");}
        }).open();
  });
}