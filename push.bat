@echo off
set PATH=C:\Program Files\Git\bin;C:\Program Files\GitHub CLI;%PATH%
gh repo create cv --public --source=. --push --remote=origin
