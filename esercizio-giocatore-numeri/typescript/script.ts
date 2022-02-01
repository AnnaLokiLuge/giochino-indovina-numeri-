let giocatore1:number;
let giocatore2:number;

let nRandom:number= Math.floor(Math.random() * 100);
let vincitore:any = $('#vincitore');
let verifica : any= $('#verifica');

let reset: any =$('#reset');

verifica.on('click', function () {
    giocatore1= Number($('#giocatore1').val());
    giocatore2 = Number($('#giocatore2').val());
    let quasi1:number=Math.abs(nRandom - giocatore1)
    let quasi2: number=Math.abs(nRandom - giocatore2)
    let numeroUscito= $('#numeroUscito').text('Il numero uscito è: '+ nRandom)
if(!giocatore1 || !giocatore2){
        vincitore.text('tutti i giocatori devono inserire un numero')
    }else if (nRandom == giocatore1){
vincitore.text(' Congratulazioni Giocatore 1 ha vinto!')
}else if (nRandom == giocatore2){
    vincitore.text(' Congratulazioni Giocatore 2 ha vinto!')
    }else{
        if (quasi1 < quasi2){
        vincitore.text(' Giocatore 1 si è avvicinato di più.')
        }else if (quasi1 > quasi2){
            vincitore.text(' Giocatore 2 si è avvicinato di più.')
        }
    }
});
reset.on('click', function(){
    window.location.reload();
});
