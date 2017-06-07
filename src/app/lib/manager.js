import API from './api.js';

class Manager {
    getSurveys() {
        // Generally, here is where you would obfuscate what urls you use.
        // This way, your methods describe their intention.
        // Here, you're again able to add some logic before the request gets back to the view layer.
        return API.GET();
    }
}

export default new Manager;