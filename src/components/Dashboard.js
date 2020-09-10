import React from 'react'

export default function Dashboard() {

    const [step, setstep] = useState('ble_connect');
    const steps = ['ble_connect',
    'badge_evaluation','role_evaluation',
    'profile_evaluation','environment_evaluation'];
    const [badgerequest, setbadgerequest] = useState({
        bid : ''
    });
    const [rolerequest, setrolerequest] = useState({
        userID: '',
        requestID: ''
    })
    const [profilerequest, setprofilerequest] = useState({
        requestID: '',
        valueList: {

        } 
    })
    const [environmentrequest, setenvironmentrequest] = useState({
        requestID: '',
        valueList: {

        }
    })
    const [decision, setdecision] = useState({})
    
    return (
        <div>
            
        </div>
    )
}
