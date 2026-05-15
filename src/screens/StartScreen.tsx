type StartScreenProps = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <section className="screen screen--start" aria-label="スタート画面">
      <div className="hero-card">
        <p className="hero-card__eyebrow">くるっと まわして、ぴったり あわせよう</p>
        <h1 className="hero-card__title">くるっと むきを あわせよう</h1>
        <p className="hero-card__copy">やじるしを タップして、おてほんと おなじ むきにしよう</p>

        <div className="hero-card__demo" aria-hidden="true">
          <div className="hero-card__demo-label">おてほん</div>
          <div className="hero-card__demo-stage">
            <div className="hero-card__demo-arrow hero-card__demo-arrow--reference" />
            <div className="hero-card__demo-arrow hero-card__demo-arrow--target" />
          </div>
        </div>

        <button className="primary-button" type="button" onClick={onStart}>
          はじめる
        </button>
      </div>
    </section>
  );
}
