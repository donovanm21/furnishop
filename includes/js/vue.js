// Vue Store App
const app = Vue.createApp({
    data(){
        return {
            products: [
                { title: "DIDIER FABRIC DINING CHAIR", description: "Chair", price: 1499, image: "includes/img/store_pics/chair1.jpg", incard: false, available: true },
                { title: "JADE WHITEWASH DINING CHAIR", description: "Chair", price: 999, image: "includes/img/store_pics/chair2.jpg", incard: false, available: true },
                { title: "FINA FABRIC DINING CHAIR", description: "Chair", price: 659, image: "includes/img/store_pics/chair3.jpg", incard: false, available: true },
                { title: "TITAN 3 DOOR 3 DRAWER UNIT", description: "Cupboard", price: 2899, image: "includes/img/store_pics/cupboard1.jpg", incard: false, available: true },
                { title: "TITAN 2 DOOR 2 DRAWER UNIT", description: "Cupboard", price: 1949, image: "includes/img/store_pics/cupboard2.jpg", incard: false, available: true },
                { title: "TITAN 2 DOOR UNIT", description: "Cupboard", price: 1799, image: "includes/img/store_pics/cupboard3.jpg", incard: false, available: true },
                { title: "VICCI UPHOLSTERED HEADBOARD", description: "Headboard", price: 2199, image: "includes/img/store_pics/headboard1.jpg", incard: false, available: true },
                { title: "DANI VELVET TOUCH HEADBOARD", description: "Headboard", price: 1579, image: "includes/img/store_pics/headboard2.jpg", incard: false, available: true },
                { title: "KARA HEADBOARD", description: "Headboard", price: 699, image: "includes/img/store_pics/headboard3.jpg", incard: false, available: true }
            ],
            cart: [],
            checkout: false
        }
    },
    methods: {
        addToCart(product){
            this.cart.push(product)
            console.log(this.cart)
        },
        cartItems(){
            return this.cart.length
        },
        cartTotal(){
            total = 0
            if(this.cart.length !== 0){
                for(i in this.cart){
                    total += this.cart[i]['price']
                }
            }
            return total
        },
        removeItem(item){
            this.cart.pop(item)
        },
        toggleCheckOut(){
            this.checkout = !this.checkout
        }
    },
    computed: {

    }
})

// Mount App to Element
app.mount('#app')

