import React from 'react'
import ModalOpenButton from '../../ui/insight/ModalOpenButton'
import ModalTabs from '../../ui/insight/ModalTabs'



const profilePicModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 700,
    // height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: "10px 0 10px 30px",
    // p: 4,
    borderRadius: 5,
    // pr: 0,
    // pt: 1,
    // pb: 2
};

function ViewImage(props) {
    const changeProfileModalTabs = [
        { id: "addQuestionModalTab-1", label: "Change Profile", value: 0 },
        { id: "addQuestionModalTab-2", label: "Change Cover", value: 1 },
    ];
    return (
        <ModalOpenButton
            modalName="viewProfile-cover-modal"
            isTabHave={true}
            modalStyle={profilePicModal}
            tabValue={props.tabValue}
            header={<ModalTabs tabs={changeProfileModalTabs} />}
        >
            {props.children}
        </ModalOpenButton>
    )
}

export default ViewImage