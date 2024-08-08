const LoadingSpinner = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading && (
        <div className="alert alert-info" role="alert">
          Loading images 
          <span className="ms-1 spinner-border spinner-border-sm text-primary" role="status"></span>
        </div>

      )}
    </>
  )
}

export default LoadingSpinner;