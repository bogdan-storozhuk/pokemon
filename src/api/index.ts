import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

export const getPokemonList = (offset: number) =>
  axiosInstance
    .get(`${baseUrl}/pokemon/?limit=12&offset=${offset}`)
    .then((data) => data);

export const getPokemon = (pokemonUrl: string) =>
  axiosInstance.get(pokemonUrl).then((data) => data);
