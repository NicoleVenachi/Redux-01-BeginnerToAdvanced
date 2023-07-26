
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'

const Notificstion = ({ type, message }) => {

  const notification = useSelector(state => state.ui.notification)
  const dsipatch = useDispatch()

  const handleClose = () => {
    dsipatch(uiActions.showNotification({
      open: false,
    }))
  }

  return (
    <div>
      {
        notification.open &&
        <Alert severity={type} onClose={handleClose}>
          {message}
        </Alert>
      }
    </div>
  )
}

export default Notificstion
