import {Component, OnInit} from '@angular/core';
import {HeroModel} from './HeroModel';
let styles = String(require('./hero-form.component.css'));
@Component({
    selector: 'my-hero-form',
    styleUrls: [styles],
    templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = new HeroModel(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;

    onSubmit() {
        alert('提交成功了！')
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}


