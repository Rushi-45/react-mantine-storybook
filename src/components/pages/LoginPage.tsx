import AuthLayout from "../templates/AuthLayout";
import LoginForm, { type LoginFormProps } from "../organisms/LoginForm";

type LoginPageProps = Pick<LoginFormProps, "onSubmit" | "isLoading" | "error">;

const LoginPage = (props: LoginPageProps) => (
  <AuthLayout>
    <LoginForm {...props} />
  </AuthLayout>
);

export default LoginPage;
