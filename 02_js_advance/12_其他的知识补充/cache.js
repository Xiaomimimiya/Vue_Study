class Cache {
    constructor(isLocal = true) {
        this.storage = isLocal ? localStorage : sessionStorage
    }

    setCache(key, value) {
        if (!value) {
            throw new Error("value is undefined")
        }
        if (value) {
            return this.storage.setItem(key, JSON.stringify(value))
        }

    }

    getCache(key) {
        const result = this.storage.getItem(key)
        if (result) {
            return JSON.parse(result)
        }
    }

    removeCache(key) {
        this.storage.removeItem(key)
    }

    clear() {
        this.storage.clear()
    }
}
const localCache = new Cache()
const sessionCache = new Cache(false)   // sessionStorage