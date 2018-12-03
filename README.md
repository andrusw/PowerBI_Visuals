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

### Install D3 Library into new viz
```powershell
npm i d3@3.5.5 --save
npm i @types/d3@3.5
```

### Register d3 Library 
Open pbiviz.json
add item in externalJS array: `,"node_modules/d3/d3.min.js"`

## Developing

Visual Construction & Data Binding:  src > visual.ts <br/>
Data Roles, Mapping and Formatting Objects: capabilities.json <br/>
Default starting visual settings: src > settings.ts <br/>

Clean out visual.ts to a bare-bones start:
```typescript
module powerbi.extensibility.visual {
    "use strict";
    export class Visual implements IVisual {
        private host: IVisualHost;
        private svg: d3.Selection<SVGElement>;
        private container: d3.Selection<SVGElement>;
    
        constructor(options: VisualConstructorOptions) {
            this.svg = d3.select(options.element).append('svg').classed('testAnimation', true);
            this.container = this.svg.append("g").classed('container', true);

        }

        public update(options: VisualUpdateOptions) {
            let width: number = options.viewport.width;
            let height: number = options.viewport.height;
            this.svg.attr({width: width,height: height});
            
        }
    }
}
```

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


