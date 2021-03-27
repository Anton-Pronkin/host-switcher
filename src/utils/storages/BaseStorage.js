export default class BaseStorage {
    static keys = {
        hosts: "hosts"
    };

    cache = new Map();

    async getHosts() {
        return await this.get(BaseStorage.keys.hosts, []);
    }

    async addHost({ name, value }) {
        const originalHosts = await this.getHosts();

        const ids = originalHosts.map(host => host.id);
        const maxId = originalHosts.length ? Math.max(...ids) : 0;

        const host = { id: maxId + 1, name, value };
        const hosts = [...originalHosts, host];

        await this.set(BaseStorage.keys.hosts, hosts);
    }

    async updateHost(changedHost) {
        const originalHosts = await this.getHosts();

        const index = originalHosts.findIndex(host => host.id === changedHost.id);
        if (index < 0) {
            return;
        }

        const hosts = originalHosts.slice();
        hosts[index] = { ...changedHost };

        await this.set(BaseStorage.keys.hosts, hosts);
    }

    async deleteHost(hostId) {
        const originalHosts = await this.getHosts();

        const hosts = originalHosts.filter(host => host.id !== hostId);
        await this.set(BaseStorage.keys.hosts, hosts);
    }

    async get(key, defaultValue) {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }

        const value = await this.load(key, defaultValue);
        this.cache.set(key, value);

        return value;
    }

    async set(key, value) {
        await this.save(key, value);
        this.cache.set(key, value);
    }

    async load(key, defaultValue) {
        throw new Error('The load method must be implemented in the specific storage.');
    }

    async save(key, value) {
        throw new Error('The save method must be implemented in the specific storage.');
    }
}
