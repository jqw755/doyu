/**
 * Created by jingqw on 17/6/2.
 */

const Utils = {

  formatWatch(w){
    if (w < 10000) {return w}
    return (w / 10000).toFixed(1) + "万";
  }

}
export default Utils;
