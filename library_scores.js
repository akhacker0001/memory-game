const scores = (function () {
    let numTurns = 0;
    let numMatches = 0;
  
    function incrementNumTurns() {
      numTurns++;
    }
  
    function incrementNumMatches() {
      numMatches++;
    }
  
    function checkBoardComplete(numCards) {
      return numMatches === numCards / 2;
    }
  
    function calculatePercentage() {
      return (numMatches / numTurns) * 100;
    }
  
    function compareScores(newScore) {
      const highScore = localStorage.getItem("highScore") || 0;
      if (newScore > highScore) {
        localStorage.setItem("highScore", newScore.toString());
        return true;
      }
      return false;
    }
  
    function displayHighScore() {
      const highScore = localStorage.getItem("highScore") || 0;
      console.log(`High Score: ${highScore}`);
    }
  
    return {
      incrementNumTurns,
      incrementNumMatches,
      checkBoardComplete,
      calculatePercentage,
      compareScores,
      displayHighScore
    };
  })();
  