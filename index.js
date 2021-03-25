/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Inception", "Interstellar", "Dark Knight"],
      newMovie: ""
    };
  },
  methods: {
    addNewMovie: function () {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    }
  }
});