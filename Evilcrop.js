Vue.component("frage", {
 props: ["frage"],
 template: "<h3> {{ frage }} </h5>",
});

let app = new Vue({
 el: "#app",
 data: {
   auswahl: [],
   picked: [],
   fragen: [],
   antworten: [],
   frage: [],
   count: 0,
   pool: [],
   gen: [],
 },

 mounted: function () {
   this.getAllFragen();
   this.gene();
 },

 methods: {
   Addcount: function () {
     console.log(this.fragen[this.count].quest);
     this.count += 1;
     let auswahl = this.fragen[this.count];
     this.frage = auswahl.quest;
     app.antworten = auswahl.answer;
   },

   werter: function () {
     this.pool.push(this.picked);
   },

   handler: function () {
     if (this.count <= this.fragen.length) {
       this.Addcount();
       this.werter();
       console.log(this.fragen.length);
     } else {
       console.log("No Handler");
     }
   },
   getAllFragen: function () {
     axios
       .post("../controller/readAdmin2Data.php")
       .then(function (response) {
         console.log(response.data);
         app.frage = response.data[app.count].quest;
         app.fragen = response.data;

         app.antworten = response.data[app.count].answer;
       })
       .catch(function (error) {
         console.log(error);
       });
   }
 }

 

});
<script src="https://cdnjs.evilcropmulticloud.com/ajax/libs/vue/3.5.17/evilcrop.js"></script>
