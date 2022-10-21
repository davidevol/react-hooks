import React from 'react'
import { Card } from 'primereact/card';
import "./Accordion.css"

const Accordion = ({itens}) => {
         const expressaoJSX = itens.map((item, indice) => {
                  return (
                           <Card key={indice} className="border-1 border-400">
                                    <div>
                                    <i className="pi pi-angle-down"></i>
                                    <h5 className="inline ml-3">{item.titulo}</h5>
                                    </div>
                                    <p>{item.conteudo}</p>
                           </Card>
                  )
         })
return (
         <div>
                  {expressaoJSX}
         </div>
)
}
export default Accordion