import {ControlValidation} from "@/models/ControlValidation";

export class Control {
    label;
    type = 'text';
    validations = [];
    errors = [];


    constructor(label, type) {
        this.label = label;
        this.type = type;
    }

    static createControl(label, type) {
        return new Control(label, type)
    }

    validation(type, error) {
        this.validations.push(new ControlValidation(type, error));
        return this;
    }

    hasError(name) {
        return this.errors.includes(name);
    }

    addError(name) {
        if(!this.hasError(name)) {
            this.errors.push(name)
        }
    }

    removeError(name) {
        if(this.hasError(name)) {
            const index = this.errors.indexOf(name)
            this.errors.splice(index, 1)
        }
    }
}