export class TennisGame {
  score: string = "";

  getScore(m_score1: number, m_score2: number) {
    let tempScore = 0;

    if (m_score1 === m_score2) {
      this.score = this.getTiedScore(m_score1);
    } else if (m_score1 >= 4 || m_score2 >= 4) {
      this.score = this.getWinningScore(m_score1, m_score2);
    } else {
      this.score = this.getRunningScore(m_score1, m_score2);
    }
  }

  private getTiedScore(score: number): string {
    switch (score) {
      case 0:
        return "Love-All";
      case 1:
        return "Fifteen-All";
      case 2:
        return "Thirty-All";
      case 3:
        return "Forty-All";
      default:
        return "Deuce";
    }
  }

  private getWinningScore(m_score1: number, m_score2: number): string {
    let minusResult = m_score1 - m_score2;
    if (minusResult === 1) return "Advantage player1";
    else if (minusResult === -1) return "Advantage player2";
    else if (minusResult >= 2) return "Win for player1";
    else return "Win for player2";
  }

  private getRunningScore(m_score1: number, m_score2: number): string {
    let score = "";
    for (let i = 1; i < 3; i++) {
      if (i === 1) score += this.getScoreName(m_score1);
      else score += "-" + this.getScoreName(m_score2);
    }
    return score;
  }

  private getScoreName(tempScore: number) {
    switch (tempScore) {
      case 0:
        return "Love";
      case 1:
        return "Fifteen";
      case 2:
        return "Thirty";
      case 3:
        return "Forty";
    }
  }
}
