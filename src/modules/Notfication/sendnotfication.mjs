import { firebaseConfiguration } from "./firebaseconfiguration.mjs";
class pushnotification_andriod{ 
  async  send_notification_andriod(device_id_token, tranningData){ 
        try{
            let tittlemessage=tranningData.agency+` (${tranningData.startTime}-${new Date( tranningData.trainingDate).getDate()} ${new Date(tranningData.trainingDate).toLocaleString('default', { month: 'short' })})`;
            const payload = {
                notification:{
                    title:tittlemessage,
                    body:tranningData.topic,
                    click_action:'FLUTTER_NOTIFICATION_CLICK',
                    android_channel_id:"notification_channel",
                },
            }
            const options={priority:'high', timetoLive:60*60*24,}
            await firebaseConfiguration._firebaseClient.clientFirebaseApp.messaging().sendToDevice(device_id_token,payload,options);
        }
        catch(e){
            
        }   
    }
}
var obj_pushnotification_andriod=new pushnotification_andriod();
export{
    obj_pushnotification_andriod
}