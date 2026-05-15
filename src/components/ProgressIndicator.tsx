type ProgressIndicatorProps = {
  current: number;
  total: number;
};

export default function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="progress-indicator" aria-label={`進みぐあい ${current} / ${total}`}>
      <span className="progress-indicator__label">すすみ</span>
      <span className="progress-indicator__value">
        {current} / {total}
      </span>
    </div>
  );
}
