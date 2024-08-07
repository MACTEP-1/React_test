const { default: loadingStatus } = require("@/helpers/loadingStatus");

const LoadingIndicator = ({ loadingState }) => {
    return <h3>{loadingState}</h3>
};

export default LoadingIndicator;