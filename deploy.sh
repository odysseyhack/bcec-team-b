#!/bin/sh

sync && ng build --prod && sync && cd dist/odyssey-hackathon && zip -r front.zip * && sync && sshpass -p "otiomalreadywon55" scp front.zip root@otiom.nl:
