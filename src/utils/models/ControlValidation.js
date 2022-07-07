export class ControlValidation {
    validation;
    value;
    error_text;

    constructor(validation, error, value = undefined) {
        this.validation = validation;
        this.error_text = error;
        this.value = value;
    }
}