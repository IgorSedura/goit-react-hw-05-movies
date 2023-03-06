import { GoBackButton } from './ButtonStyles';

export const Button = ({ backLinkHref }) => {
  return <GoBackButton to={backLinkHref}>Go back</GoBackButton>;
};
