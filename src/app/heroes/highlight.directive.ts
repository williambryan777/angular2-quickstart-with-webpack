import {ElementRef, Input, HostListener, Directive} from "@angular/core";
@Directive({
    selector:''
})
export class HightLightDirective{
    private _defaultColor='red';
    private el:HTMLElement;
    constructor(el:ElementRef){
        this.el=el.nativeElement;
    }

    @Input() set defaultColor(colorName: string){
        this._defaultColor = colorName || this._defaultColor;
    }

    @Input('myHighlight') highlightColor: string;
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
}