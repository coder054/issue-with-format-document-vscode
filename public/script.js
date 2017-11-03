new Vue({
  el: '#app',
  data:{
    total: 100,
    items: [
      { title: "harrypotter 1", author:"JK Rowling" },
      { title: "So do", author:"Vu trong phung" },
    ],
    cart: []
  },
  methods: {
    addItem (index){
      this.total+=10;
      this.cart.push(this.items[index]);
    }
  }
})