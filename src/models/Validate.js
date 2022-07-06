const Validate = {
    required: (value) => !!value ,
    pattern: (value, pattern) => value.match(pattern),
    min: (value, min) => value > min,
    max: (value, max) => value < max,
    minLength: (value, size) => value.length > size,
    maxLength: (value, size) => value.length < size,
}

export default Validate;