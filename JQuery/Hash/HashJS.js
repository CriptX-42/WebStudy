var round = 1;
var ArrayGame = Array(3);
ArrayGame['a'] = Array(3);
ArrayGame['b'] = Array(3);
ArrayGame['c'] = Array(3);

ArrayGame['a'][1] = 0;
ArrayGame['a'][2] = 0;
ArrayGame['a'][3] = 0;

ArrayGame['b'][1] = 0;
ArrayGame['b'][2] = 0;
ArrayGame['b'][3] = 0;

ArrayGame['c'][1] = 0;
ArrayGame['c'][2] = 0;
ArrayGame['c'][3] = 0;

$(document).ready(function(){
    $('#btnStartGame').click(function(){

        //Validate nicknames
        if($('#player1').val() == ''){
            alert('Nickname is empty (Player 1)');
            return false;
        }else if($('#player2').val() == ''){
            alert('Nickname is empty (Player 2)');
            return false;
        }
       

        //show nickname
        $('#Nick1').html($('#player1').val());
        $('#Nick2').html($('#player2').val());

        //Control of 'divs' information
        $('#HomePage').hide();
        $('#StageGame').show();
    });
    $('.played').click(function(){
        var id_field_clicked = this.id;
        played(id_field_clicked);
       
        
    });

    
    function played(id){
		var icon = '';
		var dot = 0;

		if((round % 2) == 1){
			icon = 'url("imagens/marcacao_1.png")';
			dot = -1;
		} else {
			icon = 'url("imagens/marcacao_2.png")';
			dot = 1;
		}
		
		round++;

		$('#'+id).css('background-image', icon);

        var Line_Colun = id.split('-');

        ArrayGame[Line_Colun[0]][Line_Colun[1]] = dot;

        console.log(ArrayGame);
        CheckCombination()
        
    }
    function CheckCombination(){
        //Scan horizontally
        var score = 0;
        for(var i = 1; i <= 3; i ++){
            score = score + ArrayGame['a'][i];
        }
        winner(score);

        score = 0;
        for(var i = 1; i <= 3; i ++){
            score = score + ArrayGame['b'][i];
        }
        winner(score);
        score = 0;
        for(var i = 1; i <= 3; i ++){
            score = score + ArrayGame['c'][i];
        }
        winner(score);

        //vertically verifies
        for(var l = 1; l <=3; l++){
            score = 0;
            score += ArrayGame['a'][l];
            score += ArrayGame['b'][l];
            score += ArrayGame['c'][l];
            winner(score);
        }

        //check diagonally
        score = 0;
        score = ArrayGame['a'][1] + ArrayGame['b'][2] + ArrayGame['c'][3];
        winner(score);

        score = 0;
        score = ArrayGame['a'][3] + ArrayGame['b'][2] + ArrayGame['c'][1];
        winner(score);

    }
    function winner(score){
        if(score == -3){
            var played_1= $('#player1').val();
            alert(played_1+' is winner!!!! YOUUUU WINNNN');
            $('.played').off();
        }else if(score == 3){
            var played_2= $('#player2').val();
            alert(played_2+' is winner!!!! YOUUUU WINNNN');
            $('.played').off();
        }
    }
});