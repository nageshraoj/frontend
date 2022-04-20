import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import * as actions from '../../actions'

import { student } from '../../student'

interface propTypes {
  open: boolean
  stud: student
  handleClose: () => void
}

const EditStudent = ({ open, handleClose, stud }: propTypes) => {
  const [firstName, setFristName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  useEffect(() => {
    setFristName(stud.firstName)
    setLastName(stud.lastName)
    setLocation(stud.location)
  }, [stud])

  const dispatch = useDispatch()

  const handleEdit = () => {
    const estud = {
      id: stud.id,
      firstName,
      lastName,
      location,
    }
    dispatch(actions.editStudent({ student: estud }))
    handleClose()
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Student Update Form </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            onChange={(e) => setFristName(e.target.value)}
            sx={{ mb: 2 }}
            label='First Name'
            value={firstName}
          />
          <TextField
            onChange={(e) => setLastName(e.target.value)}
            sx={{ mb: 2 }}
            label='Last Name'
            value={lastName}
          />
          <TextField
            onChange={(e) => setLocation(e.target.value)}
            sx={{ mb: 2 }}
            label='Location'
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
            onClick={handleEdit}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EditStudent
