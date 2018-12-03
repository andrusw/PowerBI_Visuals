/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual {
    "use strict";
    export class Visual implements IVisual {
        private host: IVisualHost;
        private svg: d3.Selection<SVGElement>;
        private container: d3.Selection<SVGElement>;
        private bar1: d3.Selection<SVGElement>;
        private bar2: d3.Selection<SVGElement>;
        private anim: d3.Selection<SVGElement>;
    
        constructor(options: VisualConstructorOptions) {
            this.svg = d3.select(options.element).append('svg').classed('testAnimation', true);
            this.container = this.svg.append("g").classed('container', true);

            this.bar1 = this.container.append("rect").classed('bar1', true);
            this.bar2 = this.container.append("rect").classed('bar2', true);
            this.bar1.attr(
                {
                    fill: "blue"
                    ,x: 100
                    ,y: 20
                    ,height: 20
                    ,width: 10
                }
            );
            this.bar2.attr(
                {
                    fill: "blue"
                    ,x: 120
                    ,y: 20
                    ,height: 20
                    ,width: 10
                }
            );

        }

        public update(options: VisualUpdateOptions) {
            let width: number = options.viewport.width;
            let height: number = options.viewport.height;
            this.svg.attr({width: width,height: height});

            this.bar1
                .transition()
                //.ease(d3.easeLinear) //in https://d3js.org/d3.v4.min.js
                .duration(2000)
                .attr("height",100);

            this.bar2
                .transition()
                //.ease(d3.easeLinear)
                .duration(2000)
                .delay(2000)
                .attr("height",100)
    
            
        }
    }
}