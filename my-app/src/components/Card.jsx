import { Card } from 'antd';
const jwt = require ('jsonwebtoken');

const MyCard = () => {

    const token = localStorage.getItem('Token')
    
    const CardContent = () => {
        let decoded = jwt.verify(token, 'AlkemyChallengeJS')
        return decoded.userName
    }


    return (
  <>
    <Card title="Already logged in as:" style={{ width: 300 }}>
        {CardContent()}
    </Card>
    
  </>
    )
}

export default MyCard