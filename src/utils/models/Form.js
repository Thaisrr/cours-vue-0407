export class Form {
    title;
    controls;
    action;

    constructor(title, action, controls) {
        this.title = title;
        this.action = action;
        this.controls = controls;
    }
}