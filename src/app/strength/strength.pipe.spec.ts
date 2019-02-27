import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
  it('should display weak if strength is 8', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(8)).toBe('8 (weak)');
  });

  it('should display strong if strength is 10', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(10)).toBe('10 (strong)');
  });
});
