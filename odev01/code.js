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
console.log(animals);
// if (animals[0] === "dog_1.jpg") {
//     console.log("dog1")
// }
// else if (animals[0] === "dog_2.jpg") {
//     console.log("dog2")
// }
// else {
//     console.log("cat")
// }
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "cat.jpg") {
        const img = "img" + i
        console.log(img)

    }
    else if (animals[i] === "dog_1.jpg") {
        console.log("img" + i)
    }
    else {
        console.log("img" + i)
    }

}
var clicks = 0;
const changeImg = (img) => {

    for (let i = 0; i < animals.length; i++) {
        if (animals[i] === "cat.jpg" && "img" + i === img) {
            // const img = "img" + i;
            console.log("cat", i);
            document.getElementById(img).src = '../ODEV01/cat.jpg';
            clicks += 1;
            console.log("catclick", clicks)
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
            console.log("img" + i);
            // const img = "img" + i;
            clicks += 1;
            console.log("dogclick", clicks)
            document.getElementById(img).src = '../ODEV01/dog_1.jpg';
            if (clicks === 2) {
                document.getElementById("alanId").style.display = "none";
                document.getElementById("yenildiId").style.display = "inline";
            }
        }
        else if (animals[i] === "dog_2.jpg" && "img" + i === img) {
            console.log("img" + i);
            // const img = "img" + i;
            clicks += 1;
            console.log("dogclick", clicks)
            document.getElementById(img).src = '../ODEV01/dog_2.jpg';
            if (clicks === 2) {
                document.getElementById("alanId").style.display = "none";
                document.getElementById("yenildiId").style.display = "inline";
            }
        }

    }
}
function imageReflesh(imageName) {
    document.getElementById(imageName).src = '../ODEV01/cat.jpg';
}
