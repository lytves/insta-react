export default class InstaService {

    // commented lines to working with json-server,
    // now is using local json files (posts.json, users.json)

    constructor() {
        // this._apiBase = 'http://localhost:3001';
        this._apiBase = 'http://localhost:3000';
    }

    getResource = async (url) => {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return res.json();
    };

    getAllPosts = async () => {

        // return await this.getResource('/posts/');
        return await this.getResource('/posts.json');
    };

    getAllUsers = async () => {

        // return await this.getResource('/users/');
        return await this.getResource('/users.json');
    };

    getAllPhotos = async () => {

        // const res = await this.getResource('/posts/');
        const res = await this.getResource('/posts.json');
        return res.map(this._transformPost);
    };

    // transform each post to remove unused data
    _transformPost = (post) => {

        return {
            src: post.src,
            alt: post.alt,
            id: post.id
        }
    }
}