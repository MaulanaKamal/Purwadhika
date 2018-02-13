let n = 3;
let player = n % 3;
let com = Math.round(Math.random() * 2) 

let artiSuit = n => {
    if (n == 0){
        return 'gajah'
    } else if (n == 1){
        return 'manusia'
    } else if (n == 2){
        return 'semut'
    }
}

// // 1 kalah sama 3 || gajah kalah sama semut
// // 2 kalah sama 1 || manusia kalah sama gajah
// // 3 kalah sama 2 || semut kalah sama manusia

let suit = (player,com) =>{
    let map = [2,0,1]
    if (map[player] == com ){
        return `player 1 adalah ${artiSuit(player)} dan computer adalah ${artiSuit(com)}\n player 1 kalah dan computer menang`
    } else if (player == com){
        return `player 1 adalah ${artiSuit(player)} dan computer adalah ${artiSuit(com)}\n player 1 dan computer seri`
    } else {
        return `player 1 adalah ${artiSuit(player)} dan computer adalah ${artiSuit(com)}\n player 1 menang dan computer kalah`
    }
    
}
console.log(com)
console.log(suit(player,com))

