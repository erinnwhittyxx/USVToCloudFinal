microIoT.microIoT_WIFI("dlink_DWR-920_0867", "XDerb67823")
microIoT.microIoT_MQTT("WLExDF6V9Xi3mm9K6Xs1DaVG",
    "UgEY9G3PNz4pcngKwnSqbZPLIcBoMuNC",
    "microbit/current",
    microIoT.SERVERS.GLOBAL)
microIoT.microIoT_add_topic(microIoT.TOPIC.TOPIC_1, "")

def on_forever():
    microIoT.microIoT_SendMessage("22.1", microIoT.TOPIC.TOPIC_0)
    basic.pause(200)
    microIoT.microIoT_SendMessage("22.6", microIoT.TOPIC.TOPIC_0)
    basic.pause(200)
basic.forever(on_forever)
