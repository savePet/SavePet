import { Animal } from "../model/Animal";
import axios, { AxiosInstance } from "axios"

export class AnimalClient {
    static listarAnimais() {
        throw new Error('Method not implemented.');
    }

    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/animais',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public async findById(id: number): Promise<Animal> {
        try {
            return (await this.axiosClient.get<Animal>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll(): Promise<Animal[]> {
        try {
            return (await this.axiosClient.get<Animal[]>(``)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(animal: Animal): Promise<void> {
        try {
            return (await this.axiosClient.post(``, animal)).data
        } catch (error: any) {
            console.log(error)
            return Promise.reject(error.response)
        }
    }

    public async excluir(animal: Animal): Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${animal.id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
}