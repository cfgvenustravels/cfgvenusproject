// creating a new click event

var blogTitle = document.getElementsByClassName("blog-title")[0];

// change the color of the text when mouse enters it

// blogTitle.addEventListener('mouseenter', function(event){
//     event.target.style.color = 'red'
// })

blogTitle[0].addEventListener('click' , function(event){
    event.target.style.color = 'red'
})