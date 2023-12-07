#!/bin/bash
cd /home/ec-2/project
pm2 delete all
sudo systemctl start nginx
pm2 start "npm start"