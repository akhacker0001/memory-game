
export const cards = (function() {
    const cardBack = "images/back.png";
    const blankCard = "images/blank.png";
    const numImages =24;
    const cardImages = [];
    const cardSrcs = [];
    const cardCount = 2;
    let cardSrcIndex = 0;
  
    // Preload the card images
    for (let i = 1; i <= numImages; i++) {
      cardSrcs.push(`images/card_${i}.png`);
    }
    for (let i = 1; i <= cardSrcs.length; i++) {
      cardImages[i] = new Image();
      cardImages[i].src = cardSrcs[i];

    }
    function getImages(){
        return cardSrcs
        
    }

    console.log(cardImages,"cardImages")
  
    // Shuffle the card images
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    shuffle(cardSrcs);
  
    // Store the shuffled card images
  
    // Get the next available card image src
    function getNextCardSrc() {
      const src = cardObjs[cardSrcs[cardSrcIndex]].src;
      cardObjs[cardSrcs[cardSrcIndex]].count--;
      if (cardObjs[cardSrcs[cardSrcIndex]].count === 0) {
        cardSrcIndex++;
      }
      return src;
    }
  
    // Create the HTML for a card
    function createCardHTML(id) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("id", `card_${id}`);
  
      const cardLink = document.createElement("a");
      cardLink.setAttribute("href", "#");
      cardLink.setAttribute("id", `link_${id}`);
      cardLink.classList.add("cardLink");
  
      const cardImg = document.createElement("img");
      cardImg.setAttribute("id", `img_${id}`);
      cardImg.classList.add("cardImg");
      cardImg.setAttribute("src", cardBack);
      cardImg.setAttribute("alt", "Memory card");
  
      cardLink.appendChild(cardImg);
      card.appendChild(cardLink);
  
      return card;
    }
  
    // Flip a card using a fade effect
    function flipCardFade(cardImg, src) {
      $(cardImg).fadeOut("fast", function() {
        cardImg.src = src;
        $(this).fadeIn("fast");
      });
    }
  
    // Flip a card using a slide effect
    function flipCardSlide(cardImg, src) {
      $(cardImg).slideUp("fast", function() {
        cardImg.src = src;
        $(this).slideDown("fast");
      });
    }
  
    return {
      getNextCardSrc,
      createCardHTML,
      flipCardFade,
      flipCardSlide,
      getImages
    };
  })();
