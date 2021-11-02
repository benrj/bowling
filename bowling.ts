export class Bowling {
  private currentScore = 0;
  private currentFrame = [];

  public roll(pins: number) {
    this.currentFrame.push(pins);
    // decide if frame is over
    
    // score the frame and add to currentScore
    // this.currentScore += pins;
    // reset the frame
  }

  public score(): unknown {
    return this.currentScore;
  }
}
