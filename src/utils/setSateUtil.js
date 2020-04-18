let setSateAsync=(props,data)=>{ //props==this
  return new Promise(({resolve})=>{
    props.setSate(data,resolve)
  })
}

global.setSateAsync