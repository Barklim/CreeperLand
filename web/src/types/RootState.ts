import { GithubRepoFormState } from 'app/containers/GithubRepoForm/types';
import { ThemeState } from 'styles/theme/types';
import { DonatPageState } from 'app/containers/DonatPage/types';
import { LoginModalState } from 'app/containers/LoginModal/types';
import { RegisterModalState } from 'app/containers/RegisterModal/types';
import { ChangePasModalState } from 'app/containers/ChangePasModal/types';
import { ForgotPasModalState } from 'app/containers/ForgotPasModal/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  theme?: ThemeState;
  githubRepoForm?: GithubRepoFormState;
  donatPage?: DonatPageState;
  loginModal?: LoginModalState;
  registerModal?: RegisterModalState;
  changePasModal?: ChangePasModalState;
  forgotPasModal?: ForgotPasModalState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
