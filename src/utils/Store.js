export default class Store {
    static getHosts() {
        // Return test data
        return [{
            id: 0,
            name: "Main localhost",
            value: "localhost:9000"
        }, {
            id: 1,
            name: "Another host",
            value: "127.0.0.1"
        }];
    }
}
