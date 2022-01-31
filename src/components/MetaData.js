// Helmet
import { Helmet } from "react-helmet-async";

const MetaData = ({
  title,
  description = "Napper Network is a Sheffield based digital marketing and web development agency.",
}) => {
  return (
    <Helmet>
      <title>Napper Network - {title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default MetaData;
