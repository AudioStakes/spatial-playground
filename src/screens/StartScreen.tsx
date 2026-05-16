type StartScreenProps = {
  onStart: () => void;
  onBridgeStart: () => void;
};

export default function StartScreen({ onStart, onBridgeStart }: StartScreenProps) {
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

        <button className="secondary-button" type="button" onClick={onBridgeStart}>
          <span className="secondary-button__icon" aria-hidden="true">
            ↻
          </span>
          <span className="secondary-button__text">
            <span className="secondary-button__label">ためしてみる</span>
            <span className="secondary-button__subtext">1かいまわす</span>
          </span>
        </button>
      </div>
    </section>
  );
}
