
import React, { useState } from 'react'
import '../../styles/AuthStyles.css'
import axios from 'axios';
import Layout from '../../components/layout/Layout'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(
                "/api/v1/auth/forgot-password"
                ,
                { email, answer, newpassword }
            );
            if (res && res.data.success) {
                toast.success(res.data.message)
                navigate('/login')
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }
    return (
        <Layout title={"forgot Password- Ecommerce App"}>
            <div className='form-container'>
                <h1>Reset Password</h1>
                <form onSubmit={handleSubmit}>


                    <div className="mb-3">
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder='Enter Your Email'
                            required />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder='Enter Your Answer'
                            required />
                    </div>
                    <div className="mb-3">
                        <input type="password"
                            value={newpassword}
                            onChange={(e) => setNewpassword(e.target.value)}
                            className="form-control" id="exampleInputPassword1"
                            placeholder='Enter Your New Password'
                            required />
                    </div>

                    <button type="submit"
                        className="btn btn-primary">
                        RESET</button>
                </form>
            </div>
        </Layout>
    )
}

export default ForgotPassword