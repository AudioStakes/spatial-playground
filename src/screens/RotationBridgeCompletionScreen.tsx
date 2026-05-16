type RotationBridgeCompletionScreenProps = {
  onReplay: () => void;
  onBackToStart: () => void;
};

export default function RotationBridgeCompletionScreen({
  onReplay,
  onBackToStart,
}: RotationBridgeCompletionScreenProps) {
  return (
    <section
      className="screen screen--completion screen--bridge-completion"
      aria-label="Rotation Paper Bridge 完了画面"
    >
      <div className="completion-card completion-card--bridge">
        <div className="completion-card__stamp" aria-hidden="true">
          ★
        </div>
        <h1 className="completion-card__title">できたね！</h1>
        <p className="completion-card__copy">Bridgeの 5もんを すすめたよ。 もういちど できるよ。</p>
        <div className="completion-card__actions">
          <button className="primary-button" type="button" onClick={onReplay}>
            もういちど
          </button>
          <button className="ghost-button" type="button" onClick={onBackToStart}>
            はじめにもどる
          </button>
        </div>
      </div>
    </section>
  );
}
