type CompletionScreenProps = {
  onReplay: () => void;
};

export default function CompletionScreen({ onReplay }: CompletionScreenProps) {
  return (
    <section className="screen screen--completion" aria-label="かんせい画面">
      <div className="completion-card">
        <div className="completion-card__stamp" aria-hidden="true">
          ★
        </div>
        <h1 className="completion-card__title">できたね！</h1>
        <p className="completion-card__copy">
          5もん ぜんぶ できたよ。 もういちど ちょうせんしよう。
        </p>
        <button className="primary-button" type="button" onClick={onReplay}>
          もういちど
        </button>
      </div>
    </section>
  );
}
