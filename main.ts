microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_1, function (message) {
    microIoT.showUserText(0, message.substr(2, 10))
})
radio.onReceivedValue(function (name, value) {
    if (name == "ltv") {
        microIoT.microIoT_SendMessage("{\"011ai2\":" + value + ",\"is public\":true}", microIoT.TOPIC.topic_0)
    } else if (name == "ltc") {
        microIoT.microIoT_SendMessage("{\"011ai1\":" + value + ",\"is public\":true}", microIoT.TOPIC.topic_0)
    } else {
    	
    }
})
microIoT.initDisplay()
radio.setGroup(1)
microIoT.microIoT_WIFI("dlink_DWR-920_0867", "XDerb67823")
microIoT.microIoT_MQTT(
"WLExDF6V9Xi3mm9K6Xs1DaVG",
"UgEY9G3PNz4pcngKwnSqbZPLIcBoMuNC",
"microbit/current",
microIoT.SERVERS.Global
)
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_1, "test/test")
