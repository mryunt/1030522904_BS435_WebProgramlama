const animals = ["dog_1.jpg", "dog_2.jpg", "cat.jpg"];
console.log("animals", animals)

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] =
            [array[randomIndex], array[currentIndex]];
    }

    return array;
}
shuffle(animals);

var clicks = 0;

export const changeImg = (img) => {

    for (let i = 0; i < animals.length; i++) {
        if (animals[i] === "cat.jpg" && "img" + i === img) {
            document.getElementById(img).src = 'cat.jpg';
            clicks += 1;
            if (clicks === 1 || clicks === 2) {
                document.getElementById("alanId").style.display = "none";
                document.getElementById("kazandiId").style.display = "inline";
            }
            else {
                document.getElementById("alanId").style.display = "none";
                document.getElementById("yenildiId").style.display = "inline";
            }
        }
        else if (animals[i] === "dog_1.jpg" && "img" + i === img) {
            clicks += 1;
            document.getElementById(img).src = 'dog_1.jpg';
            if (clicks === 2) {
                document.getElementById("alanId").style.display = "none";
                document.getElementById("yenildiId").style.display = "inline";
            }
        }
        else if (animals[i] === "dog_2.jpg" && "img" + i === img) {
            clicks += 1;
            document.getElementById(img).src = 'dog_2.jpg';
            if (clicks === 2) {
                document.getElementById("alanId").style.display = "none";
                document.getElementById("yenildiId").style.display = "inline";
            }
        }

    }
}
