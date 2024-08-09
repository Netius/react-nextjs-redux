import { toastMessageSlice } from "../../data/toastMessageSlice";
import { useDispatch, useSelector } from "react-redux";


const ToastMessage = () => {
  const {toastMessage, cssClass} = useSelector((state:any) => state.toast);
	const {clearToast} = toastMessageSlice.actions;
  const dispatch = useDispatch();

  return (
    <>
      {toastMessage &&
        <div id="toast-message" className={`toast align-items-center d-block ${cssClass}`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              {toastMessage}
            </div>
            <button onClick={() => dispatch(clearToast(""))} type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      }
    
    </>
  )
}

export default ToastMessage