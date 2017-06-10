/**
 * Created by jingqw on 17/6/2.
 */
const Utils = {
  formatWatch(value){
    if (value < 10000) {return value}
    return (value / 10000).toFixed(1) + "万";
  },
  xhrResponse(self,limitC,isConsole,dataS,apiSource){
    if(self === undefined || self === null){
      self = this;
    }
    let successCallback = (res) => {
      if (res.data.error === 0) {
        if(isConsole === true){
          console.log(res);
        }else if(isConsole === undefined || isConsole === null){
          isConsole = false;
        }
        self.rooms = dataS;
      }
    };
    let errorCallback = (res) => {
      console.log(res);
    };
    if(apiSource === undefined || apiSource === null){
      apiSource = '';
    }
    if(limitC){
      return limitC;
    }
    self.$http.get('/api/live'+apiSource+'?limit=' + limitC).then(successCallback, errorCallback);
  },

};
export default Utils;
