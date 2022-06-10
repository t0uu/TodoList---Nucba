import React,{useState} from 'react'

const Form = () => {
    const Lista = [
        {
            id: 1,
            Content:'Hola'
        },
        {
            id:2,
            Content: 'lorem'
        },

    ]
    const [List, SetLista] = useState(Lista)
    const [Notes,SetNotes] = useState("")


    const HandleOnchange = (e) => {
        SetNotes(e.target.value)
    }

    const HandleOnSubmit = (e) =>{
        e.preventDefault()
        if(Notes === ""){
            alert('Esta Vacio!')
        }else{
            const NewNotes = {
                id: List.length + 1,
                Content: Notes
            }
            console.log(NewNotes)
            SetLista(List.concat(NewNotes))
        }
    }

    const HandleDelete = () => {
        SetLista(List.splice(0,0))

    }


  return (
    <>
    <form onSubmit={HandleOnSubmit}>
        <input type="text" value={Notes} onChange={HandleOnchange}/>
        <button>Añadir Nota</button>
    </form>
    {List.map((Datos) => {
        return <ul key={Datos.id}>
            <li>{Datos.Content} </li>
        </ul>
    })}
    <button onClick={HandleDelete}>Borrar Lista</button>
    
    </>
  )
}

export default Form