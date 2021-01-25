import {writable} from "svelte/store";


const friends = writable([])
// const images = writable([
//   {
//     img: "../img/BG_59.png",
//   }
// ])

export const friendsStore = {
  subscribe: friends.subscribe,

  
  fetch: fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    res.json().then((data) => {
      friends.update(items => {
        items =  [...data]
        const images = [
          "../img/BG_8.png",
          "../img/BG_29.png",
          "../img/BG_32.png",
          "../img/BG_37.png",
          "../img/BG_47.png",
          "../img/BG_49.png",
          "../img/BG_56.png",
          "../img/BG_59.png",
          "../img/BG_49.png",
          "../img/BG_32.png",
        ]
        for(let i = 0; i < items.length; i++){
          items[i].isFilter = true
          items[i].img = images[i]
        }
        console.log(items)
        return items
      })
    // return data
  })
}),


  filter: (filterValue) => {
    friends.update(items => {
      for(let i = 0; i < items.length; i++){
        let friendName = items[i].name
        let friendUserName = items[i].username
        
        if(friendName.toUpperCase().indexOf(filterValue) > -1 || friendUserName.toUpperCase().indexOf(filterValue) > -1){
          items[i].isFilter = true
        }else{
          items[i].isFilter = false
        }
      }
      return items
    })
  },

}

// export default friendsStore