document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let counter = document.getElementById('counter')
    let number = parseInt(counter.innerText)
    console.log(number)
    let isPaused = false

    let interval = setInterval(function() {
        // Update the value if not paused
        if (!isPaused) {counter.innerText = number++ };

    }, 1000); // Run every 1000 ms


    let pause = document.getElementById('pause')
    pause.addEventListener('click', function(e) {
        if (isPaused === false )
            {isPaused = true 
            pause.innerHTML = 'resume'}
        else {isPaused = false
            pause.innerHTML = 'pause'}
    })

    let minus = document.getElementById('minus')
    minus.addEventListener('click', function(e) {
        counter.innerText = parseInt(counter.innerText) - 1
    })

    let plus = document.getElementById('plus')
    plus.addEventListener('click', function(e) {
        counter.innerText = parseInt(counter.innerText) + 1
    })

    let heart = document.getElementById('heart')
     heart.addEventListener('click', function(e) {

        let number_already_liked = document.getElementById(counter.innerText)         
        let likes_count = 1
        let likes = document.querySelector('.likes')
         
        if (number_already_liked) {
            likes_count = parseInt(number_already_liked.querySelector('strong').innerText) + 1
            number_already_liked.querySelector('strong').innerText = likes_count
         } else {
            let li = document.createElement('li');
            li.id = counter.innerText
            li.innerHTML = `Number ${li.id} has: <strong> ${likes_count} </strong> likes`
            likes.appendChild(li)
        }
    }) 

  });