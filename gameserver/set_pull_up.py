import sys
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)

pin = int(sys.argv[1])

GPIO.setup(pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
