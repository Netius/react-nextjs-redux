const LoadingSpinner = ({isLoading}:{isLoading:boolean} ) => {
  return (
    <>
      {isLoading && (
      <div className="spinner-border spinner-border-sm text-primary" role="status">
        <span className="sr-only"></span>
      </div>
      )}
    </>
  )
}

export default LoadingSpinner;