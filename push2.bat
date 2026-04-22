@echo off
set PATH=C:\Program Files\Git\bin;C:\Program Files\GitHub CLI;%PATH%
git add .
git commit -m "Add print styles for compact 2-page PDF output"
git push origin master
