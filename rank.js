// com o porder do protagonista o heroi "sempre" Ganha!!

const player = {
    vitorias: 0,
    derotas: 0,
    rank: ""
};


const rank = [
    ["Ferro", 0],
    ["Bronze", 10], 
    ["Prata", 20], 
    ["Ouro", 50],
    ["Diamante", 80], 
    ["Lendário", 90], 
    ["Imortal",101]
]

function atualizaRanklHero(){
    player.vitorias = parseInt(Math.random() * 100);
    for (var i = 0; i < rank.length; i++){
        if ( rank[i][1] <= player.vitorias){
            player.rank = rank[i][0];
        }
    }
    console.log("O Herói tem de saldo de "+ player.vitorias + " está no nível de "+ player.rank )    
}


atualizaRanklHero();