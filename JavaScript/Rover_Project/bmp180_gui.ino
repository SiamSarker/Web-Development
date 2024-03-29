/*------------------------------------------------------------------------------
  10/20/2018
  Author: Cisco • A C R O B O T I C 
  Platforms: ESP8266
  Language: C++/Arduino
  File: bmp180_gui.ino
  ------------------------------------------------------------------------------
  Description: 
  Code for YouTube video demonstrating how to plot sensor data from a BMP180 tem-
  perature, and barometric pressure sensor. A web server running on the ESP8266 
  serves a web page that uses Chart.js and websockets to plot the data.
  https://youtu.be/lEVoRJSsEa8
  ------------------------------------------------------------------------------
  Do you like my work? You can support me:
  https://patreon.com/acrobotic
  https://paypal.me/acrobotic
  https://buymeacoff.ee/acrobotic
  ------------------------------------------------------------------------------
  Please consider buying products and kits to help fund future Open-Source 
  projects like this! We'll always put our best effort in every project, and 
  release all our design files and code for you to use. 
  https://acrobotic.com/
  https://amazon.com/shops/acrobotic
  ------------------------------------------------------------------------------
  License:
  Please see attached LICENSE.txt file for details.
------------------------------------------------------------------------------*/
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <WebSocketsServer.h>
/*#include <Adafruit_BMP085.h>*/
#include <Ticker.h>

// Collecting BMP180 sensor data
Ticker timer;
//Adafruit_BMP085 bmp;
bool get_data = true;

// Connecting to the Internet
char * ssid = "AAMasud";
char * password = "01715066131";
const int trigPin = 12;
const int echoPin = 14;
int LedState = 0;
//define sound velocity in cm/uS
#define SOUND_VELOCITY 0.034
#define CM_TO_INCH 0.393701

long duration;
float distanceCm;
float distanceInch;
int i=0;
// Running a web server
ESP8266WebServer server;

// Adding a websocket to the server
WebSocketsServer webSocket = WebSocketsServer(81);

// Serving a web page (from flash memory)
// formatted as a string literal!
char webpage[] PROGMEM = R"=====(
<html>
<!-- Adding a data chart using Chart.js -->
<head>
  <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet">
  <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet">
  <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet">
  <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js'></script>
  
  <style>
    .arrows {
      font-size:70px;
      color:red;
    }
    .circularArrows {
      font-size:80px;
      color:blue;
    }
    td {
      background-color:black;
      text-align: center;
      border-radius:25%;
      box-shadow: 5px 5px #888888;
    }
    td:active {
      transform: translate(5px,5px);
      box-shadow: none; 
    }
    .noselect {
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
         -khtml-user-select: none; /* Konqueror HTML */
           -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome and Opera */
    }
    .div_mod{
        
        margin: auto;
        width: 50%;
        border: 3px solid green;
        padding: 10px;
        margin-top: 10%;
    }
    </style>
</head>
<body onload="javascript:init()">
<!-- Adding a slider for controlling data rate -->
<div id="LED" style="font-size: xx-large; text-align: center; margin-top: 10%;">LED HERE</div>

<table id="mainTable" style="width:400px;margin:auto;table-layout:fixed" CELLSPACING=10>
          <tr>
              <!-- <td onclick='onTouchStartAndEnd("5")' ><span class="arrows" >&#11017;</span></td> -->
              <td style="background-color:white;box-shadow:none"></td>
              <td onclick="sendDataRate(1.0)" ><span class="arrows" >&#8679;</span></td>
              <td style="background-color:white;box-shadow:none"></td>
              <!-- <td onclick='onTouchStartAndEnd("6")' ><span class="arrows" >&#11016;</span></td> -->
          </tr>
          
          <tr>
              <td onclick="sendDataRate(3.0)" ><span class="arrows" >&#8678;</span></td>
              <td onclick="sendDataRate(0.0)"><span class="arrows" >&#129197;</td>    
              <td onclick="sendDataRate(4.0)" ><span class="arrows" >&#8680;</span></td>
          </tr>
          
          <tr>
              <!-- <td onclick='onTouchStartAndEnd("7")'><span class="arrows" >&#11019;</span></td> -->
              <td style="background-color:white;box-shadow:none"></td>
              <td onclick="sendDataRate(2.0)" ><span class="arrows" >&#8681;</span></td>
              <td style="background-color:white;box-shadow:none"></td>
              <!-- <td onclick='onTouchStartAndEnd("8")' ><span class="arrows" >&#11018;</span></td> -->
          </tr>
        </table>

<!-- Adding a websocket to the client (webpage) -->
<script>
  var i = 0;
  var webSocket;
  function init() {
    document.getElementById("LED").innerHTML = "Please Wait, Stabilizing Connection . . .";
    webSocket = new WebSocket('ws://' + window.location.hostname + ':81/');
    
    webSocket.onmessage = function(event) {
      var data = JSON.parse(event.data);
      if(i == 0)
      {
        document.getElementById("LED").innerHTML = "Connected";
        i=1;
      }
//      else{
//        //document.getElementById("LED").innerHTML = "Received"+data.value.toString();
//      }
    }
  }
  function sendDataRate(dataRate){
    //var dataRate = document.getElementById("dataRateSlider").value;
    webSocket.send(dataRate);
    //dataRate = 1.0/dataRate;
    document.getElementById("LED").innerHTML = "Sent"+dataRate.toString();
  }
</script>
</body>
</html>
)=====";

void setup() {
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN,LOW);
  WiFi.begin(ssid, password);
  Serial.begin(115200);
  while(WiFi.status()!=WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println("");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  server.on("/",[](){
    server.send_P(200, "text/html", webpage);
  });
  server.begin();
  webSocket.begin();
  webSocket.onEvent(webSocketEvent);

  timer.attach(0.1, getData);
}

void loop() {
  // put your main code here, to run repeatedly:
  float val = LedState;
  webSocket.loop();
  server.handleClient();
  if(get_data){
    String json = "{\"value\":";
    json += i;
    json += "}";
    webSocket.broadcastTXT(json.c_str(), json.length());
    get_data = false;    
  }
  delay(1000);
}

void getData() {
  get_data = true;
  i++;
}

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length){
  // Do something with the data from the client
  if(type == WStype_TEXT){
    float dataRate = (float) atof((const char *) &payload[0]);

    /*Forward = 1| Backwards = 2| Left = 3 | Right = 4 |Stop = 0*/
    Serial.println(dataRate);
    if(dataRate == 1.0)
    {
      Serial.println("Moving Forward");
      //write your code here
    }
    else if(dataRate == 2.0)
    {
      Serial.println("Moving Backward");
      //write your code here
    }
    else if(dataRate == 3.0)
    {
      Serial.println("Moving Left");
      //write your code here
    }
    else if(dataRate == 4.0)
    {
      Serial.println("Moving Right");
      //write your code here
    }
    else if(dataRate == 0.0)
    {
      Serial.println("Stopping");
      //write your code here
    }
    
    if(LedState == 0)
    {
      digitalWrite(LED_BUILTIN,HIGH);
      LedState = 1;
    }
    else
    {
      digitalWrite(LED_BUILTIN,LOW);
      LedState = 0;
    }
    timer.detach();
    timer.attach(0.1, getData);
  }
}
