@echo off
set PATH=C:\Program Files\Git\bin;C:\Program Files\GitHub CLI;%PATH%
gh api repos/Stygord/cv/pages -X POST -f build_type=workflow -f source.branch=master -f source.path=/
