# South River Solar Hawks
Internal Documentation

## Installing & Running 
*Make Sure create-react-app and NPM are properly installed*
- Clone the repo: `git clone https://github.com/ryanrocket/solarhawks`
- Install dependencies: `npm install`
- Run development test server: `npm start`

## Appending/Modifying Content
All pages and their content are stored in ,,components''. Locate the appropriate component in `/src/components` to change the raw HTML content. Re: styling. Things like content centering, alignment, and spacing are done using the Bulma library. Styling such as typography, coloring, and interactive components (buttons, cards, etc.) are done using Geist UI and Evergreen. Ensure that changes look appropriate in the development test server before commiting any new changes to the repository.
> :warning: **Note:** It is good practice to update the `CHANGELOG.md` with every new commit you make.

## Appending Images to The Gallery
To upload image(s) to the gallery, please follow these steps. 
- Ensure you have editor access to the Solar Hawks shared Google Drive.
- Locate the `Solar Hawks/Media/Pictures/Website Gallery Photos` folder.
- Upload images there.
    - Note that anything in this folder is public to the internet, be careful
    - Make sure they are in a readable format such as `.PNG` or `.JPG`
    - Note that `.HEIC` images are not supported.
- In this repository, visit `/src/assets/gallery.json` and add the following information
```json
[
    ...
    {
        "urlcode": "URL CODE GOES HERE", // public url code of image in google drive, refer below
        "format": "FORMAT GOES HERE", // should either be "JPG", "PNG"
        "date": "MM/DD/YYYY", // the day you are uploading the image
        "tags": ["electrical", "mechanical", "challenger", "c1", "team", "business"], // only include applicable tags
        "public": true // a boolean value for if this image should be displayed or not
    }
    ...
]
```
- For the URL code portion, please follow these steps carefully
    - If the original URL of the image looks something like... `https://drive.google.com/file/d/`**0B6wwyazyzml-OGQ3VUo0Z2thdmc**`/view`
    - Then the URL code you put into the JSON file should be... **0B6wwyazyzml-OGQ3VUo0Z2thdmc**
- Commit these changes
- Visit the website gallery to ensure it is working as intended

## Reporting Bugs or Questions
Need help with a bug or new modification? Make a new "issue" in the GitHub repository and I (Ryan) will do my best to get back ASAP.