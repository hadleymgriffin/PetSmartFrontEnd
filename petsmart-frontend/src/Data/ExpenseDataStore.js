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
                section2: [{
                    date: null,
                    traveledFrom: null,
                    traveledTo: null,
                    breakfast: null,
                    lunch: null, 
                    dinner: null, 
                    parkingOrTaxi: null,
                    airfare: null,
                    gas: null,
                    lodging: null,
                    phoneOrWifi: null,
                    misc: null
                }, {
                    date: null,
                    traveledFrom: null,
                    traveledTo: null,
                    breakfast: null,
                    lunch: null, 
                    dinner: null, 
                    parkingOrTaxi: null,
                    airfare: null,
                    gas: null,
                    lodging: null,
                    phoneOrWifi: null,
                    misc: null
                }, {
                    date: null,
                    traveledFrom: null,
                    traveledTo: null,
                    breakfast: null,
                    lunch: null, 
                    dinner: null, 
                    parkingOrTaxi: null,
                    airfare: null,
                    gas: null,
                    lodging: null,
                    phoneOrWifi: null,
                    misc: null
                }, {
                    date: null,
                    traveledFrom: null,
                    traveledTo: null,
                    breakfast: null,
                    lunch: null, 
                    dinner: null, 
                    parkingOrTaxi: null,
                    airfare: null,
                    gas: null,
                    lodging: null,
                    phoneOrWifi: null,
                    misc: null
                }, {
                    date: null,
                    traveledFrom: null,
                    traveledTo: null,
                    breakfast: null,
                    lunch: null, 
                    dinner: null, 
                    parkingOrTaxi: null,
                    airfare: null,
                    gas: null,
                    lodging: null,
                    phoneOrWifi: null,
                    misc: null
                }, {
                    date: null,
                    traveledFrom: null,
                    traveledTo: null,
                    breakfast: null,
                    lunch: null, 
                    dinner: null, 
                    parkingOrTaxi: null,
                    airfare: null,
                    gas: null,
                    lodging: null,
                    phoneOrWifi: null,
                    misc: null
                }, {
                    date: null,
                    traveledFrom: null,
                    traveledTo: null,
                    breakfast: null,
                    lunch: null, 
                    dinner: null, 
                    parkingOrTaxi: null,
                    airfare: null,
                    gas: null,
                    lodging: null,
                    phoneOrWifi: null,
                    misc: null
                }]
            };
            ExpenseDataStore.instance = this;
        }
        return ExpenseDataStore.instance;
    }
}

const instance = new ExpenseDataStore();

export default instance;