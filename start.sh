#!/usr/bin/env bash
while true
echo "Bot Script started | autorestart on"
do node index.js
	echo "Restarting in 5 seconds, ctrl^c to cancel."
	sleep 5
done
