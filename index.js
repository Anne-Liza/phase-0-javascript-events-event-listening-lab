function addingEventListener() {
   const button = document. getElementById("button");
    button.addEventListener ("click", function(e){
    e.preventDefault();
    console.log("Clicked");
});
}
addingEventListener();