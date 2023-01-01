import { useState } from "react";
import Entrance from "./Entrance";
import Client from "../core/Cliente";
import Button from "./Button";

interface FormProps {
  client: Client
  onChangeClient?: (client: Client) => void
  called?: () => void
}

export default function Form(props: FormProps) {
  const id = props.client?.id
  
  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)

  return (
    <div>
      {id ? (
        <Entrance
          readonly 
          text="Code" 
          value={id}
          className="mb-5" 
        />
      ) : false}
      <Entrance 
        text="Name" 
        value={name}
        onChange={setName}
        className="mb-5"
      />
      <Entrance 
        text="Age" 
        type="number" 
        value={age}
        onChange={setAge}
      />
      <div className="flex justify-end mt-7">
        <Button color="blue" className="mr-2"
          onClick={() => props.onChangeClient?.(new Client(name, +age, id))}
        >
          {id ? 'Toggle' : 'Salve'}
        </Button>
        <Button onClick={props.called} >
          Cancel
        </Button>
      </div>
    </div>
  )
}