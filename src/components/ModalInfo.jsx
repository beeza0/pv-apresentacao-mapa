import { Modal, Typography, Box } from '@mui/material';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 540,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
  };

const ModalInfo = ({ modalState, handleClose, open }) => {

    const renderActs = () => 
        modalState?.acts.map((act) => {
            return (
                <li>{act}</li>
            )
        })

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h4" component="h3">
                    {modalState?.title}
                </Typography>
                <Typography variant="h6">
                    {modalState?.subtitle}
                </Typography>
                <ul>
                    {modalState.acts && renderActs()}
                </ul>
                <img src={modalState?.image} alt="imagem" style={{ width: modalState.imageWidth, alignSelf: 'center' }}/>
            </Box>
        </Modal>
    )
}

export default ModalInfo