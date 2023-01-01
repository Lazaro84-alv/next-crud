import Client from "./Cliente";

export default interface ClientRepository {
  salve(client: Client): Promise<Client>
  delete(client: Client): Promise<void>
  getAll(): Promise<Client[]>
}