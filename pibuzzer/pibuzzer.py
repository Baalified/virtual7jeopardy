import RPi.GPIO as GPIO
import time
from socketIO_client import SocketIO, LoggingNamespace

GPIO.setmode(GPIO.BCM)

GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_UP)

socketIO = SocketIO('localhost',3000,LoggingNamespace);

while True:
    input_state = GPIO.input(18)
    if input_state == False:
        print('Button Pressed')
        socketIO.emit('buzz', {'player':'0'})
        time.sleep(0.2)
