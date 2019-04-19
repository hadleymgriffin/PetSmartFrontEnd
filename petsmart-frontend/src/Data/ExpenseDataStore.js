// Singleton object used to share data between views.
// To use: import and access via ExpenseDataStore.data

class ExpenseDataStore {
    constructor() {
        if (!ExpenseDataStore.instance) {
            this.data = {
                name: null,
                employeeId: null,
                address1: null,
                address2: null,
                city: null,
                state: null,
                country: null,
                zip: null,
                reason: null,
                reasonDetails: null,
            };
            ExpenseDataStore.instance = this;
        }
        return ExpenseDataStore.instance;
    }
}

const instance = new ExpenseDataStore();

export default instance;