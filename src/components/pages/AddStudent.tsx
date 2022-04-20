import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import * as actions from '../../actions'

interface propTypes {
  open: boolean
  handleClose: () => void
}

const AddStudent = ({ open, handleClose }: propTypes) => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  const dispatch = useDispatch()

  const addNewStudent = () => {
    const stud = {
      firstName,
      lastName,
      location,
    }
    dispatch(
      actions.addStudent({
        student: stud,
      })
    )
    handleClose()
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Student Form</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            sx={{ mb: 2 }}
            label='First Name'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <TextField
            sx={{ mb: 2 }}
            label='Last Name'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <TextField
            sx={{ mb: 2 }}
            label='Location'
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
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
            onClick={addNewStudent}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddStudent
