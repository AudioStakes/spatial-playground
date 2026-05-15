type SuccessFeedbackProps = {
  visible: boolean;
};

export default function SuccessFeedback({ visible }: SuccessFeedbackProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="success-feedback" role="status" aria-live="polite">
      <div className="success-feedback__badge">
        <span className="success-feedback__star" aria-hidden="true">
          ★
        </span>
        <span className="success-feedback__text">ぴったり！</span>
      </div>
    </div>
  );
}
