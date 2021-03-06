import React from "react";

export default function RandomListComponent (props){
   const getCurrentDay =() => {
      const dayNames = [
         "Domingo",
         "Lunes ð§ð­",
         "Martes ðªâ¡",
         "MiÃ©rcoles ð§ââï¸ð§ââï¸",
         "Jueves ð¥±ð«",
         "Viernes ðð¥³",
         "Sabado"
      ];
      return dayNames[new Date().getDay()]
   };
   return (
      <React.Fragment>
         <h2> ððLista daily {getCurrentDay()}</h2>
         {
            (<ol> {props.sortedNames && 
               props.sortedNames.map((name, index) => name[1] ? <li key={index}>{ name[1] && name[0] }</li> : '' )}
            </ol>)   
         }

      </React.Fragment>
   );
}