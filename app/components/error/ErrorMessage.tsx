export const ErrorMessage = ({ isError }: { isError: boolean }) => {
  return (
    <>
      {isError && (
        <div className="alert alert-danger" role="alert">
          Something went wrong!
        </div>

      )}
    </>
  )
}
