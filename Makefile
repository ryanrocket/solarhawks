push:
	git add -A 
	git commit -m "Automated Commit"
	git push origin main

pull: 
	git pull origin main

nightly:
	git add -A 
	git commit -m "Nightly commit #"
	git push origin main