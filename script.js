const button = document.querySelector("#btn");
const inputField = document.querySelector("#guess");
const answer = Math.floor(Math.random()*20);

inputField.addEventListener("keypress", function(e){
    if (e.keyCode === 13) {
        play();
    }
} )



console.log(button);

button.addEventListener('click', play);

function play() {

    const userNumber = document.querySelector("#guess").value;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number between 1 and 20!',
          })
    }

    else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number!',
          })
    }

    else {
        if (userNumber > answer){
            Swal.fire({
                title: 'Oops, this number is too high, go lower!',
              })
        }

        else if (userNumber < answer){
            Swal.fire({
                title: 'Oops, this number is too low, go higher!',
              })
        }

        else {
            Swal.fire({
                title: 'Sweet! You won!',
                text: 'Good job! You guessed it!',
                imageUrl: 'https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Victory',
              })
        }
    }
}