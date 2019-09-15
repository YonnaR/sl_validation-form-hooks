import React,{ useEffect, useState } from "react";

const UseMoneyInput = ()  =>{

  const [ value , setValue ] = useState<string>('')
  const [ isError, setIsError ] = useState<boolean>(false)
  const [ isValid, setIsValid ] = useState<boolean>(false)

  useEffect(()=>{
    let isItValid = isNewValueIsCorrect(value)
    //traitement goes here
    if( !isItValid ){
      setIsError(true)
      setIsValid(false)
    } 
    else{
      setIsValid(true)
      setIsError(false)
    }
  },[value])

  const isNewValueIsCorrect :(s :string)=>boolean = s =>{

    return true
  }
  
  const onChange :( e: string )=>void = e => {if(e) setValue(e)}

  
  return [ value, onChange, isError, isValid ]
}

export default UseMoneyInput