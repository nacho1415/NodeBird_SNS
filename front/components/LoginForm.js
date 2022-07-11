import React, {useCallback, useState} from 'react';
import { Form, Button, Input } from 'antd';
import Link from 'next/link'
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
    marginTop: 10px;
`

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, onChangeId] = useInput('')
    const [password, onChangePassword] = useInput('')


    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    return (
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input 
                    name="user-id" 
                    type="id"
                    value={id}
                    onChange={onChangeId}
                    required
                />
            </div>
            <div>
                <label htmlFor="user-id">비밀번호</label>
                <br />
                <Input 
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />

            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </Form>
    )
}

LoginForm.PropTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;