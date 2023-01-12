class Game {
  constructor() {}

  getState() {
    database.ref("gameState").on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    jet1 = createSprite(width / 2 - 50, height - 100);
    jet1.addImage("jet1", jet1_img);
    jet1.scale = 1;

    jet2 = createSprite(width / 2 + 100, height - 100);
    jet2.addImage("jet2", jet2_img);
    jet2.scale = 1;

    jets = [jet1, jet2];
  }

  handleElements() {
    form.hide();
   // form.titleImg.position(40, 50);
   // form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(bg, 0, -height * 5, width, height * 6);
      var index=0;
      for(var plr in allPlayers){
        index=index+1;
        var x=allPlayers[plr].positionX;
        var y=height-allPlayers[plr].positionY;

      jets[index-1].position.x=x;
    jets[index-1].position.y=y;
      }
      this.handlePlayerControls();
      drawSprites();
    }
  }

  handlePlayerControls(){
    if(keyDown(UP_ARROW)){
      player.positionY+=10;
      player.update();
    }
  }
}
