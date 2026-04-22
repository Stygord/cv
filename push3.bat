@echo off
set PATH=C:\Program Files\Git\bin;C:\Program Files\GitHub CLI;%PATH%
git add .
git commit -m "Update multi-sport text to enthusiast"
git push origin master
