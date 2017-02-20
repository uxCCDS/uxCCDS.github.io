Title: 360° Camera and VR
---

We started to learn AR/VR technology years ago. It should be able to improve our meeting experience.

# Camera

In order to get VR video, we should take 360° view video at first. We bought [Giroptic's 360cam](https://www.giroptic.com/us/en/360cam) and its PoE Ethernet Adapter Base to set up the IP camera system.

![Giroptic's 360° Camera](../../img_data/research/360°VR1.jpg)

# Streaming server

You can get a RTSP stream from the IP camera directly. However, lots of media player does not support RTSP stream. RTSP is designed for Flash only, so we need a server to convert the stream to other formats.

[Wowza Streaming Engine](https://www.wowza.com/products) is best solution I can find. Here is the dash board for Wowza Stream Enginer.

![Wowza Streaming Engine](../../img_data/research/360°VR2.png)

# Watch the live on iPhone

## 360° View

You can use Insta360Player to watch the 360° live. It's not a sized video any more. You can swipe to choose best view. 

### Normal View 

![live](../../img_data/research/360°VR3.PNG)

### Full Fcreen View

![live](../../img_data/research/360°VR4.PNG)

### Zoom Out View

![live](../../img_data/research/360°VR6.PNG)

## VR View

If you have any VR glass, you can watch the life in VR mode.

![live](../../img_data/research/360°VR8.jpg)

![live](../../img_data/research/360°VR5.PNG)

# HTML prototype

It's also possible to display the 360° View video with HTML5. The following is a screenshot for our simple demo.

![live](../../img_data/research/360°VR7.png)