#! /bin/sh

CURRENTDATE=`date +"%Y-%m-%d %T"`
SITES="www.thealphaflickr.xyz"
  for SITE in $(echo $SITES | tr "," " "); do         #ignores ,
  if [ ! -z "${SITE}" ]; then
    RESPONSE=$(curl -s --head $SITE)
    if echo $RESPONSE | grep "200 OK" > /dev/null
    then
      echo "Ping successful at : ${CURRENTDATE}" >> monitor.txt
    else
        echo "Ping failed at : ${CURRENTDATE}" >> monitor.txt
        python3 MonitorScript.py                      #runs a python script that sends the email 
        #restart the server 
        ssh -i DevOpsGeekKey.pem ubuntu@3.138.118.110 #ssh first
        sudo systemctl restart nginx 
        sudo exit  
    fi
  fi
done