import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { alignProperty } from '@mui/material/styles/cssUtils';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://naver.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUpPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const [agreePolicy, setAgreePolicy] = useState(false);
  const [agreeInfoCollection, setAgreeInfoCollection] = useState(false);
  const [agreePromotionEmails, setAgreePromotionEmails] = useState(false);
  
  const handleAgreePolicyChange = (event) => {
    setAgreePolicy(event.target.checked);
  };
  return (
    <div>
        {/* <ThemeProvider theme={defaultTheme}> */}
      {/* <div> */}
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <div class = "pageDiv">
            <div class ="pageTitle" style={{marginTop:'50px'}}>
                회원가입
            </div>
            <div class ="pageAddScript" >
                편리함. 그 이상의 능력에 빠질 준비
            </div>
        </div>
        <div className='signUpDataAll'>
          <Box component="form" noValidate onSubmit={handleSubmit} 
          sx={{ mt: 3, alignItems: 'center',
                        "& fieldset": {borderTopColor:'white',
                                        borderRightColor:'white',
                                        borderLeftColor:'white',
                                        borderBottomColor:'black',
                                        borderRadius:0
                                        } }}>
            <div className="setData">
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    autoComplete="given-name"
                    name="id"
                    required
                    fullWidth
                    id="id"
                    label="Id"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="EMAIL"
                    name="email"
                    autoComplete="email"
                    />
                </Grid>
                <button className='sendBtn'>발송</button>
                <Grid item xs={10}>
                    <TextField
                    required
                    fullWidth
                    id="email_authentication"
                    label="전송된 인증번호를 입력해주세요"
                    name="email_authentication"
                    autoComplete="email-authentication-number"
                    />
                </Grid>
                <button className='authenBtn'>인증</button>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="password_check"
                    label="Password Check"
                    type="password_check"
                    id="password_check"
                    />
                </Grid>
                
                </Grid>
            </div>
            <div className="middleScript">개인정보</div>
            <div className="userData">
                <Grid container spacing={2}>
                <Grid item xs={2} >이름</Grid>
                <Grid item xs={10}>
                    <TextField
                    autoComplete="given-name"
                    name="user_name"
                    required
                    fullWidth
                    id="user_name"
                    label=""
                    autoFocus
                    />
                </Grid>
                <Grid item xs={2} >성별</Grid>
                <Grid>
                <div className="select">
                <input
                  type="radio"
                  id="select"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={handleGenderChange}
                />
                <label htmlFor="select" className={gender === 'Male' ? "selected" : ""}>남성</label>
                <input
                  type="radio"
                  id="select2"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={handleGenderChange}
                />
                <label htmlFor="select2" className={gender === 'Female' ? "selected" : ""}>여성</label>
                
              </div>
                </Grid>
                {/* <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="sex"
                    label=""
                    name="sex"
                    /> 
                </Grid>*/}
                <div>
                  
                </div>
                <Grid container justifyContent="center" alignItems="center">
                  생년월일
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      fullWidth
                      id="birth_year"
                      label=""
                      name="birth_year"
                    />
                    
                  </Grid>년
                  <Grid item xs={12} sm={2}>
                    <TextField
                      required
                      fullWidth
                      id="birth_month"
                      label=""
                      name="birth_month"
                    />
                    
                  </Grid>월
                  <Grid item xs={12} sm={2}>
                    <TextField
                      required
                      fullWidth
                      id="birth_day"
                      label=""
                      name="birth_day"
                    />
                    
                  </Grid>일 
                </Grid>
                <Grid container justifyContent="center" alignItems="center" marginTop={'45px'} paddingLeft={'13px'} marginBottom={'50px'}>
                  직업
                  <Grid item xs={10}>
                  <select name="job" id="" class="jobSelect">
                    <option value="0" selected>현재 직업을 선택하세요</option>
                    <option value="elementary">초등학생</option>
                    <option value="middle">중학생</option>
                    <option value="high">고등학생</option>
                    <option value="college">대학생</option>
                    <option value="professor">교수</option>
                    <option value="worker">직장인</option>
                    <option value="worker">프리랜서</option>
                    <option value="worker">주부</option>
                    <option value="worker">기타</option>
                  </select> 
                  </Grid>
                </Grid>
                
                
                
                </Grid>
            </div>
            <div className='middleScript'>이용약관</div>
            <div className='policy'>
                <div className='policyContent'>
                  <div class="custom-checkbox">
                    <input type="checkbox" id="agreePolicy" />
                    <label for="agreePolicy">이용약관 동의 (필수)</label>
                  </div>
                </div>
                <div className='policyContent'>
                  <div class="custom-checkbox">
                    <input type='checkbox' id='agreeInfoCollection' />
                    <label for='agreeInfoCollection'>개인 정보 수집 및 이용 동의 (필수)</label>
                  </div>
                </div>
                <div className='policyContent'>
                  <div class='custom-checkbox'>
                    <input type='checkbox' id='agreePromotionEmails' />
                    <label for='agreePromotionEmails'>이벤트 등 프로모션 메일 수신 동의 (선택)</label>
                  </div>
            </div>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,
                backgroundColor: '#4982F7',
                fontFamily: 'Noto Sans KR',
                borderRadius:2,
                boxShadow:5,
                textDecorationStyle:'bold',
                marginBottom: 50
            }}
            >
              회원가입
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  계정이 이미 있으신가요? 로그인하러 가기
                </Link>
              </Grid>
            </Grid> */}
            </Box>
          </div>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      {/* </div> */}
      </Container>
    </div>
  );
}
