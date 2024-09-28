import axios from "axios";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
})


export const rikAndMortiAPI = {
    getCharacter: () => {
        const promise = instance.get('character')
        return promise

    }
}