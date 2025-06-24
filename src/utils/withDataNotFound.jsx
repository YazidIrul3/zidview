const withDataNotFound = (OriginalComponent) => {
  return (props) => {
    const { of, errorText, render } = props;

    if (!of || of.length === 0) {
      return <p>{errorText || "Data tidak ditemukan."}</p>;
    }

    return <OriginalComponent {...props} />;
  };
};

export default withDataNotFound;
