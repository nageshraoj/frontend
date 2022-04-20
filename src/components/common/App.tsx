import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../actions'
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Container,
} from '@mui/material'
import { student } from '../../student'
import { Edit, Delete } from '@mui/icons-material'
import AddStudent from '../pages/AddStudent'
import EditStudent from '../pages/EditStudent'
import RemoveStudent from '../pages/RemoveStudent'

const App = () => {
  const [addopen, setAddOpen] = useState<boolean>(false)
  const [editopen, setEditOpen] = useState<boolean>(false)
  const [deleteopen, setDeleteOpen] = useState<boolean>(false)
  const [stud, setStud] = useState<student>()

  const { students }: any = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getRequestStudents())
  }, [dispatch])

  const handleAddStudentClose = () => {
    dispatch(actions.getRequestStudents())
    setAddOpen(false)
  }

  const handleEdit = (estudent: student) => {
    setEditOpen(true)
    setStud(estudent)
  }

  const handleEditStudentClose = () => {
    setEditOpen(false)
  }

  const handleDelete = (estudent: student) => {
    setDeleteOpen(true)
    setStud(estudent)
  }

  const handleDeleteStudentClose = () => {
    setDeleteOpen(false)
  }
  return (
    <>
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          onClick={() => setAddOpen(true)}
          variant='contained'
          sx={{ position: 'sticky', top: '10px', mb: 5 }}
        >
          Add New Student
        </Button>
        {addopen && (
          <AddStudent open={addopen} handleClose={handleAddStudentClose} />
        )}
        {editopen && stud !== undefined && (
          <EditStudent
            open={editopen}
            handleClose={handleEditStudentClose}
            stud={stud}
          />
        )}

        {deleteopen && stud !== undefined && (
          <RemoveStudent
            open={deleteopen}
            handleClose={handleDeleteStudentClose}
            stud={stud}
          />
        )}
        <TableContainer
          sx={{
            overflow: 'scroll',
            height: '500px',
          }}
        >
          <Table sx={{ height: '500px' }}>
            <TableHead>
              <TableRow style={{ backgroundColor: '#bcc0ca', height: '35px' }}>
                <TableCell>S.No</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Modify</TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{ maxHeight: 'max-content', maxWidth: 'max-content' }}
            >
              {students.map((student: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell> {student.firstName}</TableCell>
                  <TableCell> {student.lastName}</TableCell>
                  <TableCell>{student.location}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleEdit(student)}
                      endIcon={<Edit />}
                    />
                    <Button
                      onClick={() => handleDelete(student)}
                      endIcon={<Delete />}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

export default App
