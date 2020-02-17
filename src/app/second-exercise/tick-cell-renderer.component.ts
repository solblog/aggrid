import { Component } from '@angular/core';
// tslint:disable-next-line: quotemark
import { INoRowsOverlayAngularComp } from "@ag-grid-community/angular";

@Component({
    selector: 'app-gender-renderer',
    template: `
            <span>
                <img [src]="imageSource" >{{value}}
            </span>
    `
})
// tslint:disable-next-line: component-class-suffix
export class TickCellRenderer implements INoRowsOverlayAngularComp {
    private imageSource: string;
    private value: any;

    agInit(params): void {
        // Better to modify the class
        const image = params.value === 'Male' ? 'male.png' : 'female.png';
        this.imageSource = '/assets/images/' + image;
        this.value = params.value;
    }

}
