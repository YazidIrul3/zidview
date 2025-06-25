const withDataNotFound = (OriginalComponent) => {
  return (props) => {
    const { of, errorText, render } = props;

    if (!of || of.length === 0) {
      return errorText || "Data tidak ditemukan.";
    }

    return <OriginalComponent {...props} />;
  };
};

export default withDataNotFound;
