import type { ErrorMessageProps } from "@interfaces/errorTypes";

/**
 * Composant pour afficher les messages d'erreur personnalisés.
 * @param {ErrorMessageProps} props - Le message d'erreur à afficher.
 * @returns {JSX.Element} Un message d'erreur.
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
}: ErrorMessageProps): JSX.Element => {
  return (
    <div className="error-message">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
