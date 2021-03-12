// Vue Store App
const app = new Vue({
    el: '#app',
    data: {
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
        checkout: false,
        // Form Validation Fields
        errors: [],
        firstname: null,
        lastname: null,
        email: null,
        address: null,
        zip: null,
        ccname: null,
        ccnumber: null,
        ccexpiration: null,
        cccvv: null
    },
    mounted() {
        if (localStorage.getItem('cart')) {
            try {
                this.cart = JSON.parse(localStorage.getItem('cart'))
            } catch(e) {
                localStorage.removeItem('cart')
            }
        }
        if (localStorage.getItem('checkout')) {
            try {
                this.checkout = JSON.parse(localStorage.getItem('checkout'))
            } catch(e) {
                localStorage.removeItem('checkout')
            }
        }
    },
    methods: {
        addToCart(product){
            this.cart.push(product)
            const parseCart = JSON.stringify(this.cart)
            localStorage.setItem('cart', parseCart)
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
            const parseCart = JSON.stringify(this.cart)
            localStorage.setItem('cart', parseCart)
        },
        toggleCheckOut(){
            this.checkout = !this.checkout
            const parseCheckout = JSON.stringify(this.checkout)
            localStorage.setItem('checkout', parseCheckout)
            this.errors = []
        },
        checkForm: function (e) {
            if (this.firstname && this.lastname && this.email && this.address && this.zip && this.ccname && this.ccnumber && this.ccexpiration && this.cccvv) {
                this.cart = []
                const parseCart = JSON.stringify(this.cart)
                localStorage.setItem('cart', parseCart)
                this.checkout = !this.checkout
                const parseCheckout = JSON.stringify(this.checkout)
                localStorage.setItem('checkout', parseCheckout)
                this.errors = []
                return true;
              }
        
              this.errors = []
        
              if (!this.firstname) {
                this.errors.push('Valid first name is required.')
              }
              if (!this.lastname) {
                this.errors.push('Valid last name is required.')
              }
              if (!this.email) {
                this.errors.push('Please enter a valid email address for shipping updates.')
              }
              if (!this.address) {
                this.errors.push('Please enter your shipping address.')
              }
              if (!this.zip) {
                this.errors.push('Zip code required.')
              }
              if (!this.ccname) {
                this.errors.push('Name on card is required.')
              }
              if (!this.ccnumber) {
                this.errors.push('Credit card number is required')
              }
              if (!this.ccexpiration) {
                this.errors.push('Expiration date required')
              }
              if (!this.cccvv) {
                this.errors.push('Security code required')
              }
        
              e.preventDefault()
        }
    },
    computed: {

    }
})

