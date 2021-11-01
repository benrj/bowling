export class Bowling {
  private currentScore = 0;

  public roll(pins: number) {
    this.currentScore += pins;
  }

  public score(): unknown {
    return this.currentScore;
  }
}
