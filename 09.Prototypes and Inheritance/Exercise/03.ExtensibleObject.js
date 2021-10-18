function extensibleObject() {
    return {
        extend(template) {
            Object.setPrototypeOf(this, template);
            Object.assign(this, template);
        }
    }
}