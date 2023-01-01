import { useEffect, useState } from "react"
import ClientRepository from "../core/ClientRepository"
import ClientCollection from "../firebase/db/clientCollection"
import Client from "../core/Cliente"
import useTableOurForm from "./useTableOurForm"

export default function useClients() {
  const repo: ClientRepository = new ClientCollection()

  const { tableVisible, formVisible, displayTable, displayForm } = useTableOurForm()

  const [client, setClient] = useState<Client>(Client.empty)
  const [clients, setClients] = useState<Client[]>([])

  useEffect(getAll, [])
  
  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      displayTable()
    })
  }

  function selectedClient(client: Client) {
    setClient(client)
    displayForm()
  }

  async function deletedClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  function newClient() {
    setClient(Client.empty())
    displayForm()
  }

  async function salveClient(client: Client) {
    await repo.salve(client)
    getAll()
  }

  return {
    client,
    clients,
    newClient,
    salveClient,
    deletedClient,
    selectedClient,
    getAll,
    tableVisible,
    displayTable,
  }
}