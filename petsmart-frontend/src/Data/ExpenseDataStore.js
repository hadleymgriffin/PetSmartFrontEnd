// Singleton object used to share data between views.
// To use: import and access via ExpenseDataStore.data

class ExpenseDataStore {
    constructor() {
        if (!ExpenseDataStore.instance) {
            this.data = {section1: null};
            ExpenseDataStore.instance = this;
        }
        return ExpenseDataStore.instance;
    }
}

const instance = new ExpenseDataStore();

export default instance;


