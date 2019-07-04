module.exports = ()=>{
  return new Promise((resolve)=>{
    function receiveScreenShotCallback(data){
      console.log(data);
      resolve({path:data});  
    };
    receiveScreenShotCallback();
  });
};