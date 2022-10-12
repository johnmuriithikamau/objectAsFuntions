function  createTodo({name, day, time}) {
      return(
            `${name} ${day} ${time}`
      )
}

const t = createTodo({
      name: 'John',
      day: 'Everyday',
      time: 'All day'
})

console.log(t)