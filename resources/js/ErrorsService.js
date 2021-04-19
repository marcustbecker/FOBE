

class ErrorsService {
    errors = {};
    message = null;

    getErrors() {
        return this.errors;
    }

    setErrors(res) {
        this.errors = res.data.errors;
    }

    getKey(key) {
        return (this.errors[key] != undefined) ? this.errors[key] : null;
    }

    reset(){
        this.errors = {};
        this.message = null;
    }
    setMessage(res) {
        this.message = res.data.message;
    }
    getMessage() {
        return (this.message != undefined) ? this.message : null;
    }

}

export default new ErrorsService();
