module.exports = ()=>{
  return new Promise((resolve)=>{
    navigator.screenshot.save((error,res)=>{
     if(error){
       console.error(error);
     }else{
       console.log('ok',res.filePath);
       resolve({path:res.filepath});
     }
    },'jpg',75);
  });
};