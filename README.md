# PowerBI_Visuals

## Setup for Development 
from: <a href='https://docs.microsoft.com/en-us/power-bi/developer/custom-visual-develop-tutorial'>https://docs.microsoft.com/en-us/power-bi/developer/custom-visual-develop-tutorial</a>

### Install Node.js
<a href='https://nodejs.org/'>https://nodejs.org/</a>

### Install pbiviz
```powershell
npm i -g powerbi-visuals-tools
```
### Create/Install cert
```powershell
pbiviz --create-cert
pbiviz --install-cert
```
In cert wizard:
Current User > Next 
(File to Import Screen) Next 
(Private Key Protection) Enter passphrase number into password > Next
(Certificate Store) Place all certificates in the following store > Browse > select Trusted Root Certification Authorities > OK > Next > Finish > Yes > OK

### Install D3 Library
```powershell
npm i d3@3.5.5 --save
npm i @types/d3@3.5
```


## Create Skelton Viz Project

```powershell
pbiviz new MyNewVizName
cd MyNewVizName
pbiviz start
```

Signin to PowerBI.com (go to Gear Icon > Settings > Developer > Enable Developer Visual for testing)
Upload a Power BI Report to test with
Edit Report and select Developer Visual from Visualization pane


## VSCode and Setup
Download VS Code if not already and start:
```powershell
code .
```

### Register d3 Library 
Open pbiviz.json
add item in externalJS array: `,"node_modules/d3/d3.min.js"`

## Developing

Visual Construction & Data Binding:  src > visual.ts
Data Roles, Mapping and Formatting Objects: capabilities.json 
Default starting visual settings: src > settings.ts

## Packaging

Make sure pbviz is stopped ctrl+C

Edit pbviz.json file 
* changing displayName to name of visual
* add description
* update author info

Update icon.png image (must be 20x20) in assets folder

Create distribution package (creates dist folder)
```powershell
pbiviz package
```

## Import custom viz
In PowerBI Desktop, in Visualization Pane, select ellipsis > Import from File 
import the pbiviz file.

## Debugging Guide
<a href='https://microsoft.github.io/PowerBI-visuals/docs/how-to-guide/how-to-debug/'>https://microsoft.github.io/PowerBI-visuals/docs/how-to-guide/how-to-debug/</a>


