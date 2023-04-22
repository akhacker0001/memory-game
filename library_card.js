class Card {
    constructor(cardLink) {
      this.img = $(cardLink).children("img")[0];
      this.id = $(cardLink).attr("id");
    }
  
    isRevealed() {
      return $(this.img).attr("src") !== blankCard && $(this.img).css("opacity") === "1";
    }
  
    isMatch(firstCard) {
      return this.id === firstCard.id;
    }
  
    reveal() {
      $(this.img).fadeTo("fast", 1);
    }
  
    hide() {
      $(this.img).delay(300).fadeTo("fast", 0);
    }
  }

