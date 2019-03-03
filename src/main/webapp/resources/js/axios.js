/**
 * http://usejsdoc.org/
 */
axios.get('/users', {
    params: {
      id: 1
    }
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
});