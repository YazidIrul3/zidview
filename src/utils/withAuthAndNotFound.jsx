const withAuthAndNotFound = (OriginalComponent) => {
  return (props) => {
    console.log(props);

    return <OriginalComponent {...props} />;
  };
};

export default withAuthAndNotFound;
