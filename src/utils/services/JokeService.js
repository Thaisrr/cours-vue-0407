import axios from "axios";

class JokeService {
    url = 'http://localhost:3000/jokes';

    async getAll() {
       try {
           const {data} = await axios.get(this.url);
           return data;
       } catch (e) {
           this.handleError(e);
        }
    }

    async getById(id) {
        const {data} = await axios.get(`${this.url}/${id}`);
        return data;
    }

    async getByJoke(joke) {
        const {data} = await axios.get(this.url, {
            params: {
                joke : joke
            },
            headers: {
                'Authorization' : 'Bearer jlfjdslfjsdljflsdjfl'
            }
        })
        return data;
    }

    async create(joke) {
        const {data} = await axios.post(this.url, joke, );
        return data;
    }

    async update(joke) {
        const {data} = await axios.put(`${this.url}/${joke.id}`, joke);
        return data;
    }

    async delete(id) {
        await axios.delete(`${this.url}/${id}`);
        return true
    }

    handleError(e) {
        alert('Nope !')
        console.error(e)
    }
}

export default new JokeService();