@echo off
set PATH=C:\Program Files\Git\bin;C:\Program Files\GitHub CLI;%PATH%
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push origin master
