import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  InputLabel,
  Typography,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import * as actions from '../../actions'
import { student } from '../../student'

interface propTypes {
  open: boolean
  stud: student
  handleClose: () => void
}

const RemoveStudent = ({ open, handleClose, stud }: propTypes) => {
  const dispatch = useDispatch()
  const handleRemove = () => {
    dispatch(actions.removeStudent({ student: stud }))
    handleClose()
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Do you want to remove? </DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', width: '300px' }}
        >
          <InputLabel sx={{ display: 'flex' }}>
            <Typography variant='inherit' sx={{ flex: '1' }}>
              First Name{' '}
            </Typography>
            <Typography sx={{ flex: '1' }} variant='inherit'>
              {stud.firstName}{' '}
            </Typography>
          </InputLabel>

          <InputLabel sx={{ display: 'flex' }}>
            <Typography sx={{ flex: '1' }}>Last Name </Typography>
            <Typography sx={{ flex: '1' }} variant='inherit'>
              {stud.lastName}{' '}
            </Typography>
          </InputLabel>

          <InputLabel sx={{ display: 'flex' }}>
            <Typography sx={{ flex: '1' }}>Location </Typography>
            <Typography sx={{ flex: '1' }} variant='inherit'>
              {stud.location}
            </Typography>
          </InputLabel>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: 'red',
              color: 'white',
              width: '100%',
              '&:hover': {
                backgroundColor: 'blue',
              },
            }}
            onClick={handleClose}
          >
            Cancle
          </Button>
          <Button
            sx={{
              backgroundColor: 'green',
              color: 'white',
              width: '100%',
              '&:hover': {
                backgroundColor: 'blue',
              },
            }}
            onClick={handleRemove}
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default RemoveStudent
