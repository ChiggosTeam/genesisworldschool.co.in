import admin from "firebase-admin";
import uuid from 'uuid-v4';
class FirebaseAdmin{
    constructor(){
        this.initialize();
    }
     serviceAccount={
        "type": "service_account",
        "project_id": "mlzsbihta-7a5fb",
        "private_key_id": "4532f05bef3fef65ed134ab82d18807cba67bc0e",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtDSUIkDa5RMLF\npWvyFqdr2bbGf3vMU4dGnEvYzFNpP4L6t/dH9YjjnsvkJZXfG5pE6wrs7PSMgVsy\nYGj7n0OlqVpKnZl4Tp0KvpcgInQPsG57WTJ9f7KI2taIGev371LncRlAxqWMyFIu\nov2m8N2Il8aKfhAhBBKUCAKZZYknBh0Bi/a3G1KAsLwHeKgP90Sdt0BKv1ctk2Ny\n5L8423swwTfnqOja/jfad3Ng8R+BNQ3j+A45zxKVMeO9BZPI0S+TG5IeR9+uB8fi\n4nL97FNQbJj0dG7rlh3ZpH31T9PUumj0ES7v0DvpVvjaNTruqv91c/flipDkjy+/\nSsZK+t1NAgMBAAECggEAJuyqPBUeLgmkqurkzzEfyv9PYLI7sS/HoY8V82ewSl/2\nEPmQ1l+JATQOhhybK7JMfryEulqpPjJ5hikP7Cs8ftaLP/XXl6tNISXSHfEJ/J5x\nl26uj/KJgMWClF4KSPxMwFDc/ohAJBzJ+YIBfou2tNr41l15OMfu+tubZBAl68AS\nTu5gd3qv6QJn/M+ehHNQflmUkqL8GxUC3RiLJDy/pmzMPOjMmY6VNwHvLuVMGMLu\nWO278DYIgjCR/n1xm3+Q0eSXG16OnP0Y8Emk/6CjToOU8HPawioEFt5aPx4q+NOe\nucWzv3Vsyy0OavJT61X1ffNP3Wa1hsVHc0mQRc2LUQKBgQDXha8Y0r4Dzhh2sRXK\n8WSyyz+AnVbgy38yTyGxSZYZXMcUI8cTyJlp04lBoOjEkaUZ6FaZojIZSP8yPC8v\n9Ct0nZOLMVOLmZWdU46enj0nkTabRQyNRGQVH4YhCQ5NW0CK3WetC0VNIVqB7+OC\n4NodjVuwvCvPN0SOp7zEXd2HcQKBgQDNjXXROu/UCDw4nyCMptpGmPH3B0pT6y3N\nwnKP6WT7YbDZ82MIWAQjvascDu2C8TYtKefr1qPcLMkU7r6+gDJcYz1g2CWVbrvT\njpnZgDIhfDSJj5gsXMExTQd+dkD+eskc86qExLY0e7Cz41r9ko+rv0vYiy4JbiJH\ngdO/0LcdnQKBgQDLN2dRrayzY8pXaESXNiPwHotDF5iKn/bQliK7yxn30i54w/97\nnQNi8K4ULsgsSPR3SEcX2AMLKnROhscrnTy4Wbh8X8dZ8zhKvzXURHp/a4Ikx+e8\n8Ea6UB4l2icdM7TY+0k9tknjH1b6/Bn3F1My2E4jiFp6qa9AH9NzCNrQUQKBgD8B\nNTPE1O4w+ASDAf8axZ0OFFybp3TBiXCgQW1LJODIuOSVba2JDPvHj0MycCrKtMhz\nJ9tqFx/NunToGR9bPBSFdrLQjfSX1IqsEwxP9w28fH4NvZ8bbzwlWD6zEIjwKeTt\n6z527UJ5B1icP6+p1M/X+u+M+bd6QpeYe8c3umkhAoGBAMw/BNGw9PK/02rv01BT\nn/GIWTGIAEALpRDxpF0yteCHb3GVsVQJSiwZ6ywzGVwKQuDjawKo61PXMPHz+ZOo\n4rDzB/JXh6x2mFGXSAe1K2oXDp+PAKJQvY4m9j/c+vGv3PJ53kvqDLHPISK8J8eR\nkyd3F5fs1DeT5u/V7j+zBY6C\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-gpn6e@mlzsbihta-7a5fb.iam.gserviceaccount.com",
        "client_id": "114312352352595103443",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gpn6e%40mlzsbihta-7a5fb.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
      };
    async initialize(){
        admin.initializeApp({
            credential: admin.credential.cert(this.serviceAccount),
            storageBucket:"gs://mlzsbihta-7a5fb.appspot.com "
        },
        );
    }
}   // END OF ADMINFIREBASE CLASS

class ApplicantFirebase{
    constructor(){
        this.initialize();
    }
    serviceAccount={
        "type": "service_account",
        "project_id": "mlzsbihta-7a5fb",
        "private_key_id": "4532f05bef3fef65ed134ab82d18807cba67bc0e",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtDSUIkDa5RMLF\npWvyFqdr2bbGf3vMU4dGnEvYzFNpP4L6t/dH9YjjnsvkJZXfG5pE6wrs7PSMgVsy\nYGj7n0OlqVpKnZl4Tp0KvpcgInQPsG57WTJ9f7KI2taIGev371LncRlAxqWMyFIu\nov2m8N2Il8aKfhAhBBKUCAKZZYknBh0Bi/a3G1KAsLwHeKgP90Sdt0BKv1ctk2Ny\n5L8423swwTfnqOja/jfad3Ng8R+BNQ3j+A45zxKVMeO9BZPI0S+TG5IeR9+uB8fi\n4nL97FNQbJj0dG7rlh3ZpH31T9PUumj0ES7v0DvpVvjaNTruqv91c/flipDkjy+/\nSsZK+t1NAgMBAAECggEAJuyqPBUeLgmkqurkzzEfyv9PYLI7sS/HoY8V82ewSl/2\nEPmQ1l+JATQOhhybK7JMfryEulqpPjJ5hikP7Cs8ftaLP/XXl6tNISXSHfEJ/J5x\nl26uj/KJgMWClF4KSPxMwFDc/ohAJBzJ+YIBfou2tNr41l15OMfu+tubZBAl68AS\nTu5gd3qv6QJn/M+ehHNQflmUkqL8GxUC3RiLJDy/pmzMPOjMmY6VNwHvLuVMGMLu\nWO278DYIgjCR/n1xm3+Q0eSXG16OnP0Y8Emk/6CjToOU8HPawioEFt5aPx4q+NOe\nucWzv3Vsyy0OavJT61X1ffNP3Wa1hsVHc0mQRc2LUQKBgQDXha8Y0r4Dzhh2sRXK\n8WSyyz+AnVbgy38yTyGxSZYZXMcUI8cTyJlp04lBoOjEkaUZ6FaZojIZSP8yPC8v\n9Ct0nZOLMVOLmZWdU46enj0nkTabRQyNRGQVH4YhCQ5NW0CK3WetC0VNIVqB7+OC\n4NodjVuwvCvPN0SOp7zEXd2HcQKBgQDNjXXROu/UCDw4nyCMptpGmPH3B0pT6y3N\nwnKP6WT7YbDZ82MIWAQjvascDu2C8TYtKefr1qPcLMkU7r6+gDJcYz1g2CWVbrvT\njpnZgDIhfDSJj5gsXMExTQd+dkD+eskc86qExLY0e7Cz41r9ko+rv0vYiy4JbiJH\ngdO/0LcdnQKBgQDLN2dRrayzY8pXaESXNiPwHotDF5iKn/bQliK7yxn30i54w/97\nnQNi8K4ULsgsSPR3SEcX2AMLKnROhscrnTy4Wbh8X8dZ8zhKvzXURHp/a4Ikx+e8\n8Ea6UB4l2icdM7TY+0k9tknjH1b6/Bn3F1My2E4jiFp6qa9AH9NzCNrQUQKBgD8B\nNTPE1O4w+ASDAf8axZ0OFFybp3TBiXCgQW1LJODIuOSVba2JDPvHj0MycCrKtMhz\nJ9tqFx/NunToGR9bPBSFdrLQjfSX1IqsEwxP9w28fH4NvZ8bbzwlWD6zEIjwKeTt\n6z527UJ5B1icP6+p1M/X+u+M+bd6QpeYe8c3umkhAoGBAMw/BNGw9PK/02rv01BT\nn/GIWTGIAEALpRDxpF0yteCHb3GVsVQJSiwZ6ywzGVwKQuDjawKo61PXMPHz+ZOo\n4rDzB/JXh6x2mFGXSAe1K2oXDp+PAKJQvY4m9j/c+vGv3PJ53kvqDLHPISK8J8eR\nkyd3F5fs1DeT5u/V7j+zBY6C\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-gpn6e@mlzsbihta-7a5fb.iam.gserviceaccount.com",
        "client_id": "114312352352595103443",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gpn6e%40mlzsbihta-7a5fb.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
      };
      async initialize(){
        this.clientFirebaseApp = admin.initializeApp(
            {credential:admin.credential.cert(this.serviceAccount),
            storageBucket: "gs://mlzsbihta-7a5fb.appspot.com "
            }, 
            "clientfirebase" 
        );
      }
}
class FirebaseConfiguration{
    _firebaseAdmin = new FirebaseAdmin();
    
    _firebaseClient = new ApplicantFirebase();
}

var firebaseConfiguration = new FirebaseConfiguration();

export{
    firebaseConfiguration
}