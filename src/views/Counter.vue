<template>
<main>
      <!--Banner section-->
      <section class="head-section">
        <div class="pt-2 pb-5 container">
          <div class="row d-flex align-items-center">
            <div class="col-md-6 px-3">
              <h1 id="text-style">Buy the Sweaters</h1>
              <h1 class="text-style2">for Winter</h1>
              <p>
                Winter Fashion is back with latest styles for this winter. Find
                the sweaters and jacket of your choice and get with 25%
                discount. Offer valid just for 5 days.
              </p>
              <button type="button" class="btn penguin-btn">
                <i class="fa fa-shopping-cart"></i> BUY NOW
              </button>
<!-- Counter Section -->
              <div class="home">
    <div class="counter"><b>Qty: {{ counter }} </b></div>
 <button class="calc" @click="increment">+</button>
 <button class="calc"  @click="decrement">-</button>
 <button class="calc"  @click="reset">reset</button>
 <input type="number" placeholder="0" class="value" v-model="value" />
    <button class="calc" @click="setValue(value)">Set Value</button>
            </div>
            </div>
            <div class="col-md-6 how-img px-5">
              <img src="../assets/download-12.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      </main>
      </template>
      <script>

export default {
  computed:{
    counter(){
      return this.$store.getters.counter
    }
  },
  methods: {
    increment(){
     this.$store.dispatch('increment') 
    },
    reset(){
     this.$store.dispatch('reset') 
    },
    decrement(){
     this.$store.dispatch('decrement') 
    },
   setValue(value){
    this.$store.dispatch('setValue', value)
  }
  },
}
</script>
<style scoped >
*{
  background-color: #fff;
}
/* counter */
.counter{
font-size: 20px;
color:#42b983;
margin: 10px 4px;
font-weight: 700px;
}
.calc{
background-color:rgba(250, 190, 76, 1); 
  border: none;
  color: rgb(90, 82, 82);
  padding: 8px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 17px 4px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 10px;
}
.calc:hover {
  background-color: #42b983;
  color: white;
}
.value{
  margin-right: 6px;
 margin-left: 6px;
 padding: 10px 3px;
 background-color: rgb(217, 214, 208);
 border-radius: 10px;
}

.dummy{
margin: auto;
}
h1{
   margin-top:20px
}
</style>