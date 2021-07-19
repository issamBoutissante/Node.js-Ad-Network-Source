const app=require('express')()
const PORT=3000

app.get("/data",(req, res)=>{
    res.status(200).send({
        "AdMob": {
          "enabled": true,
          "adUnits": {
            "NativeAd":"ca-app-pub-3940256099942544/2247696110",
            "Banner1":"ca-app-pub-3940256099942544/6300978111",
            "Banner2":"ca-app-pub-3940256099942544/6300978111",
            "Banner3":"ca-app-pub-3940256099942544/6300978111",
            "Banner4": "ca-app-pub-3940256099942544/6300978111",
            "Interstitial1":"ca-app-pub-3940256099942544/1033173712",
            "Interstitial2":"ca-app-pub-3940256099942544/1033173712",
            "Interstitial3":"ca-app-pub-3940256099942544/1033173712",
            "Interstitial4":"ca-app-pub-3940256099942544/1033173712",
            "Interstitial5":"ca-app-pub-3940256099942544/1033173712",
            "Interstitial6":"ca-app-pub-3940256099942544/1033173712"
          }
        },
        "Fan": {
          "enabled": false,
          "adUnits": {
            "NativeAd":"YOUR_PLACEMENT_ID",
            "Banner1":"IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
            "Banner2":"IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
            "Banner3":"IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
            "Banner4": "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
            "Interstitial1":"YOUR_PLACEMENT_ID",
            "Interstitial2":"YOUR_PLACEMENT_ID",
            "Interstitial3":"YOUR_PLACEMENT_ID",
            "Interstitial4":"YOUR_PLACEMENT_ID",
            "Interstitial5":"YOUR_PLACEMENT_ID",
            "Interstitial6":"YOUR_PLACEMENT_ID"
          }
        }
      })
})

app.listen(PORT,()=>{
    console.log(`The Server is listening on port ${PORT}`)
})