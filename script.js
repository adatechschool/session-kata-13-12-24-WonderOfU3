let colorList = ["red", "yellow", "blue", "green", "black", "white", "purple", "pink"];

let generateListToFind = () =>
{
    let list = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 8);
        list[i] = colorList[randomNumber];
    }
    return (list);
}

let checkOne = (list1, list2, i) =>
{
    for (let a = 0; a < 4; a++)
        if (list1[a] === list2[i] && a === i)
            return (1);
    return (0);
}

let checkTwo = (list1, list2, i) =>
{
    for (let a = 0; a < 4; a++)
        if (list1[a] === list2[i] && a !== i)
            return (1);
    return (0);
}

let generateListGuess = () =>
{
    let list = prompt("Give me a list of 4 numbers separated by a coma and a space");
    list = list.split(", ");
    return (list);
}

let game = () =>
{
    let list1 = generateListToFind();
    let win = 0;
    console.log(list1);

    for (let i = 0; i < 12; i++) {
        let list2 = generateListGuess();
        let one = 0, two = 0;
        for (let b = 0; b < 4; b++) {
            one += checkOne(list1, list2, b);
            two += checkTwo(list1, list2, b);
        }
        if (one === 4) {
            win = 1;
            break;
        }
        console.log(one + " " + two);
    }
    if (win === 1)
        console.log("YOU WON");
    else
        console.log("YOU LOST");
}

game();
